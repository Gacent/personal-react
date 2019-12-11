# personal-react
## 生命周期
### Test1：常见的生命周期，且是继承Component类，手动使用shouldComponentUpdate判断是否render提高性能
### Test2：继承PureComponent类，原理也是在shouldComponentUpdate里做了浅比较，是自动的，不过对于深比较还是要自己手动shouldComponentUpdate内做处理