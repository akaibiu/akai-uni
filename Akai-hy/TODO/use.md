## 亮点介绍
### **Z-paging** 支持全平台兼容，支持自定义下拉刷新、上拉加载更多，支持虚拟列表，支持自动管理空数据图、点击返回顶部，支持聊天分页、本地分页，支持展示最后更新时间，支持国际化等等。
### **uView-Ui2.0**是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。
*      [z-paging官方文档](https://z-paging.zxlee.cn/)
*      [z-paging-Dcloud下载地址](https://ext.dcloud.net.cn/plugin?id=3935)
*      [uView2.0官方文档](https://www.uviewui.com/components/intro.html)
*      此模板已集成`z-paging`、`uView-ui2.0`、`lodash.js`、`animate.css`等强大UI以及js功能库。
*      模板包含请求封装、token无痛刷新、公共js功能函数封装、页面模板、公共配置封装。
***

### 其他指引
[![version](https://img.shields.io/badge/version-2.4.8-blue)](https://github.com/SmileZXLee/uni-z-paging)
*  [个人博客访问地址(博客收录，每日学习，面试笔记，踩坑防坑请查阅)](https://salephine.asia)
*  [开源博客项目Gitee地址](https://gitee.com/AkaiBlog/akai-blog)
*  [开源博客项目Github地址](https://github.com/akaibiu/akaibui.github.io)
*  [此模板Gitee代码仓库地址](https://gitee.com/AkaiBlog/akai-uni)
*  [uView2.0模板项目地址](https://ext.dcloud.net.cn/plugin?id=10882).
***


### 功能&特点
*  敏捷开发，集成`uView-Ui`、高性能刷新组件,(烦请您提前做好分包，避免项目整包超过2mb)。
*  集成了`animate.css`动画库，并附有使用案例。
*  集成了lodash.js工具库，并附有使用案例。
*  `axios`三层封装,让代码更优雅，请求更便捷。用户达到下载即使用!
*  请求封装包括是否携带`token`请求头设置,并加入请求拦截和响应拦截。
*  请求封装已实现`无感刷新token`,已请求拦截和响应拦截。(具体使用需要结合自身业务，建议在使用之前先查看request目录下的request-s.js文件)
*  加入自己项目所用到的一些页面，(表单、登录、个人信息、`刷新加载`、`全屏滚动`)等。
*  后续会封装一些好看的组件供使用。(会包含卡片、按钮、单选框、开关、输入框、加载器、`Flex完美布局`等)，敬请期待吧!
*  平台目前仅测试过`微信小程序`和`H5`，其他平台谨慎使用，如有疑惑联系我!
***


### 答疑解惑骚扰作者，技术交流群:**531573361**
<img src="https://mp-544a8cd9-03b3-41fd-9f50-daa7de994b60.cdn.bspapp.com/cloudstorage/8c467fb0-5827-448f-94c0-87f428f9c8eb.jpg" width="200" /><img src="https://mp-544a8cd9-03b3-41fd-9f50-daa7de994b60.cdn.bspapp.com/cloudstorage/b6630d78-0859-4f50-a6b6-1d6c73b8b375.jpg" width="200"/>
*  QQ:**1494598731**
*  Wechat(24小时在线、秒回)  **Akaibiu**
***


### 使用说明
* [使用说明在线文档](https://salephine.asia)
* 1.下载插件，更改项目名称(包含package.json里的项目名称)
* 2.下载项目所需依赖(若无包管理文件需要先初始化包管理文件)<br />&ensp;&ensp;&ensp;1.有包管理文件执行`npm install` /  `npm i` / `yarn` <br />&ensp;&ensp;&ensp;2.无包管理文件执行`npm init -y` / `yarn` 之后再执行 `npm install` /  `npm i` / `yarn`
* 3.下载完成之后直接运行即可。
* 4.关于页面配置(若您有不需要的页面模板等，直接删除即可，同时记得删除掉page.json的页面配置代码)
* 5.关于请求封装和token携带都已写好(pages/mine/mine.vue有示例请求)。
* 6.若您还有些许疑问。请您加我微信`**Akaibiu**`,我会为您一对一解答。
***


### 其他说明
*  温馨提示：若Tuniao_Ui或者模板在使用中遇到问题可向我咨询。`z-paging`使用若遇到问题请详阅文档(阅读文档可解决99.99%的问题)。
*  下载之后更改项目名称,下载所需依赖。
*  若项目拉取下来没有`uni-modules`目录或者`uni-modules`目录下没有`z-paging`目录的时候，需在插件市场导入`z-paging`
*  [z-paging插件网址](https://ext.dcloud.net.cn/plugin?id=3935),点击`使用HbuilderX导入插件`按钮导入到刚才创建的项目。
*  删除所不需要的文件夹或者没有用到的静态资源,例如`TODO`文件夹。
*  服务器地址再`config`文件夹里面配置。
*  如果需要`token`在`request`文件夹配置。另外在`axios`请求第二层封装也应该去设置`isToken`为true。
*  关于接口请求示例代码在`pages/mine/mine.vue`文件有示例代码(1.引入第二层封装的api函数，2.使用)。
*  关于`animate.css`库的使用以及注意事项在`App.vue`文件和`static/animate`文件中已体现，使用案例在`pages/mine/mine.vue`文件有示例代码。
*  关于`utils`文件的公共配置js文件，已全局挂载，如需使用查看改文件暴露函数即可，若您想封装一些全新的，也可参考此文件。`(this.tool.toastTip('小周要开心','none',1020))`。
*  !!!导入之后请查看`main.js`文件和`App.vue`文件，里面有关于`全局config`和`tool`的挂载引入。可在全局使用该配置信息。
*  z-paging高性能全平台兼容刷新和加载插件期待您的使用(兼容vue2、vue3)。[z-paging官方文档](https://z-paging.zxlee.cn/)   
***


### 我真的会谢
*  **阿凯(wx:Akibiu)在此向各位使用此模板的用户致以崇高的谢意，也感谢Tuniao-Ui和z-paging提供技术支持。如有疑问或需优化的地方，可在下方评论区留言或加我联系方式向我反馈。**
*  **如果觉得该插件还不错或者对您有帮助，希望您动动小手帮我一键三连!谢谢谢谢谢谢谢啦！~~**
*  [z-paging官方文档](https://z-paging.zxlee.cn/)
*  [uView2.0官方文档](https://www.uviewui.com/components/intro.html)
*  [优秀CSDN博客推荐-许老师](https://blog.csdn.net/weixin_55176089?type=blog) 
*  [多端壁纸平台-弃续](http://sevensugar.com/)
***




