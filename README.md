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
cp _config.js config.js
npm run dev 基于webpack-dev-server
或者自定义启动命令：
修改package.json文件
"scripts": {
	"test": "webpack --progress --env.path=本地静态文件服务的地址 --watch",
	"dev": "webpack --progress"    会在当前文件目录下生成一个dist文件夹，也可以配置nginx指向此文件
},
```

## 编译
```
router：编译时会自动生成路由文件，pages文件夹下的文件会自动生成路由
例如：pages文件夹下新建home文件夹，下的list.vue,路由即为 /home/list
		 pages文件夹下login.vue,路由即为 /login

store：只需在store文件夹下填写对应的文件即可，编译时会自动写入到index.js文件中
	命名规则：文件夹名+”_“+文件名
	例如：this.$store.state.setting_user.userName  setting即为store下的文件夹名称，user即为setting文件夹下的.js文件名

components自定义组件：只需在当前文件夹下写.vue文件，编译时会自动注入全局组件
	命名规则：文件夹名+”-“+文件名
	例如：setting-user组件  setting即为components下的文件夹名称，user即为setting文件夹下的.vue文件名，如果.vue文件名为user-test组件名则为setting-user-test
```

## 用户菜单权限文件
```
用户菜单权限文件目录为src/js/modules/menu.js，最多支持三级菜单。
分为：
一级菜单对象firstMenu：一级菜单没有parent字段和path字段
二级菜单对象secondMenu：二级菜单没有path字段，但是必须有parent字段对应到一级菜单
权限菜单对象permission：无论是一级菜单或是二级菜单只要该菜单下再无其他菜单就要配置到此对象中
	键名为权限对应的名称；
	parent对应为一级或二级菜单的键名，如果该权限为一级菜单parent字段可能不填；
	name为菜单名称；
	key值不能重复；
	path为对应的路由
	const permission = {
		'userSettingList':{
			parent:'userSetting',
			name:'用户列表设置',
			key:'userSettingList',
			path:'/user/settingList'
		}
	}
```

## 依赖包
```
项目已引入elementUI , axios , vue-router , vuex
```
