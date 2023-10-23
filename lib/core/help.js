const program = require("commander")
const figlet = require("figlet")

const helpOptions = () => {
  // 增加自己的 options
  // 获取当前文件的目录
  program.option(
    "-d --dest <dest>",
    "a destination folder,例如:-d /src/components"
  )
  // 指定框架名称 vue react
  program.option("-f --framework <framework>", "your framework")

  // 监听 --help 事件
  // chalk 配置颜色
  program.on("--help", () => {
    console.log("")

    // 使用 figlet 绘制 Logo
    console.log(
      "\r\n" +
        figlet.textSync("cli-hello", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: true,
        })
    )

    console.log("🌞运行 7ong create <project_name> 即可创建一个项目")
    console.log(
      "🌞运行 7ong addcpn <component_name> [-d src/components] 即可创建一个组件 vue 文件"
    )
    console.log(
      "🌞运行 7ong addpage <page_name> [-d src/pages] 即可创建页面 vue 文件和对应的 router 文件"
    )
    console.log(
      "🌞运行 7ong addpage <store_name> [-d src/store] 即可创建仓库 store 文件和对应的 types 类型文件"
    )
  })
}

module.exports = helpOptions

// 多函数导出
// module.exports = {
// 	helpOptions
// }
