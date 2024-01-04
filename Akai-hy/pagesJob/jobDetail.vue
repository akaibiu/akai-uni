<template>
	<view class="container">
		<view class="recruit">
			<view class="rTop">
				<view class="title">
					UI设计师
				</view>
				<view class="money">
					30K-60K
				</view>
			</view>
			<view class="badge">
				<view class="bItem">
					<image src="@/pagesJob/static/position.png" class="bIcon" mode=""></image>
					<text>广州-天河区</text>
				</view>
				<view class="bItem">
					<image src="@/pagesJob/static/experience.png" class="bIcon" mode=""></image>
					<text>经验不限</text>
				</view>
				<view class="bItem">
					<image src="@/pagesJob/static/edu.png" class="bIcon" mode=""></image>
					<text>学历不限</text>
				</view>
			</view>
			<view class="hr">
				<view class="hrLeft">
					<image src="https://salephine.asia/img/index/logo.gif" class="headerImg" mode=""></image>
					<view class="hrInfo">
						<text class="name">周淑怡</text>
						<text class="hrJob">鸭儿高头巴颗米科技有限公司-人事经理</text>
					</view>
				</view>
				<view class="right">
					<image src="@/pagesJob/static/arrow.png" class="arrow" mode=""></image>
				</view>
			</view>
		</view>
		<view class="bigTitle">
			职位详情
		</view>
		<view class="jobDetail">
			<view class="jobBadge">
				<view class="jbItem">
					3DMAX
				</view>
				<view class="jbItem">
					3DMAX
				</view>
				<view class="jbItem">
					3DMAX
				</view>
			</view>
			<view class="skill">
				1.能够使用git完成协作开发；
			</view>
			<view class="skill">
				2.能够独立的自主的发现并解决问题，有自己解决问题的方式；
			</view>
			<view class="skill">
				1.能够使用git完成协作开发；
			</view>
			<view class="skill">
				2.能够独立的自主的发现并解决问题，有自己解决问题的方式；
			</view>
			<view class="skill">
				1.能够使用git完成协作开发；
			</view>
			<view class="skill">
				2.能够独立的自主的发现并解决问题，有自己解决问题的方式；
			</view>
		</view>
		<view class="bigTitle">
			公司信息
		</view>
		<view class="mapBox">
			<view class="mTop">
				<view class="mLeft">
					<image src="https://salephine.asia/img/index/logo.gif" class="cHeader" mode=""></image>
					<view class="companyInfo">
						<text class="cName">鸭儿高头巴颗米科技有限公司</text>
						<text class="cDetail">50-100人/计算机软件技术</text>
					</view>
				</view>
				<view class="mRight">
					<image src="@/pagesJob/static/arrow.png" class="arrow" mode=""></image>
				</view>
			</view>
			<view class="map">
				<map :latitude="latitude" :longitude="longitude" :markers="covers" @click="clickMap">
				</map>
			</view>
		</view>
		<view class="bottom">
			<view class="item">
				<image src="@/pagesJob/static/share.png" class="share" mode=""></image>
				<text>分享</text>
			</view>
			<view class="item">
				<image src="@/pagesJob/static/collected.png" class="collect" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="talk">
				立即沟通
			</view>
			<view class="deliver">
				投递简历
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'map',
				name: '杭州市',
				address: '杭州市拱墅区万达广场',
				latitude: 30.31968,
				longitude: 120.14209,
				covers: [{
					latitude: 30.31968,
					longitude: 120.14209,
				}]
			}
		},
		onLoad(option) {
			// const item = JSON.parse(decodeURIComponent(option.item));
			// console.log(item, '传递参数');
		},
		methods: {
			clickMap(e) {
				console.log(e);
				uni.openLocation({
					longitude: Number(this.longitude),
					latitude: Number(this.latitude),
					name: this.name,
					address: this.address
				})
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
		height: 100%;
		width: 100%;
		font-family: PingFangSC-Semibold, PingFang SC;
		padding: 30rpx;
		box-sizing: border-box;
		overflow-y: scroll !important;
		background: #f6f6f6;
		color: #333;
		padding-bottom: 50rpx;
		box-sizing: border-box;
		.recruit {
			padding: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 50rpx;
			.rTop {
				.dflexsb();
				margin: 0rpx 0rpx 30rpx 0rpx;
				.title {
					width: 70%;
					font-size: 32rpx;
					font-weight: bolder;
				}
				.money {
					font-size: 28rpx;
					flex: 1;
					color: red;
					.dflex();
				}
			}
			.badge {
				.dflex();
				justify-content: flex-start;
				flex-wrap: wrap;
				.bItem {
					margin-right: 20rpx;
					.dflex();
					justify-content: flex-start;
					.bIcon {
						margin-right: 6rpx;
						width: 34rpx;
						height: 34rpx;
					}
					text {
						color: #333;
						font-size: 24rpx;
					}
				}
			}
			.hr {
				.dflexsb();
				margin-top: 30rpx;
				.hrLeft {
					.dflex();
					justify-content: flex-start;
					.headerImg {
						margin-right: 16rpx;
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
					}
					.hrInfo {
						.dflex();
						align-items: flex-start;
						flex-direction: column;
						.name {
							font-size: 24rpx;
							margin-bottom: 8rpx;
							font-weight: bolder;
						}
						.hrJob {
							font-size: 22rpx;
						}
					}
				}
				.right {
					.arrow {
						width: 38rpx;
						height: 38rpx;
					}
				}
			}
		}
		.bigTitle {
			margin: 30rpx 0rpx;
			font-size: 28rpx;
			font-weight: bolder;
			padding-left: 30rpx;
			box-sizing: border-box;
		}
		.jobDetail {
			padding: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 50rpx;
			.jobBadge {
				.dflex();
				justify-content: flex-start;
				flex-wrap: wrap;
				padding: 4rpx;
				box-sizing: border-box;
				.jbItem {
					padding: 4rpx 10rpx;
					.dflex();
					font-size: 20rpx;
					background: #e6f3f1;
					border-radius: 12rpx;
					margin-right: 16rpx;
				}
			}
			.skill {
				width: 100%;
				margin-bottom: 6rpx;
				font-size: 26rpx;
				color: #0f1127;
				margin-top: 30rpx;
				&:first-child {
					margin-top: 30rpx !important;
				}
			}
		}
		.mapBox {
			padding: 30rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 50rpx;
			.mTop {
				.dflexsb();
				flex: 1;
				.mLeft {
					.dflex();
					justify-content: flex-start;
					.cHeader {
						width: 80rpx;
						height: 80rpx;
						border-radius: 14rpx;
						margin-right: 16rpx;
					}
					.companyInfo {
						.dflex();
						justify-content: flex-start;
						align-items: flex-start;
						flex-direction: column;
						.cDetail {
							font-size: 24rpx;
							color: #bebebe;
						}
						.cName {
							font-size: 26rpx;
							color: #0f1127;
							margin-bottom: 10rpx;
						}
					}
				}
				.mRight {
					width: 80rpx;
					.dflex();
					.arrow {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.map {
				width: 100%;
				height: 300rpx;
				background-color: #fff;
				border-radius: 20rpx;
				margin-top: 20rpx;
				map {
					padding: 0 !important;
					margin: 0 !important;
					width: 100% !important;
					height: 100% !important;
					border-radius: 20rpx !important;
				}
			}
		}
		.bottom {
			border-radius: 50rpx;
			background: #fff;
			padding: 20rpx 20rpx;
			box-sizing: border-box;
			margin-top: 30rpx;
			.dflexsb();
			.item {
				padding: 20rpx 30rpx;
				box-sizing: border-box;
				width: 18%;
				.dflex();
				flex-direction: column;
				.share, .collect {
					width: 54rpx;
					height: 54rpx;
				}
				text {
					font-size: 24rpx;
					color: #0f1127;
					margin-top: 6rpx;
				}
			}
			.talk, .deliver {
				padding: 20rpx 40rpx;
				box-sizing: border-box;
				background-color: #fab31b;
				.dflex();
				color: #0f1127;
				font-size: 26rpx;
				border-radius: 40rpx;
			}
			.deliver {
				background-color: #47cfc8;
				margin-left: 12rpx;
			}
		}
	}
</style>