// 对 ejs 进行编译
const fs = require("fs")
const inquirer = require("inquirer")
const ejs = require("ejs")
const path = require("path")

const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`
  // 对路径进行拼接
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    // 第一个参数绝对路径
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

// 如果传入路径文件夹不存在，则递归创建文件夹
const createDirSync = (pathName) => {
  // 判断子文件夹是否存在    source/conponents/category
  if (fs.existsSync(pathName)) {
    return true
  } else {
    // 子文件夹不存在,判断父文件夹是否存在？ path.dirname 获取父路径  source/conponents
    if (createDirSync(path.dirname(pathName))) {
      // 存在父文件夹，就直接新建该文件夹
      fs.mkdirSync(pathName)
      return true
    }
  }
}

// 写入文件通用方法，删除判断文件夹代码
const writeToFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

module.exports = {
  compile,
  writeToFile,
  createDirSync,
}
