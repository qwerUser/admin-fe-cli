# 安装
```
npm install admin-fe-cli  -g
```

# 创建项目
```
admin-fe-cli init 项目名
```

# 初始换项目
```
进入项目 cd 项目名
npm install
```
## 启动项目
```
修改package.json文件
"scripts": {
	"test": "webpack --progress --env.path=本地静态文件服务的地址 --watch",
	"dev": "webpack --progress"    会在当前文件目录下生成一个dist文件夹，也可以配置nginx指向此文件
},
npm run test  或  npm run dev
```

## 编译
```
router：编译时会自动生成路由文件，pages文件夹下的文件会自动生成路由
例如：pages文件夹下新建home文件夹，下的list.vue,路由即为 /home/list
		 pages文件夹下login.vue,路由即为 /login

store：只需在store文件夹下填写对应的文件即可，编译时会自动写入到index.js文件中

components自定义组件：只需在当前文件夹下写.vue文件，编译时会自动注入全局组件
```

## 依赖包
```
项目已引入elementUI , axios
```

# 其他
```
现在只是一个空的项目，后续会慢慢补全功能
```


