# personal-react
## HOC 高阶组件
- WithCopyRight属于高阶组件，传递的组件需要通过内部{...this.props}传递出去

## 让cra支持@装饰器写法
1. 不管使用什么方式，最好的方式是使用`react-app-rewired`对cra进行轻微调整
2. 安装好后，在package.json把script里的react-scripts替换成`react-app-rewired`
3. 在根目录下创建一个`config-overrides.js`，内容参考
4. 如果想再配置方便，可以安装customize-cra，然后把`config-overrides.js`改成对应的内容