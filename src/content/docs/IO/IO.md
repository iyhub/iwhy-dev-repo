---
title: IO相关知识
date: 2024-03-28 15:53:49.573
updated: 2024-03-28 15:53:49.573
categories: IO
tags: IO
---

## 前置语义（技术词汇）

VFS:虚拟文件系统，linux系统中万物皆文件

inode：描述文件系统中某个文件的文件ID

pageCache

> 对于2个应用想打开同一个文件的时候，当虚拟文件发现已经加载过了，会尝试从pagecache中加载，文件系统维护自己的指针位置。

dity: 当pagecache被修改了，pageache会被标识为dity,后续再flush到磁盘，什么时候flush? 同步刷、交由内核控制什么时候刷

fd: file description 文件描述符

seek: 基于指针读取到文件的不同位置；不同进程之间基于虚拟文件系统（liunx中进程也是文件），维护自己的offset。











## 问题：

pageCache的刷脏时机，宕机导致数据丢失？

- 阈值刷
- 定期刷

## 其他知识：

- 迭代器的原理：给每个线程分配一个数据指针，基于指针去读取数据数据

- linux中的`df`命令

- linux中的`dd`命令

  ```sh
  # 将dev/sda0磁盘打包备份问backup.img
  dd if=dev/sda0 of=backup.img
  # 填充一个空文件的name.img文件
  dd if=dev/zero of=name.img
  # 数据拷贝
  dd if=org.img of=copy.img
  # 数据恢复
  dd if=backup.img of=dev/sda0
  ```

  

- linux中磁盘挂载

  ```shell
  # 将/dev/sdb1 设备挂载到/mnt目录下。/dev/sdb1 是设备的名称，而/mnt 是挂载点，即将设备中的内容添加到文件系统中的位置。
  mount /dev/sdb1 /mnt
  ```

- Linux中的文件类型

  `-` 可执行文件

  `d` 目录

  `b`: 块设备 eg：硬盘

  `c`: 字符设备 ，eg:终端进程

  `s`：socket

  `p`：pipline

  `enventpoll` ：

  `l` ：链接

- Linux的`lsof pid`命令：显示进程打开了哪些文件（ lsof - list open files）

  其中offset描述的是对于文件读取的偏移量

  ![image-20240414100315104](https://imgs.iwhy.dev/2024/04/bb4dc20e0e33973065d8af7f30c6e811.png)

  

- 硬链接 软连接

  硬链接：`ln  /root/org.txt /root/linked.txt` 物理地址上是同一个文件

  软链接：`ln -s /root/org.txt /root/copy.txt`

  硬链接是文件系统中的一个额外条目，而软链接是一个包含指向文件路径的特殊文件。硬链接指向相同的 inode，而软链接指向另一个文件的路径。

  ```sh
  -> % echo 'helloworld' > org.txt
  (base) zy@young [00时07分11秒] [~/Desktop/test]
  -> % ln org.txt hard.txt
  (base) zy@young [00时07分27秒] [~/Desktop/test]
  -> % ln -s org.txt soft.txt
  (base) zy@young [00时07分42秒] [~/Desktop/test]
  -> % ls
  hard.txt org.txt  soft.txt
  (base) zy@young [00时07分45秒] [~/Desktop/test]
  -> % ll
  total 16
  -rw-r--r--  2 zy  staff    11B  4 13 00:07 hard.txt
  -rw-r--r--  2 zy  staff    11B  4 13 00:07 org.txt
  lrwxr-xr-x  1 zy  staff     7B  4 13 00:07 soft.txt -> org.txt
  ```

  当hard.txt被删除的时候，org.txt的inode硬链接引用会减一

  <img src="https://imgs.iwhy.dev/2024/04/12f34f55d1e712598f2850db5946c571.png" alt="image-20240413001235769" style="zoom:50%;" />

  

  - 交换区

    交换区（也称为交换文件或交换空间）是操作系统中的一块特殊区域，用于辅助管理内存。**它在计算机内存不足时发挥作用**，**允许操作系统将不常用的内存数据存储到磁盘上，从而释放出内存供其他程序使用**。

    想象一下你的计算机内存就像一个写满了纸条的桌子，如果桌子满了，你需要把一些纸条移到抽屉里才能腾出空间。交换区就像这个抽屉，当内存快满时，操作系统将一些不怎么用的数据写入交换区，然后再将其他需要的数据调入内存。这样就可以确保内存中始终有足够的空间来运行程序，即使实际物理内存不够用。

    但是，与内存相比，磁盘速度较慢，因此将数据写入和读取出交换区会比在内存中操作慢。这就是为什么当计算机开始使用交换区时，性能可能会下降的原因之一。因此，尽管交换区提供了一种解决内存不足的方法，但最好的情况是尽量避免使用它，因为在内存中运行的程序通常比在交换区中运行的程序更快更有效率。



