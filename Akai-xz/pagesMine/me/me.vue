<template>
	<view class="container">
		<!-- 下面就是你开始操作的内容了哦.....开始开发吧 -->
		<view :class="isSHowNav?'active navFixed':'navFixed'">
			<!-- 这个地方是状态栏高度 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 这个地方是导航栏高度 按钮文字胶囊部分 -->
			<view class="navContent" :style="{height:navBarHeight+'px',width:searchBoxWidth+'px'}">
				<view class="leftIcon" @click="goBack">
					<image v-if="!isSHowNav" src="@/static/mine/back-w.png" class="backIcon" mode=""></image>
					<image v-else src="@/static/mine/back-b.png" class="backIcon" mode=""></image>
				</view>
				<view class="titleBox" v-if="isSHowNav">
					{{name}}
				</view>
			</view>
		</view>
		<view :class="tabCurrent==0?'isMask content':'content'">
			<view :class="tabCurrent==0?'banner isMask':'banner'">
				<!-- <image src="https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/45442454/O1CN01wyaTbk1TzyhbPcdC1_!!0-saturn_solar.jpg_250x250.jpg_.webp" mode=""></image> -->
				<view class="swiperBox">
					<swiper class="swiper" :autoplay="true" :interval="3000" :circular="true" @change="changeSwiper">
						<swiper-item class="swiperItem" v-for="(item, index) in swiperList" :key="index">
							<image :src="item.image" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="currentBox">
					{{swiperCurrent}}/{{swiperList.length}}
				</view>
				<view class="radio">
					<text>15s''</text>
					<image src="@/static/mine/radio.png" class="rIcon" mode=""></image>
				</view>
			</view>
			<view class="user">
				<view class="uHeader">
					<image src="https://salephine.asia/img/index/logo.gif" mode=""></image>
				</view>
				<view class="uInfo">
					<view class="uTop">
						<text class="name">{{name}}</text><text class="status on">·在线</text>
					</view>
					<view class="uBottom">
						<view class="ubItem">
							<image src="@/static/mine/star.png" class="icon" mode=""></image>
							<text>优质</text>
						</view>
						<view class="ubItem">
							<image src="@/static/mine/follow.png" class="icon" mode=""></image>
							<text>官方认证</text>
						</view>
						<view class="ubItem">
							<image v-if="isSHowNav" src="@/static/mine/woman.png" class="icon" mode=""></image>
							<image v-else src="@/static/mine/man.png" class="icon" mode=""></image>
							<text>23</text>
						</view>
						<view class="ubItem">
							<image src="@/static/mine/level.png" class="icon" mode=""></image>
							<text>1030</text>
						</view>
					</view>
				</view>
			</view>
			<view class="tab">
				<view :class="tabCurrent==index?'item active':'item'" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)">
					{{item.name}}<text style="font-size: 18rpx;">{{item.count==0?'':'('+item.count+')'}}</text>
				</view>
			</view>
			<view class="one" v-if="tabCurrent==0">
				<view class="item">
					<text>WeChat</text>
					<text>Akaibiu</text>
				</view>
				<view class="item">
					<text>城市</text>
					<text>四川-成都</text>
				</view>
				<view class="item">
					<text>故乡</text>
					<text>四川-通江</text>
				</view>
				<view class="item">
					<text>职业</text>
					<text>小前端</text>
				</view>
				<view class="item">
					<text>学历</text>
					<text>大专</text>
				</view>
				<view class="item">
					<text>星座</text>
					<text>天蝎座</text>
				</view>
				<view class="item">
					<text>月薪</text>
					<text>5.5k</text>
				</view>
				<view class="item">
					<text>Blog</text>
					<text>salephine.asia</text>
				</view>
			</view>
			<view class="one" v-if="tabCurrent==0">
				<view class="mfTip">
					铭言
				</view>
				<view class="mfInfo">
					时间不在于你拥有多少，而在于你怎样使用。
				</view>
				<view class="loveTip">
					兴趣爱好
				</view>
				<view class="loveBadges">
					<view class="loveItem" v-for="(item,index) in loveList" :key="index">
						{{item.name}}
					</view>
				</view>
				<view class="impression">
					印象标签
				</view>
				<view class="imBadges">
					<view class="imItem" v-for="(item,index) in imList" :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="two" v-else>
				<view class="twoItem" v-for="(item,index) in trendsList" :key="index">
					<view class="tTop">
						<view class="date">
							{{item.date}} <text class="time">{{item.time}}</text>
						</view>
						<view class="zp">
							<view class="zpItem">
								<image src="@/static/mine/hot.png" mode=""></image>
								<text>{{item.hot}}</text>
							</view>
							<view class="zpItem">
								<image src="@/static/mine/zan-me.png" mode=""></image>
								<text>{{item.zan}}</text>
							</view>
						</view>
					</view>
					<view class="content">
						{{item.content}}
					</view>
					<view class="photo">
						<view class="photoBox" v-if="item.type==='photo'">
							<view class="item" v-for="(val,valin) in item.photoList.slice(0,9)" :key="valin">
								<image :src="val.img" class="photoImg" mode=""></image>
								<view class="more" v-if="item.photoList.length>9&&valin==8">
									<image src="@/static/mine/add.png" class="addIcon" mode="aspectFill"></image>{{item.photoList.length-9}}
								</view>
							</view>
						</view>
						<view class="video" v-if="item.type==='video'">
							<image :src="item.videoSrc" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="buttonList">
			<view :class="bottomCurrent==index?'bItem active':'bItem'" v-for="(item,index) in bottomList" :key="index" @click="changeBTab(index)">
				<image :src="item.img" class="icon" mode="" v-if="item.img&&bottomCurrent!=index"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				statusBarHeight: 0, // 状态栏高度
				navBarHeight: 0, // 导航栏高度(按钮部分导航栏-这个高度是除开状态栏的)
				searchBoxWidth: 0, // 搜索框宽度
				isSHowNav: false, // 是否显示导航栏
				name: '今天你也要开心哦~',
				swiperList: [{image: 'https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF'},
					{image: 'https://t7.baidu.com/it/u=2291349828,4144427007&fm=193&f=GIF'},
					{image: 'https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF'
					}
				],
				swiperCurrent: 1, // 默认第一张
				tabCurrent:0, // 导航栏(资料/动态)
				bottomCurrent:0, // 导航栏(底部紫色)
				tabList:[{name:'资料',count:'0'},{name:'动态',count:'20'}],
				loveList:[{name:'LOL'},{name:'韩剧'},{name:'英雄联盟手游'},{name:'CF'},{name:'台球'},{name:'羽毛球'}],
				imList:[{name:'甜美'},{name:'可爱'},{name:'温柔'},{name:'善良'},{name:'懂事'},{name:'17岁'},],
				bottomList:[
					{name:'关注',img:'../../static/mine/follow.png'},
					{name:'私聊',img:'../../static/mine/message.png'},
					{name:'视频',img:'../../static/mine/video.png'},
					{name:'搭讪',img:''},
				],
				trendsList:[
					{date:'2021-05-01',time:'23:37',hot:'10',zan:'25',type:'photo',content:'你说你夏天的时候回来找我，可是现在已经秋天了~',photoList:[{img:'https://t7.baidu.com/it/u=2671101745,1413589787&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF '},
					{img:'https://t7.baidu.com/it/u=1297102096,3476971300&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF'},]},
					{date:'2023-09-02',time:'23:38',hot:'10',zan:'20',type:'video',content:'小鹿可爱吗~',videoSrc:'https://salephine.asia/img/index/logo.gif',videoUrl:'https://haokan.baidu.com/v?vid=16021398724670679307&tab=recommend'},
					{date:'2023-09-02',time:'23:38',hot:'10',zan:'20',type:'photo',content:'更新一组风景照哦~',photoList:[{img:'https://t7.baidu.com/it/u=2790759587,1933417440&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=3510959053,1732477822&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=1200362006,4033032586&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=4188671375,2323574798&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=1963305748,3425007544&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=3069651952,3707858927&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=1728637936,3151165212&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=1620952818,4218424235&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=841539266,3457438987&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=1557229360,443641844&fm=193&f=GIF'},
					{img:'https://t7.baidu.com/it/u=2605426091,1199286953&fm=193&f=GIF'},
					]},
				]
			}
		},
		onPageScroll(e) {
			if (e.scrollTop > 150) {
				this.isSHowNav = true;
				uni.setNavigationBarColor({
					frontColor: '#000000', // 设置状态栏文字颜色为黑色
					backgroundColor: '#ffffff', // 设置状态栏背景颜色
					animation: {
						duration: 400,
						timingFunc: 'linear'
					}
				});
			} else {
				this.isSHowNav = false;
				uni.setNavigationBarColor({
				 frontColor: '#ffffff', // 设置状态栏文字颜色为黑色
					backgroundColor: '#ffffff', // 设置状态栏背景颜色
					animation: {
						duration: 400,
						timingFunc: 'linear'
					}
				});
			}
		},
		onLoad(options) {
			// 获取手机系统信息(包括状态栏高度等等，但是info.capsuleHeight已经被废弃了 )
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight; // 状态栏高度
			this.searchBoxWidth = info.searchBoxWidth; // 视口宽度
			// 条件编译-以下仅作为微信小程序平台代码
			// #ifdef MP-WEIXIN
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect(); // 获取胶囊按钮部分高度，其实导航栏高度
			/**
			 * 显示模态弹窗
			 * @description navBarHeight 导航栏高度=胶囊按钮部分顶部到底部的距离减去-状态栏高度(电池电量信息等这个是状态栏高度)
			 */
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight)
			this.searchBoxWidth = menuButtonInfo.left; // 胶囊按钮左边剩余部分，也就是搜索框所需要占用的宽度
			// #endif
		},
		methods:{
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current + 1;
			},
			changeTab(index){
				this.tabCurrent=index;
			},
			changeBTab(index){
				this.bottomCurrent=index;
				switch (index){
					case 0:
						this.tool.toastTip('谢谢您~','none',1500);
						break;
						case 1:
							this.tool.toastTip('不可以瑟瑟奥~','none',1500);
							break;
							case 2:
								this.tool.toastTip('不可以瑟瑟奥~','none',1500);
								break;
								case 3:
									this.tool.toastTip('不可以瑟瑟奥~','none',1500);
									break;
					default:
						break;
				}
			},
			goBack(){
				this.tool.toastTip('回不去了...','none',1500)
				setTimeout(function() {
					uni.navigateBack({
						delta:1
					})
				}, 1500);
			},
		}
	}
