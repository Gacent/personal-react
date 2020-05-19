// module.exports=(config)=>{
//   // 如果没有使用customize-cra则在这里对config进行配置
//   return config
// }
const {override,addDecoratorsLegacy} =require('customize-cra')
module.exports = override(
  addDecoratorsLegacy()
)