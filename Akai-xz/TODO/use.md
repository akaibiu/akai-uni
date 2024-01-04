### 初次见面！🌷

<font color="#0000dd">Halo! 😊</font><br /> 
<font color="#dd0000">感谢您选择 Akai-xz 的 uniApp 前端项目模板！</font><br /> 
<font color="#00dddd">此模板只是为您提供了一个简单而有力的起点。但开发过程中仍离不开您的创意和努力，希望这份代码能成为您创作的画布，让您的想象力在这里自由绽放!</font><br /> 
*** 

#### 集成**TuniaoUi** ，它是基于uni-app进行开发的UI框架，提供丰富的组件和丰富的酷炫页面模板方便您快速开发，已支持H5、微信小程序和APP。全面的组件和便捷的工具会让您信手拈来，如鱼得水。
#### 集成**Z-paging** 支持全平台兼容，支持自定义下拉刷新、上拉加载更多，支持虚拟列表，支持自动管理空数据图、点击返回顶部，支持聊天分页、本地分页，支持展示最后更新时间，支持国际化等等。
#### 集成**animate.css**动效库，让您在小程序开发的过程也能实现炫酷的特效！
#### 集成**lodash.js**库，您可以在开发过程中方便的处理一下数据(例如防抖、节流、二维数组转换...)
#### uni.request、uni.upload请求的三层封装，API封装以及页面导入使用及无痛刷新token，让代码更优雅，请求更便捷。
#### 封装了一些常用的功能函数，例如参数转换、时间转换、toast提示、断网提示、confirm确认等。
#### 此模板提供一个全局的config.js，包含项目的一些公共配置(例如:appid、sign、appKey、appSecret、url)等，可供全局访问。
#### 提供了一些常用的页面模板以及布局实例，包含自定义导航栏、梯形选项卡、scroll-box还有下拉刷新上拉加载页面实例模板！
#### 为避免模板项目大小超包,阿凯已为您提前做好分包(包括组件按需加载、分包预加载、图片分包)
***

