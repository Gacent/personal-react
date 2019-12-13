import React ,{Component,Fragment}from 'react';
import {
  TodoList,
  TodoInput,
  TodoHeader
} from './components'
import {getTodoList} from './service/api'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todolist:[],
      isLoading:false
    }
    this.addTodoClick=this.addTodoClick.bind(this)
    this.onCompletedClick=this.onCompletedClick.bind(this)
    this.getTodo=this.getTodo.bind(this)
  }
  getTodo(){
    this.setState({
      isLoading:true
    })
    getTodoList().then((res)=>{
      if(res.status===200){
        this.setState({
          todolist:res.data
        })
      }
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      this.setState({
        isLoading:false
      })
    })
  }
  componentDidMount(){
    this.getTodo()
  }
  onCompletedClick(id){
    this.setState((preState)=>{
      let arr=preState.todolist.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo
      })
      return {
        todolist:arr
      }
    })
  }
  addTodoClick(value){
    const len=this.state.todolist.length
    let obj={
      id:len+1,
      userId: len+1,
      title:value,
      completed:false
    }
    let arr=[...this.state.todolist,obj]
    this.setState({
      todolist:arr
    })
  }
  render() {
    const {todolist,isLoading} = this.state
    return (
      <Fragment>
        <TodoHeader></TodoHeader>
        <TodoInput addTodoClick={this.addTodoClick}></TodoInput>
        {
          isLoading
          ?
          <div>Loading···</div>
          :
          <TodoList todolist={todolist} onCompletedClick={this.onCompletedClick}></TodoList>
        }
        
      </Fragment>
    )
  }
}
