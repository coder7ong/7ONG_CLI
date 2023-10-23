// 内置模块
const { promisify } = require("util")
const path = require("path")

// 第三方模块
const download = promisify(require("download-git-repo"))
const open = require("open")
const fs = require("fs")
const inquirer = require("inquirer")

// 自己封装模块
const { vueRepo } = require("../config/repo-config")

// 控制台操作
const { commandSpawn } = require("../utils/terminal")
const { compile, writeToFile, createDirSync } = require("../utils/utils")

// 创建项目Action  7ong create <project_name>
const createProjectAction = async (project) => {
  console.log("7ong help you create your project~")
  // 1. clone 项目
  await download(vueRepo, project, { clone: true })

  // 2. 执行 npm install
  await commandSpawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["install"],
    { cwd: `./${project}` }
  )

  // 3. 运行 npm run serve
  commandSpawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "dev"],
    { cwd: `./${project}` }
  )

  // 4. 打开浏览器
  open("http://localhost:8080/")
}

// 新增组件Action 7ong addcpn <component_name>
const addComponentAction = async (name, dest) => {
  // 2. 编译 ejs 模板 result
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  })
  const targetPath = path.resolve(dest, `${name}.vue`)
  writeToFile(targetPath, result)
}

// 新增页面和路由Action 7ong addpage <page_name>  7ong addstore <store_name>
const addPageAndRouteAction = async (name, dest) => {
  const data = { name, lowerName: name.toLowerCase() }
  const pageResult = await compile("vue-component.ejs", data)
  const routeResult = await compile("vue-router.ejs", data)

  // 写入文件之前进行判断文件夹是否存在，防止多 .vue 路径
  if (createDirSync(dest)) {
    const targetPagePath = path.resolve(dest, `${name}.vue`)
    const targetRoutePath = path.resolve(dest, `router.js`)
    writeToFile(targetPagePath, pageResult)
    writeToFile(targetRoutePath, routeResult)
  }
}

// 新增仓库和类型Action 7ong addstore <page_name>  7ong addtypes <store_name>
const addStoreAndTypesAction = async (name, dest) => {
  // 模板固定，直接编译
  const data = { name, lowerName: name.toLowerCase() }
  const storeResult = await compile("vuex-store.ejs", data)
  const typesResult = await compile("vuex-types.ejs", data)

  // 写入文件
  if (createDirSync(dest)) {
    const targetStorePath = path.resolve(dest, `${name}.js`)
    const targetTypesPath = path.resolve(dest, `types.js`)
    writeToFile(targetStorePath, storeResult)
    writeToFile(targetTypesPath, typesResult)
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAndTypesAction,
}
