<template>
	<view class="container">
		<view class="swiperBox">
			<swiper class="swiper" :autoplay="true" :interval="3000" :circular="true"  @change="changeSwiper" >
				<swiper-item class="swiperItem" v-for="(item, index) in swiperList":key="index">
					<image :src="item.image" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="tab">
				<view class="tLeft">
					{{swiperCurrent}}/{{swiperList.length}}
				</view>
				<view class="tRight">
					<image src="../../../static/images/size.png" class="tIcon" mode=""></image>
				</view>
			</view>
		</view>
		<view class="goodsInfo">
			<view class="gTop">
				<view class="badge">
					不议价
				</view>
				<view class="title">
					2023新款蓝色a字显瘦防走光小个子半身裙子
				</view>
			</view>
			<view class="info">
				欢迎进入 衣服女孩_淘宝搜索,盲人用户使用操作智能引导，请按快捷键Ctrl+Alt+R；阅读详细操作说明请按快捷键Ctrl+Alt+问号键。阅读详细操作说明请按快捷键Ctrl+Alt+问号键。
			</view>
			<view class="gb">
				<view class="gbLeft">
					<text>2月19号</text>
					<text style="margin-left: 6rpx;">发布</text>
				</view>
				<view class="gbRight">
					<text>1030人想要</text>
					<text>￥</text>
					<text>530.67</text>
				</view>
			</view>
			<view class="cs">9成新</view>
		</view>
		<view class="seller">
			<view class="title">
				卖家信息
			</view>
			<view class="info">
				<view class="iLeft">
					<image src="https://salephine.asia/img/index/logo.gif" class="sellHeader" mode=""></image>
					<view class="tInfo">
						<view class="name">
							她说稻城很美
						</view>
						<view class="auth">
							<image src="@/static/images/auth.png" class="authIcon" mode=""></image>
							<text>已通过认证</text>
						</view>
					</view>
				</view>
				<view class="gz">
					关注
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="top">
				<view class="left">
					全部评论
				</view>
				<view class="right">
					14条评论
				</view>
			</view>
			<view class="commentBox">
				<view class="item" v-for="(item,index) in commentList" :key="index">
					<view class="cHeader">
						<image :src="item.fHeader" class="cHeader" mode=""></image>
					</view>
					<view class="cR">
						<view class="cTitle">
							{{item.fName}}
						</view>
						<view class="cContent">
							{{item.fContent}}
						</view>
						<view class="info">
							<view class="time">
								{{item.fTime}}
							</view>
							<view class="right">
								<view class="rItem">
									<image src="../../../static/images/zan.png" class="sIcon" mode=""></image>
									<text>{{item.fZan}}</text>
								</view>
								<view class="rItem">
									<image src="../../../static/images/pl.png" class="sIcon" mode=""></image>
									<text>{{item.fPl}}</text>
								</view>
							</view>
						</view>
						<view class="reComment" v-if="item.reCommentList.length>0">
							<view class="reItem" v-for="(reItem,reIndex) in item.reCommentList" :key="reIndex">
								<view class="reHeader">
									<image :src="reItem.reHeader" class="cHeader" mode=""></image>
								</view>
								<view class="reRight">
									<view class="reTitle">
										<image src="../../../static/images/boss.png" class="bossIcon" mode=""></image>
										<view class="boss">
											{{reItem.reName}}
										</view>
										<text>回复</text>
										<view class="user">
											{{reItem.reTo}}
										</view>
									</view>
									<view class="reContent">
										{{reItem.reCotent}}
									</view>
									<view class="reInfo">
										<view class="time">
											{{reItem.reTime}}
										</view>
										<view class="reRight">
											<view class="rerItem">
												<image src="../../../static/images/zan.png" class="sIcon" mode=""></image>
												<text>{{reItem.reZan}}</text>
											</view>
											<view class="rerItem">
												<image src="../../../static/images/pl.png" class="sIcon" mode=""></image>
												<text>{{reItem.rePl}}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bt">
			<view class="item">
				<image src="@/static/images/collected.png" class="share" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="item">
				<image src="../../../static/images/heart.png" class="collect" mode=""></image>
				<text>喜欢</text>
			</view>
			<view class="item">
				<image src="../../../static/images/customer.png" class="collect" style="width: 48rpx;height: 48rpx;" mode=""></image>
				<text>评论</text>
			</view>
			<view class="talk">
				跟他群聊
			</view>
			<view class="deliver">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/1292770020/O1CN01SYIvON1C1CjrGTTII_!!0-saturn_solar.jpg_250x250.jpg_.webp'
					},
					{
						image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/119526882/O1CN01NFGRUf20i0YXdshT8_!!0-saturn_solar.jpg_250x250.jpg_.webp'
					},
					{
						image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i2/2212502684406/O1CN01tAFb8M1iPztjTXBgQ_!!2212502684406-2-alimamacc.png_250x250.jpg_.webp'
					}
				],
				swiperCurrent:1, // 默认第一张
				commentList:[
					{fHeader:'https://salephine.asia/img/index/logo.gif',fName:'周淑怡',fContent:'周淑怡，1994年10月31日出生于上海，中国内地网络主播，Lunar少女团体前主力成员',fTime:'昨天 20:01',fZan:'20',fPl:'10',reCommentList:[
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'冯提莫',reTo:'周淑怡',reCotent:'冯提莫，本名冯亚男，1991年12月19日出生于重庆市万州区，中国内地女歌手、网络主播。',reTime:'昨天 20:05',reZan:'10',rePl:'30'},
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'冯提莫',reTo:'周淑怡',reCotent:'冯提莫，本名冯亚男，1991年12月19日出生于重庆市万州区，中国内地女歌手、网络主播。',reTime:'昨天 20:07',reZan:'10',rePl:'30'},
					]},
					{fHeader:'https://salephine.asia/img/index/logo.gif',fName:'陈一发',fContent:'陈一发儿，女主播、歌手，爱好LOL、炉石传说等，被网友们称为“电竞贾玲”。',fTime:'昨天 21:01',fZan:'20',fPl:'10',reCommentList:[
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'林允儿',reTo:'陈一发',reCotent:'林允儿（Yoona），1990年5月30日出生于韩国首尔永登浦区，韩国女歌手、演员、主持人，女子演唱团体少女时代成员。',reTime:'昨天 21:05',reZan:'10',rePl:'30'},
					]},{fHeader:'https://salephine.asia/img/index/logo.gif',fName:'周淑怡',fContent:'周淑怡，1994年10月31日出生于上海，中国内地网络主播，Lunar少女团体前主力成员',fTime:'昨天 20:01',fZan:'20',fPl:'10',reCommentList:[
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'冯提莫',reTo:'周淑怡',reCotent:'冯提莫，本名冯亚男，1991年12月19日出生于重庆市万州区，中国内地女歌手、网络主播。',reTime:'昨天 20:05',reZan:'10',rePl:'30'},
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'冯提莫',reTo:'周淑怡',reCotent:'冯提莫，本名冯亚男，1991年12月19日出生于重庆市万州区，中国内地女歌手、网络主播。',reTime:'昨天 20:11',reZan:'10',rePl:'30'},
					]},
					{fHeader:'https://salephine.asia/img/index/logo.gif',fName:'陈一发',fContent:'陈一发儿，女主播、歌手，爱好LOL、炉石传说等，被网友们称为“电竞贾玲”。',fTime:'昨天 21:01',fZan:'20',fPl:'10',reCommentList:[
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'林允儿',reTo:'陈一发',reCotent:'林允儿（Yoona），1990年5月30日出生于韩国首尔永登浦区，韩国女歌手、演员、主持人，女子演唱团体少女时代成员。',reTime:'昨天 21:05',reZan:'10',rePl:'30'},
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'林允儿',reTo:'陈一发',reCotent:'林允儿（Yoona），1990年5月30日出生于韩国首尔永登浦区，韩国女歌手、演员、主持人，女子演唱团体少女时代成员。',reTime:'昨天 21:11',reZan:'10',rePl:'30'},
						{reHeader:'https://salephine.asia/img/index/logo.gif',reName:'林允儿',reTo:'陈一发',reCotent:'林允儿（Yoona），1990年5月30日出生于韩国首尔永登浦区，韩国女歌手、演员、主持人，女子演唱团体少女时代成员。',reTime:'昨天 21:13',reZan:'10',rePl:'30'},
					]},
				]
			}
		},
		onLoad(option) {
			// const item = JSON.parse(decodeURIComponent(option.item));
			// console.log(item, '传递参数');
		},
		methods: {
			changeSwiper(e){
				this.swiperCurrent=e.detail.current+1;
			}
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
		height: 100%;
		width: 100%;
		font-family: PingFangSC-Semibold, PingFang SC;
		// overflow: hidden !important;
		background: #f4f6fa;
		color: #333;
		padding-bottom: 300rpx;
		overflow-y: scroll !important;
		.swiperBox {
			// padding: 0rpx 0rpx 30rpx 0rpx;
			// box-sizing: border-box;
			.swiper {
				width: 100%;
				height: 450rpx;
				.swiperItem {
					width: 100%;
					height: 100%;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
			.tab {
				padding: 20rpx 30rpx;
				box-sizing: border-box;
				background: #fff;
				.dflexsb();
				
				.tLeft {
					padding: 10rpx 26rpx;
					box-sizing: border-box;
					background: rgba(0, 0, 0, 0.3);
					.dflex();
					color: #fff;
					font-size: 22rpx;
					border-radius: 30rpx;
				}
				.tRight {
					width: 40rpx;
					height: 40rpx;
					.tIcon {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
		.goodsInfo {
			padding: 30rpx 20rpx;
			margin-top: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10rpx;
			width: 92%;
			margin-left: 4%;
			.gTop {
				.dflex();
				justify-content: flex-start;
				.badge {
					min-width: 80rpx;
					padding: 4rpx 8rpx;
					box-sizing: border-box;
					background: #c0cff2;
					border-radius: 4rpx;
					.dflex();
					font-size: 18rpx;
					color: #007aff;
					margin-right: 6rpx;
				}
				.title {
					flex: 1;
					font-size: 26rpx;
					color: #333;
					font-weight: bolder;
				}
			}
			.info {
				color: #bebebe;
				font-size: 22rpx;
				text-indent: 42rpx;
				margin-top: 24rpx;
			}
			.gb {
				margin-top: 24rpx;
				.dflexsb();
				.gbLeft {
					color: #bebebe;
					font-size: 20rpx;
					.dflex();
				}
				.gbRight {
					color: #f60;
					font-size: 22rpx;
					text {
						&:first-child {
							color: #bebebe;
							margin-right: 4rpx;
						}
						&:last-child {
							font-size: 24rpx;
							font-weight: bolder;
						}
					}
				}
			}
			.cs {
				min-width: 80rpx;
				max-width: 100rpx;
				padding: 4rpx 8rpx;
				box-sizing: border-box;
				background: #ffaa65;
				border-radius: 4rpx;
				.dflex();
				font-size: 22rpx;
				color: #fff;
				margin-right: 6rpx;
				margin-top: 10rpx;
				// background: linear-gradient(to right, #f60, #ffaa65);
				// -webkit-background-clip: text;
				// -webkit-text-fill-color: transparent;
			}
		}
		.seller {
			padding: 30rpx 20rpx;
			margin-top: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10rpx;
			width: 92%;
			margin-left: 4%;
			.title {
				font-size: 26rpx;
				color: #333;
				font-weight: bolder;
			}
			.info {
				.dflexsb();
				padding: 10rpx;
				box-sizing: border-box;
				.iLeft {
					.dflex();
					justify-content: flex-start;
					.sellHeader {
						width: 70rpx;
						margin-right: 16rpx;
						height: 70rpx;
						border-radius: 50%;
					}
					.tInfo {
						.dflex();
						justify-content: flex-start;
						align-items: flex-start;
						flex-direction: column;
						.name {
							color: #333;
							font-size: 24rpx;
							margin-bottom: 6rpx;
						}
						.auth {
							padding: 2rpx 4rpx;
							box-sizing: border-box;
							border: 1rpx solid #bebebe;
							border-radius: 8rpx;
							.dflex();
							image {
								width: 20rpx;
								height: 20rpx;
							}
							text {
								font-size: 18rpx;
								color: #bebebe;
							}
						}
					}
				}
				.gz {
					height: 42rpx;
					width: 130rpx;
					border-radius: 26rpx;
					background-color: #6d9ff0;
					.dflex();
					font-size: 24rpx;
					color: #fff;
				}
			}
		}
		.comment {
			padding: 30rpx 20rpx;
			margin-top: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10rpx;
			width: 92%;
			margin-left: 4%;
			.top{
				padding: 6rpx 20rpx;
				box-sizing: border-box;
				.dflexsb();
				.left{
					color: #333;
					font-size: 24rpx;
					font-weight: bolder;
				}
				.right{
					color: #bebebe;
					font-size: 22rpx;
				}
			}
			.commentBox{
				overflow-y: hidden !important;
				.item{
					padding: 14rpx 10rpx;
					box-sizing: border-box;
					border-bottom: 1rpx solid #ccc;
					.dflex();
					justify-content: flex-start;
					align-items: flex-start;
					.cHeader{
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
						margin-right: 10rpx;
					}
					.cR{
						padding: 6rpx 0rpx;
						box-sizing: border-box;
						.cTitle{
							font-size: 24rpx;
							color: #333;
							margin: 0rpx 20rpx 14rpx 0rpx;
						}
						.cContent{
							font-size: 22rpx;
							color: #6d6d6d;
							margin: 0rpx 20rpx 14rpx 0rpx;
						}
						.info{
							.dflexsb();
							.time{
								color: #bebebe;
								font-size: 20rpx;
							}
							.right{
								.dflexsb();
								padding: 8rpx 0rpx;
								box-sizing: border-box;
								.rItem{
									.dflex();
									image{
										width: 30rpx;
										height: 30rpx;
									}
									margin-right: 20rpx;
									text{
										color: #bebebe;
										font-size: 20rpx;
									}
									&:last-child{
										margin: 0 rpx !important;
									}
									&:first-child image{
										margin-top: -4rpx;
										box-sizing: border-box;
									}
								}
							}
						}
						.reComment{
							padding: 10rpx 0rpx;
							box-sizing: border-box;
							.reItem{
								.dflex();
								justify-content: flex-start;
								align-items: flex-start;
								.reHeader{
									width: 70rpx;
									height: 70rpx;
									border-radius: 50%;
									margin-right: 10rpx;
								}
								.reRight{
									padding: 6rpx 0rpx;
									box-sizing: border-box;
									.reTitle{
										font-size: 24rpx;
										color: #333;
										margin: 0rpx 10rpx 14rpx 0rpx;
										.dflex();
										justify-content: flex-start;
										.bossIcon{
											width: 22rpx;
											height: 22rpx;
										}
										.boss{
											font-size: 24rpx;
											color: #333;
											margin-left: 4rpx;
										}
										.user{
											font-size: 24rpx;
											color: #545454;
										}
										text{
										color: #f60;
										margin: 0rpx 6rpx;
										font-size: 20rpx;
										}
									}
									.reContent{
										font-size: 22rpx;
										color: #6d6d6d;
										margin: 0rpx 20rpx 14rpx 0rpx;
									}
									.reInfo{
										.dflexsb();
										.time{
											color: #bebebe;
											font-size: 20rpx;
										}
										.reRight{
											.dflexsb();
											padding: 8rpx 0rpx;
											box-sizing: border-box;
											.rerItem{
												.dflex();
												image{
													width: 30rpx;
													height: 30rpx;
												}
												margin-right: 20rpx;
												text{
													color: #bebebe;
													font-size: 20rpx;
												}
												&:last-child{
													margin: 0 rpx !important;
												}
												&:first-child image{
													margin-top: -4rpx;
													box-sizing: border-box;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.bt {
			background: #fff;
			padding: 20rpx 20rpx 40rpx 20rpx;
			box-sizing: border-box;
			margin-top: 30rpx;
			position: fixed;
			width: 100%;
			bottom:0;
			left: 0;
			box-shadow: rgba(0, 0, 0, 0.1) 12px 0px 4px ;
			.dflexsb();
			.item {
				padding: 20rpx 30rpx;
				box-sizing: border-box;
				width: 16%;
				.dflex();
				flex-direction: column;
				.share, .collect {
					width: 44rpx;
					height: 44rpx;
				}
				text {
					font-size: 24rpx;
					color: #bebebe;
					margin-top: 6rpx;
				}
			}
			.talk, .deliver {
				padding: 16rpx 30rpx;
				box-sizing: border-box;
				background-color: #fff;
				.dflex();
				color: #0f1127;
				font-size: 24rpx;
				border-radius: 40rpx;
				border: 1rpx solid #8a8a8a;
			}
			.deliver {
				background-color: #337eff;
				margin-left: 8rpx;
				color: #fff;
			}
		}
	}
</style>
