# React TodoMVC Example in fis


> _[React - facebook.github.io/react](http://facebook.github.io/react)_


## 任务列表

- [ ] 拆分 `css` 到组件
- [ ] 添加组件合并支持，暂时需要把 `.js` 都引入到页面

## 功能

- 支持资源压缩、资源添加 md5 戳、自动替换加 cdn 等
- 支持 ES6、JSX 预编译，不需要运行时转换

## 安装使用

### 安装解析 ES6、JSX 的插件

```
npm install -g xiangshouding/fis-parser-babel
npm install -g fis-postprocessor-require-async
```

### FIS 编译发布

```bash
fis release
```

### 启动 FIS Server 进行查看

```bash
fis server start --type node
```
> fis server -h 更多参数，比如修改端口号或者其他