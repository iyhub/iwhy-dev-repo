---
title: React学习笔记
categories: React
tags: 
  - 前端
date: 2024-05-19 16:11:34.429
updated: 2024-05-19 16:11:34.429
---

## JSX

### 基本格式

```TypeScript
import logo from './logo.svg';
import './App.css';

function App() {
  const divContent = "div内容"
  const divTitle = "div标题"

  return (
    <>
    <div className="App">
      <div title={divTitle}>{divContent}</div>
    </div>
    </>
  );
}

export default App;
```

- return 返回组件 且必须有一个根组件
- 如果不需要根节点 可以使用<></>

脚本部分可以直接返回节点

```TypeScript
function App() {
  const divContent = "div内容"
  const divTitle = "div标题"
  const flag = false
  let content = flag ? <div>这是个div</div> : <span>这是个span</span>
  return (
    <>
    <div className="App">
      <div title={divTitle}>{divContent}</div>
      {content}
    </div>
    </>
  );
}

export default App;
```

### 数据渲染

注意这里的`item => ()` 而不是`item => {}` 

`item => ()`: 当你使用圆括号 `()` 包裹箭头函数的内容时，它表示你正在返回一个表达式的结果。

`item => {}`: 当你使用花括号 `{}` 包裹箭头函数的内容时，它表示你正在定义一个函数体。

```TypeScript
function App() {
  const list = ["1","2","3"]
  const lis = list.map(item=>(
    <li>{item}</li>
  ))
  return (
    <>
    <div className="App">
      <ul>
        {lis}
      </ul>
    </div>
    </>
  );
}

export default App;
```

`Fragment` 标签

我们前面说到了返回组件 且必须有一个根标签,此时我我们可以使用`<Fragment>`

```TypeScript
function App() {
  const list = [
    {id:1 ,name:"1"},
    {id:2,name:"2"},
    {id: 3,name:"3"}
  ]
  
  const lis = list.map(item=>(
    <Fragment key={item.id}>
    <li key={item.id}>{item.name}</li>
    <li> ---------- </li>
    </Fragment>
  ))

  return (
    <>
    <div className="App">
      <ul>
        {lis}
      </ul>
    </div>
    </>
  );
}

export default App;
```

### 事件处理

事件驼峰命名方式

```TypeScript
import { Fragment, useState } from 'react';

function App() {
  function handleClick(){
    console.log("handleClick");
  }

  return (
    <>
    <div className="App">
      <button onClick={handleClick}>Button</button>
    </div>
    </>
  );
}

export default App;
```

### `useState`状态处理

`const [content,setContent] = useState("初始内容")`content 用于读取,setContent函数用于写值更新,`useState("初始内容")` ""内为content初始值

```TypeScript
import { Fragment, useState } from 'react';

function App() {
  // 类似java 的 getter setter
  const [content,setContent] = useState("初始内容")
  function handleClick(){
    console.log("handleClick");
    // 修改内容
    setContent("点击之后的内容")
  }

  return (
    <>
    <div className="App">
      {content}
      <button onClick={handleClick}>Button</button>
    </div>
    </>
  );
}

export default App;
```

### 状态处理:修改对象属性

需要修改的属性注意写在对象字段展开之后

```TypeScript
import { Fragment, useState } from 'react';

function App() {
  const [person,setPerson] = useState(
    {
      id:1,
      name:"张三",
      address:"上海-闵行"
    }
  )
  function handleClick(){
    console.log("handleClick");
    setPerson({
      ...person,// 对象字段展开
      address: "上海-宝山"
    }
    )
  }

  return (
    <>
    <div className="App">
      <div>{person.name}-{person.address}</div>
      <button onClick={handleClick}>Button</button>
    </div>
    </>
  );
}

export default App;
```

### 状态处理:修改列表数据 / 过滤列表数据

```TypeScript
import { Fragment, useState } from 'react';

let currentId = 5
function App() {
  const [list,setList] = useState(
    [{
      id:1,
      name:"张三",
      address:"上海-闵行"
    },
    {
      id:2,
      name:"李四",
      address:"上海-宝山"
    }
  ]
  )
  function handleFilter(){
    setList(
      list.filter(item=>item.id!==2)
    )
  }

  function handleClick(){
    console.log("handleClick");
    setList(
      [
        ...list,
        {
        id:++currentId,
        name:"匿名用户",
        address:"上海-宝山"
      }
      ]
    )
  }

  return (
    <>
    <div className="App">
      {
      list.map(item=>(
        <Fragment key={item.id}>
        <li>{item.id}--{item.name} -- {item.address}</li>
        </Fragment>
      ))
      }

      <button onClick={handleClick}>Add User</button>
      <button onClick={handleFilter}>Filter User(id!==2)</button>
    </div>
    </>
  );
}

export default App;
```

