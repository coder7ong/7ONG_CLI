# 7ong

`7ong` 是一个命令行工具，用于快速生成项目、组件和页面等。

## 安装

在命令行中运行以下命令安装 `7ong`：

```shell
npm i 7ong -g
```

## 使用

### 创建项目

在命令行中运行以下命令即可创建一个项目：

```shell
7ong create <project_name>
```

其中，<project_name> 是你的项目名称。

### 创建组件

在命令行中运行以下命令即可创建一个组件的 Vue 文件：

```shell
7ong addcpn <component_name> [-d src/components]
```

其中，`<component_name>` 是组件的名称，`[-d src/components]` 是可选参数，用于指定组件文件的目录，默认为 `src/components`。

### 创建页面

在命令行中运行以下命令即可创建一个页面的 Vue 文件和对应的路由文件：

```shell
7ong addpage <page_name> [-d src/pages]
```

其中，`<page_name>` 是页面的名称，`[-d src/pages]` 是可选参数，用于指定页面文件的目录，默认为 `src/pages`。

### 创建仓库

在命令行中运行以下命令即可创建一个仓库的 store 文件和对应的 types 类型文件：

```shell
7ong addstore <store_name> [-d src/store]
```

其中，`<store_name>` 是仓库的名称，`[-d src/store]` 是可选参数，用于指定仓库文件的目录，默认为 `src/store`。

## 参考资料

- [7ong GitHub 仓库](https://github.com/coder7ong/7ONG_CLI.git)
