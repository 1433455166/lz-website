# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## 狼族客户端项目

本项目基于 Vue 3 + Vite 开发，主要用于开发狼族客户端项目。
需要移动端适配请参考 [移动端适配文档](https://cn.vuejs.org/v2/guide/mobile.html)。

## 项目目录结构

```
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── main.ts
│   ├── router
│   ├── styles
│   └── utils
├── vite.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

1. `public` 目录存放静态资源，包括 `favicon.ico` 和 `index.html` 文件。
2. `src` 目录存放项目源码，包括 `App.vue` 入口组件，`assets` 存放静态资源，`components` 存放组件，`main.ts` 入口文件，`router` 存放路由，`styles` 存放样式，`utils` 存放工具函数。
3. `vite.config.ts` 存放 Vite 配置文件。
4. `package.json` 存放项目依赖。
5. `README.md` 存放项目说明。
6. `tsconfig.json` 存放 TypeScript 配置文件。

## 如何运行项目

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 构建生产环境
npm run build
```

## 如何新增页面

1. 在 `src/router` 目录下新增路由配置文件。
2. 在 `src/components` 目录下新增页面组件。
3. 在 `src/router/index.ts` 文件中导入新增的路由配置文件，并将其添加到 `createRouter` 函数中。
4. 在 `src/App.vue` 文件中添加页面入口组件。
5. 在 `src/main.ts` 文件中导入页面组件，并将其添加到 `createApp` 函数中。

## 如何新增组件

1. 在 `src/components` 目录下新增组件。
2. 在需要使用的地方导入组件。
3. 在 `src/main.ts` 文件中导入组件，并将其添加到 `createApp` 函数中。   

## 如何新增样式

1. 在 `src/styles` 目录下新增样式文件。
2. 在 `src/main.ts` 文件中导入样式文件，并将其添加到 `createApp` 函数中。

## 如何新增工具函数

1. 在 `src/utils` 目录下新增工具函数文件。
2. 在需要使用的地方导入工具函数。   

## 如何新增静态资源

1. 在 `src/assets` 目录下新增静态资源文件。
2. 在 `public/index.html` 文件中引用静态资源文件。  