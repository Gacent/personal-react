import http from './index'

export const getTodoList=()=>{
  return http({
    url:'/todos'
  })
}