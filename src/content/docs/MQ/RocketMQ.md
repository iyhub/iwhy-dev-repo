---
title: RocketMQ
date: 2024-04-12 09:53:49.573
updated: 2024-04-12 09:53:49.573
categories: MQ
tags: MQ
---

## RocketMQ架构

![image-20240412115451438](https://imgs.iwhy.dev/2024/04/db29f6dc2e883b0ab5d6a34319079555.png)

## RocketMQ消费模式

### 广播形式(broadcast)

一个topic名下的消息可以被多个消费者消费

### 集群模式

允许N个queue被一个消费者消费

一个queue不允许被多个消费者消费，

## 不同模式下的offset维护的区别

广播形式：消费者维护消费者消费的的offset

集群模式：由集群维护消费者消费的的offset，消费者平摊消息队列里的消息

## RocketMQ VS Kafka

Kafka: 既能**存贮**数据也能担任MQ的功能

RocketMQ：MQ也是一个DB,**DB既能存贮数据也能索引数据和分析数据的能力**

## RocketMQ的特点

### RocketMQ的IndexService

#### RocketMQ作为DB的体现：

消息归属于那个topic

消息的tag,子主题的功能

KV格式的Properties：对于消费者端可以选择性消费

### 基于request-reply模型的RPC调用

- [ ] ToDo 完善

## 消息的顺序

无序

有序：

- 全局有序：
  - 只能有一个producer 一个queue。当然也可以通过分布式锁等技术来保证多个消费者顺序打入一个queue，但是增加了系统的复杂性。
  - 适用场景：性能要求不高的场景。
- 局部有序：topic名下会有多个queue，相关联的消息保证顺序打入到同一个queue，允许不相关的消息打入到不同的queue

### RocketMQ的存储设计

