#!/usr/bin/env node

const program = require("commander")

const helpOptions = require("./lib/core/help")
const createCommands = require("./lib/core/create")

// 从 package.json 中获取版本号
program.version(require("./package.json").version)
// 兼容 7ong -v 小写
program.version(require("./package.json").version, "-v,--version")

// 帮助和可选信息
helpOptions()

// 创建其他指令
createCommands()

program.parse(process.argv)