### 协议指引 📔
*  [![license](https://img.shields.io/badge/version-11.29-plum)](https://en.wikipedia.org/wiki/MIT_License)
*  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/akaibiu)
*  [🌺](https://salephine.asia)
***

### 使用说明 📖

>  Akai-xz 的使用说明我会尽可能的详细，以便您阅读使用！若有辞藻尚未得体之处，请联系我修改！

#### 1.首先您需要下载插件压缩包或者直接通过Hbuilder快速导入项目
* 导入项目之后您需要在此项目根目录初始化项目或下载依赖
* 您可通过`yarn init -y`或`npm init -y`来初始化项目(Tips:默认是不需要初始化项目的奥)
* 然后您再使用`yarn`或`npm install`或`npm i`下载Akai-xz项目所需要的依赖包
* 下载完成之后您可以此项目内的`package.json`或`node_modules`中查看该项目所需依赖
#### 2.更改项目的一些配置信息(项目名)
* 更改`package.json`文件中的`name`
* 更改`manifedt`文件中的`name`属性
* 更改`page.json`文件中的`globalStyle`配置
* 若您可忽略这些，也可直接跳过此步骤。
#### 3.点击Hbuilder开发工具左上角，直接运行即可！
#### 4.若您认为项目内有过多页面或一些功能函数，您可选择性删除!

### 项目内部分模块使用说明 🎺
#### 1.z-paging说明
* `z-paging`是属于`uni_modules`插件，存在于项目根目录下的`uni_modules`文件夹中。您可选中z-paging右键更新或执行其他操作。
* 若项目拉取下来没有`uni-modules`目录或者`uni-modules`目录下没有`z-paging`目录的时候，需在插件市场导入`z-paging`。
*  [z-paging插件网址](https://ext.dcloud.net.cn/plugin?id=3935),点击`使用HbuilderX导入插件`按钮导入到刚才创建的项目。
* z-paging的`下拉刷新`和`上拉加载`案例在`pagesMine/refresh/refresh.vue`中有示例代码！并在此文件中附有详细说明。
* 若您希望有一些其他的案例，详情请查阅[z-paging官方文档👉](https://z-paging.zxlee.cn)，也可加入z-paging的官方交流群进行咨询解惑[371624008](https://jq.qq.com/?_wv=1027&k=vU2fKZZH)
#### 2.animate.css说明
* 您无需单独下载animate.css,我已将您需要的文件都已集成。
* 在项目根目录下`static/animate`文件夹中的`animate.css`便是我们使用animate动画的主要文件了。
* 您可确认animate.css文件中的`:root`选择器是否已被命名为`page`。(注：:root选择器在小程序中不生效!!!)
* 在项目根目录下的`App.vue`文件中，使用`@import '@/static/animate/animate.css';`将animate.css全局引入!
* 通过给元素设置类名来使用animate.css动画特效。例如`animate__animated animate__heartBeat`，其中`animate__animated`是不可或缺的一部分，而`animate__heartBeat`则是动效的运作方式。
* 在`pagesMine/login/login.vue`中，有关于animate.css的使用，您可以在style中根据类名设置运行规律以及持续时间。
* 您可以查阅[animate.css](https://animate.style/)文档获取更多特效案例。
#### 3.lodash.js说明
* 在`pagesMine/lodash/lodash.vue`文件中有关于lodash的简单实用案例说明。
* 详情可查阅[lodash.js官方文档](https://www.lodashjs.com/)
#### 4.request请求说明
* 在项目根目录下的`request/request.js`文件夹中有关于项目的请求封装。其中`request-s.js`是带有`无痛刷新token`功能的。
* 您可以在上面两个文件夹中修改一些配置其中包括请求前后的loading、请求头的配置等。(此文件都已有详细的说明!)
* 在项目根目录的`apis`文件夹中用户管理和存放咱么项目功能模块的请求，其中包括多种请求方式的编写示例以及说明。
* 在`pagesFunc`文件夹中的`refresh.js`文件中有请求示例代码。
```javascript
	onShow(){
		const param={name:'cy',age:23,city:'南京'};
		zhiHuHotListApi(param).then(res=>{
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	}
```
#### 5.upload上传功能
* 在项目根目录下的`upload/upload.js`文件夹中有关于项目的上传封装。和请求封装类似。
#### 6.关于项目分包，您可完全按照我当前设计的来分包仅需要更改page.json中文件名字即可。
#### 7.关于公共函数的使用。`utils/auth.js`或者`utils/common.js`
* common.js文件已在main.js全局挂载，您可以通过`this.tool.xxx()`来使用里面的功能函数，例如`this.tool.toastTip('Akai','success',1030)`
#### 8.公共配置文件congfig.js的使用。
* `config/config.js`文件已在App.vue文件夹中引入并且挂载于globalData上，您可通过`getApp().globalData.config`来访问挂载的config配置对象。
#### 9.vuex状态机的使用(store文件夹和vuex_tool文件夹不可以删除奥)
* 使用的时候请先查看`store/index.js`文件(此文件有详细使用说明)，需要在state中设置咱们需要存储的字段。一般以`vuex_frenidName`这种形式。例如以下
```javascript
state: {
		// ！！！以下就是您需要存在状态机的字段
		vuex_frenidName: null, 
		vuex_girlName:'晨阳'
	},
```
* 在其他地方可以通过`this.vuex.frenidName`来访问存在vuex的变量。
* 如果您需要重新赋值或者设置新的值，赋值`this.vuex('frenidName','阿凯')`。修改`this.vuex('girlName','CY')`
***
#### 10.关于TuniaoUi，请查阅官方文档！
* [图鸟UI官网文档](https://doc.ahuaaa.cn/)，或加入官方交流群！
### 答疑解惑技术交流反馈 🧸
<img src="https://mp-544a8cd9-03b3-41fd-9f50-daa7de994b60.cdn.bspapp.com/cloudstorage/8c467fb0-5827-448f-94c0-87f428f9c8eb.jpg" width="200" /><img src="https://mp-544a8cd9-03b3-41fd-9f50-daa7de994b60.cdn.bspapp.com/cloudstorage/b6630d78-0859-4f50-a6b6-1d6c73b8b375.jpg" width="200" height="260"/>
*  QQ群：**531573361**
*  Wechat：**Akaibiu**
*  <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=TfguIpF07T01TxY0n4nnHCTOZWO6djOU&jump_from=webapi&authKey=S57kk7y9hugIFUol9cQBYct+gnW4h6CPoSgCkfMA9w2EixF+Q2o+bilZTGSfiH+v"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="技术交流反馈QQ群" title="技术交流反馈QQ群"></a>
*  [这里是我的个人博客！👈](https://salephine.asia)
***

### ~ 🌼
*  鸣谢：Tuniao-Ui、z-paging、lodash.js、animate.css！
*  感谢您的信任和支持，如果您在使用过程中有任何疑问或建议，或者您在阅读使用文档的时候遇到了疑惑或者困难，我将格外珍惜您的反馈。欢迎您的咨询~😃
*  **如果您认为Akai-xz对您有帮助，Akai-xz的创作者非常希望您能动动小手评论点赞和收藏一下，诚挚致谢!**
***




