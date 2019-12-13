# personal-react
## react hook
> 让函数式组件也有state等
### useState方法
1. 是一个数组，一个是初始值，一个是赋值的方法。
```javascript
const [name,setName]=useState(10)
// setName(接收一个数值)
```
2. 可以有多个
3. 参数是默认值，一个useState是一个

### useEffect
组件更新的时候执行，相比于类组件的componentDidMount和componentDidUpdate