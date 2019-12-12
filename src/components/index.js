const modulesFiles = require.context('./component', true, /index.js/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const endmoduleName=moduleName.replace(/(.*)\/index/,'$1')
  const value = modulesFiles(modulePath)
  modules[endmoduleName] = value.default
  return modules
}, {})
let obj={
  a:123
}
console.log(...obj)
export{
  modules
}

// export { default as Test1 } from './Test1'
// export { default as Test2 } from './Test2'