### React组件

### 组件导入和使用

```TypeScript
import image from './logo.svg'

function App() {
  return (
    <>
    <div className="App">
    <img src={image} alt='logo'></img>
    </div>
    </>
  );
}

export default App;
```

### 组件对JSX展开语法的支持

```TypeScript
import image from './logo.svg'

function App() {
  const styleObj = {
    width:200,
    backgroundColor:"red"
  }

  const propsObj = {
    className:'small',
    style:styleObj
  }

  return (
    <>
    <div className="App">
    <img 
      src={image} 
      alt='logo'
      className='small'
      style={styleObj}
    ></img>

    <br></br>
    {/* 下图效果和上面的一致 */}
    <img 
      src={image} 
      alt='logo'
      // 展开语法
      {...propsObj}
    ></img>

    </div>
    </>
  );
}

export default App;
```

### `Article`组件封装,父组件传递信息给子组件

写法一

```TypeScript
import { Fragment } from 'react';

function Article(props){
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <p>{props.contnet}</p>
    </Fragment>
  )
}

function App() {
  

  return (
    <>
    <div className="App">
      <Article title="title 1" contnet="内容1"/>
      <Article title="title 2" contnet="内容2"/>
    </div>
    </>
  );
}
export default App;
```

写法二:解构方式

```TypeScript
import { Fragment } from 'react';

function Article({title,contnet,active}){
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{contnet}</p>
      <span>状态: {active ? '激活' : '隐藏'}</span>
    </Fragment>
  )
}

function App() {
  

  return (
    <>
    <div className="App">
      <Article title="title 1" contnet="内容1" active/>
      <Article title="title 1" contnet="内容1" active/>
      <Article title="title 2" contnet="内容2"/>
    </div>
    </>
  );
}
export default App;
```

### children 属性实现类似插槽功能

```TypeScript
import { Fragment } from 'react';

function List({children,title,fotter=<p>---默认尾巴---</p>}){
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {children}
      </ul>
      {fotter}
    </>
  );
}

function App() {
  return (
    <>
    <div className="App">
      <List title="模块1">
        <li>1</li>
        <li>3</li>
        <li>2</li>
      </List>
      

      <List title="模块2">
        <li>1</li>
        <li>3</li>
        <li>2</li>
      </List>

      <List title="模块3" fotter={<p>模块3尾巴</p>}>
        <li>1</li>
        <li>3</li>
        <li>2</li>
      </List>
      
    </div>
    </>
  );
}
export default App;
```

### 子组件向父组件传递数据

```TypeScript
import { useState } from 'react';
let current = 0

function Detail({parentCount}){
  const [count,setCount] = useState(0)
  function handleClick(){
    ++current
    setCount(current)
    parentCount(current)
  }
  return (
  <>
    <h2>detail</h2>
    <h3>当前count:{count}</h3>
    <button onClick={handleClick}>Add Count</button>
  </>)
}

function App() {
  function hanleValue(value){
      console.log("child current value:",value);
  }

  return (
    <>
    <div className="App">
      <Detail parentCount={hanleValue}/>
    </div>
    </>
  );
}
export default App;
```

## React Hooks

### `useReducer`统一状态管理

```TypeScript
import { useReducer } from 'react';

function Detail({parentCount}){
  // const [当前值,状态触发器] = useReducer(状态管理的函数,状态默认值)
  const [count,dispatcher] = useReducer(counterReducer,0)

  // 不同的处理逻辑 状态触发器(类型参数)
  const handleIncr = () =>dispatcher({type:"incr"})
  const handleDecr = () =>dispatcher({type:"decr"})

  // 状态管理的函数,
  // count:需要管理的属性 
  // action:对这个状态需要进行哪些操作
  function counterReducer(count,action){
      switch (action.type){
        case "incr":
          return count+1
        case "decr":
          return count-1
        default:
          throw new Error()
      }
  }

  return (
  <>
    <h3>当前count:{count}</h3>
    <button onClick={handleIncr}>InCrement Count</button>
    <button onClick={handleDecr}>Decrement Count</button>
  </>)
}

function App() {
  function hanleValue(value){
      console.log("child current value:",value);
  }

  return (
    <>
    <div className="App">
      <Detail parentCount={hanleValue}/>
    </div>
    </>
  );
}
export default App;
```

