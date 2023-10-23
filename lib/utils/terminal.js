/**
 * 执行终端命令相关的代码
 */
// 开启子进程，在子进程中执行 npm install 的命令不占用本进程
const { exec, spawn } = require("child_process")

const commandSpawn = (command, args, options) => {
  return new Promise((resolve, rejects) => {
    // 开启的子进程
    const childProcess = spawn(command, args, options)
    // 进程信息
    childProcess.stdout.pipe(process.stdout)
    // 错误信息
    childProcess.stderr.pipe(process.stderr)

    // 执行完之后的回调 监听 close 回调
    childProcess.on("close", () => {
      // 执行完之后使用 await 获取结果
      resolve()
    })
  })
}

module.exports = {
  commandSpawn,
}
