const program = require("commander")

// 导入 actions
const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAndTypesAction,
} = require("./actions")

const createCommands = () => {
  // 创建指令 7ong create <project_name>
  program
    .command("create <project> [others...]")
    // 克隆仓库到一个文件夹
    .description("clone repository into a folder")
    // 输入命令之后的回调函数
    .action(createProjectAction)

  // 创建指令 7ong addcpn <component_name>
  // addCpn 添加组件
  program
    .command("addcpn <name>")
    .description(
      "add vue component 例如:7ong addcpn componentName [-d src/components]"
    )
    .action((name) => {
      // 带了 -d 之后获取传入路径的方式是 program.dest ， src/components 是默认的路径
      addComponentAction(name, program.dest || "src/components")
    })

  // 创建指令 7ong addpage <page_name>
  program
    .command("addpage <page>")
    .description(
      "add vue page and router config 例如: 7ong addpage Home [-d src/pages]"
    )
    .action((page) => {
      addPageAndRouteAction(page, program.dest || `src/pages/${page}`) // src/pages/创建传入 page_name 的文件夹
    })

  // 创建指令 7ong addstore <store_name>
  program
    .command("addstore <store>")
    .description(
      "add store and types config 例如:7ong addstore Home [-d src/pages]"
    )
    .action((store) => {
      addStoreAndTypesAction(store, program.dest || `src/store/${store}`) // src/store/创建传入 store_name 的文件夹
    })
}

module.exports = createCommands