### `useRef`获取上一次的值

```TypeScript
import { useRef,useState } from 'react';

function Detail({parentCount}){
  const [count,setCount] = useState(0)
  const prevCount = useRef(0);
  
  const handleIncr = () => {
    prevCount.current = count;
    setCount(count+1);

  }
  const handleDecr = () => {
    prevCount.current = count;
    setCount(count-1);
  }

  return (
  <>
    <h3>当前count:{count}</h3>
    <h3>prevCount:{prevCount.current}</h3>
    <button onClick={handleIncr}>InCrement Count</button>
    <button onClick={handleDecr}>Decrement Count</button>
  </>)
}

function App() {
  function hanleValue(value){
      console.log("child current value:",value);
  }

  return (
    <>
    <div className="App">
      <Detail parentCount={hanleValue}/>
    </div>
    </>
  );
}
export default App;
```

### useRef获取/操作DOM

```TypeScript
import { useRef,useState } from 'react';

let currentValue = 0

function Detail({parentCount}){
  const inputRef = useRef(null);
  const [count,setCount] = useState(0)

  const handleIncr = () => {
    // 获取input的focus事件,为input输入内容
    inputRef.current.focus();
    setCount(++currentValue)
    inputRef.current.value = currentValue;
  }

  return (
  <>
    <h3>当前count:{count}</h3>
    input value:<input type="text" ref={inputRef}/>
    <button onClick={handleIncr}>InCrement Count</button>
  </>)
}

function App() {
  function hanleValue(value){
      console.log("child current value:",value);
  }

  return (
    <>
    <div className="App">
      <Detail parentCount={hanleValue}/>
    </div>
    </>
  );
}
export default App;
```

### useRef暴露方法给父组件

```TypeScript
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Child =  forwardRef(function(props,ref) {
  // useImperativeHandle 接受一个 ref 对象和一个函数作为参数。
  //它将在组件挂载时创建一个名为 current 的属性，该属性将存储 fn 函数返回的对象。
  useImperativeHandle(ref, () => ({
    myFn: () => {
      console.log("child fn");
    },
  }));

  return (
    <>
      <h2>Child Comp</h2>
    </>
  );
})

function App() {
  const childRef = useRef();
  function callChildFn() {
    childRef.current.myFn();
  }

  return (
    <>
    <div className="App">
      <Child ref={childRef} />

      <button onClick={callChildFn}>Call Child Fn</button>
    </div>
    </>
  );
}
export default App;
```

### `useEffect`

```TypeScript
import { useEffect, useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  // 任何组件的更新都会触发useEffect函数
  useEffect(()=>{
    console.log("useEffect");
  })

  // 只有count变化的时候才会触发useEffect函数
  useEffect(()=>{
    console.log("useEffect");
  },[count])
  return (
    <>
    <div className="App">
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
    </>
  );
}
export default App;
```

### `useMemo`缓存数据



### `useCallback`缓存函数

> 使用场景避免 父组件的状态变更 导致子组件重新渲染

```jsx
import {useState} from "react";


const Child = ({handleClick}) => {
    // 父组件的状态变更会导致子组件重新渲染
    console.log('Child')
    return (
        <>Child
            <button onClick={handleClick}>add from child</button>
        </>

    );
}


function App() {
    const [count, setCount] = useState(1)

    function handleUpdate(){
        setCount(count+1)
    }
    return (
        <div style={{padding: 20}}>
            <div>Parent:{count}</div>

            <br/>
            <Child handleClick={handleUpdate}></Child>
        </div>
    );
}

export default App;

```

> 1.将子组件设置为记忆组件
> 2.回调函数设置为记忆函数

```tsx
import {memo, useCallback, useMemo, useState} from "react";


// memo：将子组件设置为记忆组件
const Child = memo(function ({handleClick}) {
        console.log("child render")
        return (
            <div>
                child
                <button onClick={handleClick}>child add</button>
            </div>
        )
    }
)


function App() {
    const [count, setCount] = useState(1)

    const handleUpdate = function () {
        setCount(count + 1)
    }
    // 方法设置为记忆函数
    const handleClick = useCallback(function handleClick() {
        console.log("点击了父组件button")
    }, [])

    return (
        <div style={{padding: 20}}>
            <div>Parent:{count}</div>
            <button onClick={handleUpdate}>parent add count button</button>

            <br/>
            <Child handleClick={handleClick}></Child>
        </div>
    );
}

export default App;
```
