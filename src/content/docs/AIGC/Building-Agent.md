---
title: 构建Agent
slug: Building-Agent
---
# 构建基础RAG Agent
在 LlamaIndex 中，代理是由LLM提供支持的半自主软件，它被赋予任务并执行一系列步骤来解决该任务。它被赋予了一组工具，可以是从任意函数到完整的 LlamaIndex 查询引擎的任何工具，并且它会选择最佳的可用工具来完成每个步骤。当每个步骤完成时，代理会判断任务现在是否已完成，在这种情况下，它会向用户返回结果，或者是否需要采取另一步骤，在这种情况下，它会循环回到开始处。

## Agent构建基本步骤
1. 构建基本代理
2. 初始化LLM
3. 初始化代理
4. 询问问题

## 构建基础Agent
```python
%env GOOGLE_API_KEY=AIzaSyCOlxxxGOuu9k
```


```python
    from llama_index.core.agent import ReActAgent
    from llama_index.llms.openai import OpenAI
    from llama_index.core.tools import FunctionTool
    from llama_index.llms.gemini import Gemini
    from llama_index.core.llms import ChatMessage

    # 定义两个函数作为及基本代理
    def multiply(a: float, b: float) -> float:
        """Multiply two numbers and returns the product"""
        return a * b


    multiply_tool = FunctionTool.from_defaults(fn=multiply)


    def add(a: float, b: float) -> float:
        """Add two numbers and returns the sum"""
        return a + b


    add_tool = FunctionTool.from_defaults(fn=add)
    # 初始化LLM
    llm=Gemini()
    # init agent
    agent = ReActAgent.from_tools([multiply_tool, add_tool], llm=llm, verbose=True)

    response = agent.chat("What is 20+(2*4)? Use a tool to calculate every step.")
    print(response)
```

```
> Running step 9a713660-ef82-48b4-9e4c-e274438c90ae. Step input: What is 20+(2*4)? Use a tool to calculate every step.
Thought: The current language of the user is: English. I need to use a tool to help me answer the question.
Action: multiply
Action Input: {'a': 2, 'b': 4}
Observation: 8
> Running step 5de19266-3b35-4aae-a575-bf7095578b50. Step input: None
Thought: The current language of the user is: English. I need to use a tool to help me answer the question.
Action: add
Action Input: {'a': 20, 'b': 8}
Observation: 28
> Running step 53263b67-a322-40c7-a9a9-2f7a5367770a. Step input: None
Thought: I can answer without using any more tools. I'll use the user's language to answer
Answer: 20 + (2 * 4) = 20 + 8 = 28
20 + (2 * 4) = 20 + 8 = 28
```

## 构建RAG Agent

> 需求背景是通过RAG Agent来查询2023年加拿大联邦预算的总金额，并将其乘以3。
> (相关数据地址,存为pdf在data文件夹:https://en.wikipedia.org/wiki/2023_Canadian_federal_budget)

```python
    import chromadb
    from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
    from llama_index.vector_stores.chroma import ChromaVectorStore
    from llama_index.core import StorageContext
    from llama_index.core import Settings
    from llama_index.embeddings.huggingface import HuggingFaceEmbedding
    from llama_index.llms.gemini import Gemini
    from llama_index.core.llms import ChatMessage
    from llama_index.core.tools import QueryEngineTool


    def multiply(a: float, b: float) -> float:
        """Multiply two numbers and returns the product"""
        return a * b


    multiply_tool = FunctionTool.from_defaults(fn=multiply)


    def add(a: float, b: float) -> float:
        """Add two numbers and returns the sum"""
        return a + b


    # load some documents
    documents = SimpleDirectoryReader("./data").load_data()

    # initialize client, setting path to save data
    db = chromadb.PersistentClient(path="./demo_01/chroma_db")

    # create collection
    chroma_collection = db.get_or_create_collection("demo_01")

    # assign chroma as the vector_store to the context
    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    Settings.embed_model = HuggingFaceEmbedding(
        model_name="BAAI/bge-small-en-v1.5"
    )
    # create your index
    index = VectorStoreIndex.from_documents(
        documents, storage_context=storage_context
    )

    from llama_index.llms.gemini import Gemini
    multiply_tool = FunctionTool.from_defaults(fn=multiply)

    add_tool = FunctionTool.from_defaults(fn=add)
    llm=Gemini()

    response = query_engine.query(
        "What was the total amount of the 2023 Canadian federal budget?"
    )
    print(response)

    budget_tool = QueryEngineTool.from_defaults(
        query_engine,
        name="canadian_budget_2023",
        description="A RAG engine with some basic facts about the 2023 Canadian federal budget.",
    )

    agent = ReActAgent.from_tools(
        [multiply_tool, add_tool, budget_tool], verbose=True
    )

    response = agent.chat(
        "What is the total amount of the 2023 Canadian federal budget multiplied by 3? Go step by step, using a tool to do any math."
    )

    print(response)
```
output:
```
The total amount of the 2023 Canadian federal budget was $496.9 billion. 

> Running step 60d1c77d-0776-4eae-bd68-4d16eda5a15f. Step input: What is the total amount of the 2023 Canadian federal budget multiplied by 3? Go step by step, using a tool to do any math.
Thought: I need to use the `canadian_budget_2023` tool to get the total amount of the 2023 Canadian federal budget. Then I will use the `multiply` tool to multiply the result by 3.
Action: canadian_budget_2023
Action Input: {'input': 'What is the total amount of the 2023 Canadian federal budget?'}
Observation: The total amount of the 2023 Canadian federal budget is $496.9 billion. 

> Running step ef455a0f-c88f-4d4c-80b5-f24fb10d6369. Step input: None
Thought: I have the total amount of the 2023 Canadian federal budget. Now I need to multiply it by 3.
Action: multiply
Action Input: {'a': 496.9, 'b': 3}
Observation: 1490.6999999999998
> Running step 44e8ab76-a03d-42ff-bce5-5904d50ac209. Step input: None
Thought: I can answer without using any more tools. I'll use the user's language to answer
Answer: The total amount of the 2023 Canadian federal budget multiplied by 3 is $1,490.7 billion.
The total amount of the 2023 Canadian federal budget multiplied by 3 is $1,490.7 billion.
```