</script>
<style>
	page {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	// 去掉页面滚动条
	::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
<style lang="less" scoped>
	.dflex() {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dflexsb() {
		.dflex();
		justify-content: space-between;
	}
	.dflexsa() {
		.dflex();
		justify-content: space-around;
	}
	.container {
		width: 100%;
		background: #dbe3f4;
		font-family: PingFangSC-Semibold, PingFang SC;
		color: #333;
		overflow-y: scroll;
		padding-bottom: 200rpx;
		min-height: 100% !important;
		.navFixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1030;
			width: 100%;
			background: transparent;
			transition: all 0.5s linear;
			&.active {
				background: #fff !important;
			}
			.navContent {
				.dflex();
				justify-content: flex-start;
				padding: 0 20rpx;
				height: 90rpx;
				box-sizing: border-box;
				.leftIcon {
					width: 50rpx;
					height: 50rpx;
					.dflex();
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
				.titleBox {
					flex: 1;
					height: 100%;
					.dflex();
					padding-left: 27%;
					    color: beige;
					    background: linear-gradient(to right, #892FE8, #31C9E8);
					    -webkit-background-clip: text;
					    -webkit-text-fill-color: transparent;
					font-size: 30rpx;
					font-weight: bolder;
				}
			}
		}
		.content {
			width: 100%;
			&.isMask{
				&::after{
						content: "";
					      position: absolute;
					      top: 600rpx;
					      left: 0;
					      width: 100%;
					      height: 8%;
					      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0),#dbe3f4);
					      filter: blur(20rpx);
					      pointer-events: none;
				}
			}
			.banner, .banner image, .swiper, .swiperItem {
				width: 100%;
				height: 700rpx;
				
			}
			.banner{
				&.isMask{
					&::after{
							content: "";
						      position: absolute;
						      bottom: 0;
						      left: 0;
						      width: 100%;
						      height: 20%;
						      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #dbe3f4);
						      filter: blur(20rpx);
						      pointer-events: none;
						}
				}
			}
			.banner {
				position: relative;
			}
			.banner .radio{
				border: 2rpx solid #fff;
				border-radius: 30rpx 60rpx 60rpx 30rpx;
				padding: 14rpx 26rpx;
				box-sizing: border-box;
				background: #7d58ff;
				position: absolute;
				right: 40rpx;
				bottom: 40rpx;
				.dflex();
				.rIcon{
					width: 26rpx;
					height: 26rpx;
				}
				text{
					font-size: 22rpx;
					color:#fff ;
					margin-right: 4rpx;
				}
			}
			.banner .currentBox {
				padding: 10rpx 36rpx;
				box-sizing: border-box;
				background: rgba(0, 0, 0, 0.3);
				.dflex();
				color: #fff;
				font-size: 22rpx;
				border-radius: 30rpx;
				position: absolute;
				bottom: 10rpx;
				left: 46%;
			}
			.user{
				padding: 30rpx;
				box-sizing: border-box;
				width: 94%;
				border-radius:38rpx;
				background-color: #fff;
				margin: 0rpx 3%;
				margin-top: 20rpx;
				.dflex();
				justify-content: flex-start;
				.uHeader,.uHeader image{
					width: 138rpx;
					height: 138rpx;
					border-radius: 50%;
					margin-right: 30rpx;
				}
				.uInfo{
					padding: 10rpx 10rpx;
					box-sizing: border-box;
					.uTop{
						.dflex();
						justify-content: flex-start;
						margin-bottom: 28rpx;
						.name{
							font-size: 30rpx;
							color: #333;
							font-weight: bolder;
						}
						.status{
							font-size: 22rpx;
							margin-left: 6rpx;
							&.on{
								color: #209869;
							}
							&.offline{
								color: #bebebe;
							}
						}
					}
					.uBottom{
						.dflex();
						justify-content: flex-start;
						.ubItem{
							padding: 6rpx 12rpx;
							border-radius: 20rpx;
							margin-right: 14rpx;
							.dflex();
							.icon{
								width: 22rpx;
								height: 22rpx;
								margin-right: 4rpx;
							}
							text{
								font-size: 20rpx;
								color: #fff;
							}
							&:nth-child(1){
								background: #352680;
							}
							&:nth-child(2){
								background: #51a8fd;
							}
							&:nth-child(3){
								background: #fb74d4;
							}
							&:nth-child(4){
								background: #977efc;
							}
						}
					}
				}
			}
			.tab{
				padding: 30rpx;
				box-sizing: border-box;
				width: 94%;
				border-radius:38rpx;
				margin: 0rpx 3%;
				.dflex();
				justify-content: flex-start;
				.item{
					background: #dbdadc;
					padding: 12rpx 30rpx;
					box-sizing: border-box;
					border-radius: 40rpx;
					margin-right: 18rpx;
					font-size: 24rpx;
					color: #6a687a;
					.dflex();
					&.active{
						background: #fff;
						color: #333;
					}
				}
			}
			.one{
				width: 94%;
				margin: 4rpx 3% 30rpx 3%;
				background: #fff;
				border-radius: 28rpx;
				padding: 30rpx;
				box-sizing: border-box;
				.dflex();
				justify-content: flex-start;
				flex-wrap: wrap;
				.item{
					width: 30%;
					margin-right: 20rpx;
					.dflex();
					flex-direction: column;
					align-items: flex-start;
					margin-bottom: 30rpx;
					&:nth-child(3){
						margin-right: 0rpx !important;
					}
					text{
						&:first-child{
							font-size: 20rpx;
							color: #bebebe;
							margin-bottom: 14rpx;
						}
						&:last-child{
							font-size: 24rpx;
							color: #333;
						}
					}
				}
				.mfTip,.loveTip,.impression{
					font-size: 24rpx;
					color:#bebebe;
					margin-bottom: 38rpx;
					width: 100%;
				}
				.mfInfo{
					font-size: 24rpx;
					color:#333;
					margin-bottom: 38rpx;
				}
				.loveBadges,.imBadges{
					padding: 8rpx 14rpx 8rpx 0rpx;
					box-sizing: border-box;
					.dflex();
					justify-content: flex-start;
					flex-wrap: wrap;
					.loveItem,.imItem{
						margin: 0rpx 10rpx 18rpx 0rpx;
						box-sizing: border-box;
						.dflex();
						font-size: 22rpx;
						border-radius: 30rpx;
						padding: 6rpx 16rpx;
						background: #ced1dc;
						color: #2ba3ff;
						&:nth-child(1),&:nth-child(2){
							background: #e6d5c9;
							color: #daa21c;
						}
						&:nth-child(3),&:nth-child(4){
							background: #ced1dc;
							color: #2ba3ff;
						}
						&:nth-child(5),&:nth-child(6){
							background: #d8e5e5;
							color: green;
						}
						&:nth-child(7),&:nth-child(8){
							background: #d8d3ea;
							color: plum;
						}
						&:nth-child(9),&:nth-child(10){
							background: #d8d3ea;
							color: #b6a5fd;
						}
					}
				}
			}
			.two{
				width: 94%;
				margin-left: 3%;
				.twoItem{
					width: 94%;
					margin: 4rpx 3% 30rpx 3%;
					background: #fff;
					border-radius: 28rpx;
					.dflex();
					justify-content: flex-start;
					flex-wrap: wrap;
					.tTop{
						.dflexsb();
						width: 100%;
						padding: 30rpx;
						box-sizing: border-box;
						.date{
							font-size: 26rpx;
							font-weight: bolder;
							color: #333;
							.time{
								font-size: 22rpx;
								margin-left: 10rpx;
							}
						}
						.zp{
							.dflexsa();
							width: 200rpx;
							color: #bebebe;
							font-size: 24rpx;
							.zpItem{
								.dflex();
								image{
									width: 30rpx;
									height: 30rpx;
									margin-right: 4rpx;
								}
							}
						}
					}
					.content{
						padding: 8rpx 26rpx;
						font-size: 24rpx;
						color: #333;
						margin-bottom: 20rpx;
					}
					.photo{
						width: 100%;
						padding: 10rpx 0rpx 0rpx 0rpx;
						box-sizing: border-box;
						border-radius: 0rpx 0rpx 30rpx 30rpx;
						image{
							width: 100%;
							height: 100%;
						}
						.video{
							width: 100%;
							height: 500rpx;
							background: #bebebe;
							border-radius: 0rpx 0rpx 30rpx 30rpx;
							image{
								border-radius: 0rpx 0rpx 30rpx 30rpx;
							}
						}
						.photoBox{
							width: 100%;
							height: 100%;
							border-radius: 0rpx 0rpx 30rpx 30rpx;
							padding: 0rpx 0rpx 36rpx 0rpx;
							box-sizing: border-box;
							.dflex();
							justify-content: flex-start;
							flex-wrap: wrap;
							.item{
								width: 33%;
								height: 200rpx;
								margin-top: 4rpx;
								&:nth-child(1),&:nth-child(4),&:nth-child(7),&:nth-child(2),&:nth-child(5),&:nth-child(8){
									margin-right: 0.5%;
								}
								&:nth-child(3),&:nth-child(6),&:nth-child(9){
									margin-right: 0 !important;
								}
								&:nth-child(9){
									position: relative;
								}
								image{
									width: 100%;
									height: 100%;
								}
								.more{
									width: 100%;
									height: 200rpx;
									margin-top: 4rpx;
									background: rgba(0, 0, 0, 0.7);
									position: absolute;
									top: 0;
									left: 0;
									color: #bebebe;
									font-size: 34rpx;
									.dflex();
									.addIcon{
										width: 80rpx;
										height: 80rpx;
									}
								}
							}
						}
					}
				}
			}
		}
		.buttonList{
			position: fixed;
			bottom: 40rpx;
			left: 3%;
			width: 93%;
			padding: 30rpx;
			box-sizing: border-box;
			background: #7f5aff;
			border-radius: 80rpx;
			.dflexsa();
			.bItem{
				.dflex();
				width: 20%;
				color: #fff;
				font-size: 26rpx;
				&.active{
					height: 60rpx;
					background: #fff;
					border-radius: 60rpx;
					color: #7f5aff;
				}
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 8rpx;
				}
			}
		}
	}
</style>
