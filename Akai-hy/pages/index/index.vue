<template>
	<view class="container">
		<view class="searchBox">
			<view class="sLeft">
				<image src="@/static/index/search-icon.png" class="sIcon" mode=""></image>
				<input type="text" v-model="sValue" placeholder="女士夏季多巴胺穿搭">
			</view>
			<view class="sBtn" @click="startSearch">
				搜索
			</view>
		</view>
		<view class="banner">
			<view class="bLeft">
				<view class="bTop">
					<view class="title">
						OOTD穿搭-TOP榜单
					</view>
					<view class="hot">
						夏季上新
					</view>
					<view class="look">
						点击查看
					</view>
				</view>
				<view class="bBottom">
					<image
						src="https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/119526882/O1CN01NFGRUf20i0YXdshT8_!!0-saturn_solar.jpg_250x250.jpg_.webp"
						class="bbImg" mode=""></image>
				</view>
			</view>
			<view class="bRight">
				<view class="brTop">
					<view class="brtLeft">
						<view class="title">
							帽子热度榜
						</view>
						<view class="tip">
							爆款销售
						</view>
						<view class="look">
							点击查看
						</view>
					</view>
					<view class="brtRight">
						<image
							src="https://picasso.alicdn.com/imgextra/O1CNA1E4Hwfb29djQ52HP7H_!!2212148998091-0-psf.jpg_250x250.jpg_.webp"
							mode=""></image>
					</view>
				</view>
				<view class="brBottom">
					<view class="brbLeft">
						<view class="title">
							配饰热度榜
						</view>
						<view class="tip">
							爆款销售
						</view>
						<view class="look">
							点击查看
						</view>
					</view>
					<view class="brbRight">
						<image
							src="https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/114362080/O1CN01X9v2pm1REgeh87aC4_!!0-saturn_solar.jpg_250x250.jpg_.webp"
							mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="tab">
			<image src="@/static/index/tips.png" class="icon" mode=""></image>
			<view class="info">
				将你要出售的二手物品发布到我们的平台，寻找感兴趣的买家。
			</view>
			<view class="release" @click="release">
				+发布
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="goDetail(item,index)">
				<view class="iTop">
					<image src="https://salephine.asia/img/index/logo.gif" class="shopImg" mode=""></image>
					<view class="itRight">
						<view class="shopName">
							{{item.name}}
						</view>
						<view class="auth">
							<image src="@/static/index/auth.png" class="authIcon" mode=""></image>
							<text>{{item.auth}}</text>
						</view>
					</view>
				</view>
				<view class="center">
					<image
						:src="item.img"
						mode=""></image>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="bottom">
					<view class="bl">
						<view class="badge">
							{{item.badge}}
						</view>
						<view class="tt">
							{{item.tip}}
						</view>
					</view>
					<view class="price">
						￥{{item.price}}
					</view>
				</view>
			</view>
		</view>
		<view class="pageRelease" v-if="show" @click="release">
			+
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sValue: null,
				list:[
					{name:'小周女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'325.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
					{name:'小吴女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'335.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3596248858/O1CN01V2YinW2FJ179lJLas_!!0-item_pic.jpg_250x250.jpg_.webp'},
					{name:'小王女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'345.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
					{name:'小李女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'355.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3596248858/O1CN01V2YinW2FJ179lJLas_!!0-item_pic.jpg_250x250.jpg_.webp'},
					{name:'小张女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'365.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
					{name:'小刘女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'375.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
					{name:'小郑女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'385.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3596248858/O1CN01V2YinW2FJ179lJLas_!!0-item_pic.jpg_250x250.jpg_.webp'},
					{name:'小美女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'395.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
					{name:'小瘪三女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'355.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3596248858/O1CN01V2YinW2FJ179lJLas_!!0-item_pic.jpg_250x250.jpg_.webp'},
					{name:'小淘气女士',header:'https://salephine.asia/img/index/logo.gif',auth:'已经过官方验证',title:'高腰遮胯牛仔短裙女夏2023新款蓝色a字显瘦防走光小个子半身裙子',badge:'OOTD',tip:'1030人已买',price:'985.99',img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/53810478/O1CN01cbw7jj1FOy9YfCy29_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
				],
				show:true,
			}
		},
		onLoad() {

		},
		// onPageScroll(e) {
		//       const scrollTop = e.scrollTop; // 获取页面滚动的距离
		//       if (scrollTop > 100) { // 在滚动距离大于100时显示元素，可以根据实际需要调整
		//         this.show = true;
		//       } else {
		//         this.show = false;
		//       }
		// },
		methods: {
			// Start Search
			startSearch() {
				uni.showToast({
					title: this.sValue,
					duration: 1500,
					icon: 'none'
				})
			},
			// Release
			release() {
				uni.navigateTo({
					url:'/pagesIndex/release'
				})
			},
			// Go Detail
			goDetail(item,index){
				uni.navigateTo({
					url:'/pagesIndex/goodsDetail?item='+encodeURIComponent(JSON.stringify(item))
				})
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
		padding: 30rpx;
		box-sizing: border-box;
		// overflow: hidden !important;
		background: #f4f6fa;
		color: #333;
		padding-bottom: 60rpx;
		overflow-y: scroll !important;
		.pageRelease {
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			background: #6d9ff0;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			font-size: 50rpx;
			.dflex();
			position: fixed;
			right: 50rpx;
			bottom: 120rpx;
			transition: all 0.5s linear;
		}
		.searchBox {
			width: 100%;
			height: 70rpx;
			border-radius: 35rpx;
			background: #fff;
			.dflexsb();
			.sLeft {
				flex: 1;
				height: 100%;
				.dflex();
				justify-content: flex-start;
				padding-left: 24rpx;
				.sIcon {
					width: 36rpx;
					height: 36rpx;
				}
				input {
					width: 100%;
					height: 100%;
					font-size: 24rpx;
					padding-left: 20rpx;
				}
			}
			.sBtn {
				height: 98%;
				height: 100%;
				width: 140rpx;
				background: #2872f4;
				.dflex();
				font-size: 24rpx;
				border-radius: 36rpx;
				color: #fff;
			}
		}
		.banner {
			margin-top: 30rpx;
			height: 400rpx;
			.dflexsb();
			.bLeft {
				margin-right: 30rpx;
				width: 40%;
				height: 100%;
				background: #fff;
				border-radius: 14rpx;
				.dflex();
				flex-direction: column;
				justify-content: space-between;
				.bTop {
					padding: 16rpx 10rpx;
					box-sizing: border-box;
					.title {
						font-size: 24rpx;
						font-weight: bolder;
						color: #333;
						margin-top: 16rpx;
					}
					.hot {
						color: #6d9ff0;
						font-size: 22rpx;
						margin-top: 16rpx;
					}
					.look {
						background: #6d9ff0;
						height: 36rpx;
						border-radius: 20rpx;
						margin-top: 16rpx;
						.dflex();
						align-items: center;
						font-size: 20rpx;
						color: #fff;
						width: 120rpx;
					}
				}
				.bBottom {
					flex: 1;
					width: 100%;
					border-radius: 0rpx 0rpx 14rpx 14rpx !important;
					margin-top: 16rpx;
					.bbImg {
						width: 100%;
						height: 100%;
						border-radius: 0rpx 0rpx 14rpx 14rpx !important;
					}
				}
			}
			.bRight {
				flex: 1;
				height: 100%;
				.dflex();
				flex-direction: column;
				.brTop {
					height: 100%;
					width: 100%;
					background: #fff;
					border-radius: 14rpx;
					margin-bottom: 30rpx;
					.dflex();
					justify-content: flex-start;
					.brtLeft {
						width: 40%;
						height: 100%;
						padding: 12rpx 0rpx 10rpx 12rpx;
						box-sizing: border-box;
						.title {
							font-size: 22rpx;
							font-weight: bolder;
							color: #333;
						}
						.tip {
							color: #c35a6b;
							font-size: 20rpx;
							margin-top: 16rpx;
						}
						.look {
							background: #c35a6b;
							height: 36rpx;
							border-radius: 20rpx;
							margin-top: 16rpx;
							.dflex();
							align-items: center;
							font-size: 20rpx;
							color: #fff;
							width: 120rpx;
						}
					}
					.brtRight {
						flex: 1;
						height: 100%;
						image {
							width: 100%;
							height: 100%;
							border-radius: 0rpx 14rpx 14rpx 0rpx;
						}
					}
				}
				.brBottom {
					height: 100%;
					width: 100%;
					background: #fff;
					border-radius: 14rpx;
					.dflex();
					justify-content: flex-start;
					.brbLeft {
						width: 40%;
						height: 100%;
						padding: 12rpx 0rpx 10rpx 12rpx;
						box-sizing: border-box;
						.title {
							font-size: 22rpx;
							font-weight: bolder;
							color: #333;
						}
						.tip {
							color: #f3c06a;
							font-size: 20rpx;
							margin-top: 16rpx;
						}
						.look {
							background: #f3c06a;
							height: 36rpx;
							border-radius: 20rpx;
							margin-top: 16rpx;
							.dflex();
							align-items: center;
							font-size: 20rpx;
							color: #fff;
							width: 120rpx;
						}
					}
					.brbRight {
						flex: 1;
						height: 100%;
						image {
							width: 100%;
							height: 100%;
							border-radius: 0rpx 14rpx 14rpx 0rpx;
						}
					}
				}
			}
		}
		.tab {
			margin: 30rpx 30rpx 30rpx 10rpx;
			padding: 0rpx 20rpx 0rpx 10rpx;
			box-sizing: border-box;
			.dflexsb();
			height: 66rpx;
			// box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
			.icon {
				width: 48rpx;
				height: 38rpx;
				margin-right: 8rpx;
			}
			.info {
				color: #bebebe;
				font-size: 22rpx;
				letter-spacing: 2rpx;
				margin-right: 20rpx;
			}
			.release {
				height: 42rpx;
				width: 140rpx;
				border-radius: 26rpx;
				background-color: #6d9ff0;
				.dflex();
				font-size: 24rpx;
				color: #fff;
			}
		}
		.list {
			margin-top: 30rpx;
			.dflex();
			justify-content: flex-start;
			flex-wrap: wrap;
			.item {
				width: 48%;
				padding: 10rpx 0rpx 10rpx 0rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 16rpx;
				margin-bottom: 30rpx;
				&:nth-child(odd) {
					margin-right: 4% !important;
					.badge:nth-child(odd){
						background-color: #f3cf90 !important;
					}
				}
				.iTop {
					.dflex();
					justify-content: flex-start;
					padding: 10rpx;
					box-sizing: border-box;
					.shopImg {
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						margin-right: 10rpx;
					}
					.itRight {
						.dflex();
						justify-content: flex-start;
						align-items: flex-start;
						flex-direction: column;
						.shopName {
							color: #333;
							font-size: 24rpx;
							margin-bottom: 4rpx;
						}
						.auth {
							padding: 2rpx 4rpx;
							box-sizing: border-box;
							border: 1rpx solid #bebebe;
							border-radius: 8rpx;
							.dflexsb();
							.authIcon {
								width: 24rpx;
								height: 24rpx;
							}
							text {
								font-size: 18rpx;
								color: #bebebe;
							}
						}
					}
				}
			}
			.center {
				width: 100%;
				height: 280rpx;
				background: #f8f8f8;
				margin-top: 12rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.title {
				margin: 20rpx 0rpx 20rpx 10rpx;
				font-size: 24rpx;
				color: #333;
			}
			.bottom {
				.dflexsb();
				padding: 4rpx 0rpx 4rpx 10rpx;
				box-sizing: border-box;
				.price {
					color: #f60;
					font-size: 26rpx;
					font-weight: bolder;
					padding: 0rpx 6rpx;
					box-sizing: border-box;
				}
				.bl {
					flex: 1;
					.dflex();
					justify-content: flex-start;
					.badge {
						padding: 2rpx 4rpx;
						border-radius: 4rpx;
						box-sizing: border-box;
						color: #fff;
						font-size: 18rpx;
						background-color: #c37b85;
						.dflex();
					}
					.tt {
						font-size: 20rpx;
						color: #bebebe;
						margin-left: 4rpx;
					}
				}
			}
		}
	}
</style>
