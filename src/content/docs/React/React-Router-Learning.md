---
title: React Router V7 学习笔记
categories: React
tags:
  - 前端
date: 2025-07-01 16:11:34.429
updated: 2025-07-01 16:11:34.429
---

## 开始一个新的RR7项目

> 前情提要: react router version:V 7.3.0

```shell
npx create-react-router@latest
```

## 项目结构

```
├── Dockerfile //docker 部署文件
├── README.md
├── app
│   ├── app.css // 样式文件
│   ├── root.tsx // 入口文件
│   ├── routes // 路由配置文件夹
│   │   └── home.tsx //
│   ├── routes.ts
│   └── welcome
│       ├── logo-dark.svg
│       ├── logo-light.svg
│       └── welcome.tsx
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── react-router.config.ts
├── tsconfig.json
└── vite.config.ts
```

### 路由配置文件:routes.ts

```ts
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // 设置localhost:3000(主页)为此文件展示内容
] satisfies RouteConfig;
```

### 路由配置: index & layout

> index: 指定首页渲染什么UI
>
> layout: 将其子路由页面渲染为固定在框架内 (注意 <_Outlet_ /> )

![image-20250308上午124841971](https://imgs.iwhy.dev/2025/03/c2e3583f187a966399c7d594b0385225.png)

```ts
//route.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"),// 指定首页打开渲染哪个文件,不被包裹在任何父级布局框架里
  layout("routes/dashboard.tsx", [
    // 指定布局文件,下面被包裹的都会被固定在这个页面的框架下面
    index("routes/home.tsx"), // 指定首页打开渲染哪个文件,且在布局框架里渲染首页
    route("dashboard", "routes/home/home.tsx"), // 指定布局文件下的子路由
    route("setting", "routes/setting/setting.tsx"), // 指定布局文件下的子路由
  ]),
] satisfies RouteConfig;
```

```tsx
// dashboard.tsx

import React from "react";
import { Outlet, Link } from "react-router";

function dashboard() {
  return (
    <div className="flex min-h-screen h-full">
      <div id="sidebar" className="w-64 bg-gray-100/20 h-full min-h-screen">
        <div className="h-full flex flex-col gap-4 p-4">
          <Link to="/dashboard">Home</Link>
          <Link to="/setting">Setting</Link>
        </div>
      </div>
      <div id="detail" className="flex-1 ">
        <Outlet /> // 注意这个类似插槽的Outlet
      </div>
    </div>
  );
}

export default dashboard;
```

React Router

> 渲染UI效果

![image-20250308上午125306217](https://imgs.iwhy.dev/2025/03/e5d43e9bbad8a5687b0d0607ac69cc3c.png)

![image-20250308上午125411463](https://imgs.iwhy.dev/2025/03/ea58da9be3f1bd06f0a484e3481ab27f.png)

![image-20250308上午125418181](https://imgs.iwhy.dev/2025/03/ae340071665843adafee7b56bbf198a9.png)

## 客户端路由(Client side routing)

> Client side routing allows our app to update the URL without reloading the entire page.
>
> (客户端路由允许我们的应用程序更新 URL，而无需重新加载整个页面)

## 数据加载

```tsx
import React from "react";
import type { Route } from "./+types/blog";

// 客户端加载数据

// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//   const post = await res.json();
//   return post;
// }

// 服务端加载数据
export async function loader({ params, request }: Route.LoaderArgs) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await res.json();
  return post;
}

function blog({ loaderData }: Route.ComponentProps) {
  console.log("loaderData==>", loaderData);
  const { title, body, id } = loaderData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{id}</p>
    </div>
  );
}

export default blog;
```

blog list page

```tsx
import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/blogs";

export async function loader({ request }: Route.LoaderArgs) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { posts };
}

function blogs({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  console.log("posts==>", posts);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-300 hover:text-blue-500"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default blogs;
```

### 在同一组件中既使用server loader 又使用client loader

> 需要通过`clientLoader.hydrate = true as const;`指定强制在hydration期间运行clientLoader

```tsx
import React from "react";
import type { Route } from "./+types/blog";

export async function loader({ params, request }: Route.LoaderArgs) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await res.json();
  return post;
}

// clientLoader 会等待 serverLoader 完成后再执行
export async function clientLoader({
  serverLoader,
  params,
}: Route.ClientLoaderArgs) {
  const serverData = await serverLoader();

  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await res.json();
  return { ...serverData, comments };
}

function blog({ loaderData }: Route.ComponentProps) {
  console.log("loaderData==>", loaderData);
  const { title, body, id, comments } = loaderData;
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{body}</p>
      <p>{id}</p>
      <div>
        <span className="text-blue-500">Comments:</span>
        {comments.map((comment: any) => (
          <p key={comment.id}>{comment.body}</p>
        ))}
      </div>
    </div>
  );
}

// export function HydrateFallback() {
//   return <div>Loading...</div>;
// }

// force the client loader to run during hydration
// 强制在hydration期间运行clientLoader
clientLoader.hydrate = true as const; // `as const` for type inference

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default blog;
```

## Actions

### Client Actions

> 客户端action仅在浏览器中运行，并且在定义两者时优先于服务器action。

### Pending UI

#### 全局加载UI pending 状态

```tsx
// root.tsx 全局加载UI
export default function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      // root.tsx 全局加载UI
      {isNavigating && <div className="fixed inset-0 bg-white/50" />}
      <Outlet />
    </>
  );
}
```

#### Link pendig UI

```tsx
<NavLink
  to="/dashboard"
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
>
  Home
</NavLink>
```

#### 表单提交时等待状态

```tsx
// addpost.tsx

import React from "react";
import type { Route } from "./+types/add";

import { Form, redirect } from "react-router";
import { addPost } from "../../../lib/data";
import { useFetcher } from "react-router";

export async function action({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const { id, title } = await addPost(formData.get("title") as string);
  return redirect(`/post`);
}

function AddPost() {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="post">
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit">
          {fetcher.state === "submitting" ? "Submitting..." : "Add"}
        </button>
      </fetcher.Form>
    </div>
  );
}

export default AddPost;
```
