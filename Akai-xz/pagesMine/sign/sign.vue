<template>
	<view class="container">
		<view class="topBack"></view>
		<view class="scrollBox">
			<view class="wrap">
				<view class="wTop">
					<view class="wtLeft">
						<image src="https://salephine.asia/img/index/logo.gif" class="headerImg" mode=""></image>
						<view class="name">
							已连续签到<text class="count">3</text>天
						</view>
					</view>
					<view class="wtRight">
						<text>签到规则</text>
						<image src="@/pagesMine/static/right-arrow.png" class="icon" mode=""></image>
					</view>
				</view>
				<view class="wMiddle">
					<view :class="index==6&&!item.isSign?'sp':item.isSign&&index!=6?'item active':item.isSign&&index==6?'sp active':'item'" v-for="(item,index) in signList" :key="index">
						<block v-if="index==6">
							<view class="left">
								<view class="date">
									{{item.date}}
								</view>
								<view class="integral">
									{{item.info}}
								</view>
								<view class="integral">
									{{item.tip}}
								</view>
							</view>
							<view class="right">
								<image src="@/pagesMine/static/box.png" class="icon" mode=""></image>
							</view>
						</block>
						<block v-else>
							<text class="date">{{item.date}}</text>
							<image src="@/pagesMine/static/money.png" class="icon" mode=""></image>
							<text click="integral">{{item.info}}</text>
						</block>
					</view>
				</view>
				<view class="signBtn">
					签到
				</view>
			</view>
			<view class="listBox">
				<view class="lTop">
					<view class="left">
						赚积分
					</view>
					<view class="right">
						做任务轻松赚积分
					</view>
				</view>
				<view class="item" v-for="(item,index) in toList" :key="index">
					<view class="left">
						<image :src="item.icon" class="icon" mode=""></image>
					</view>
					<view class="middle">
						<view class="mTop">
							{{item.name}}
						</view>
						<view class="mBottom">
							<text class="tip">{{item.tip}}</text>
							<image src="@/pagesMine/static/money.png" class="icon" mode=""></image>
							<text class="info">{{item.info}}</text>
						</view>
					</view>
					<view class="right">
						去关注
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				signList:[
					{date:'第1天',info:'+10积分',isSign:true},
					{date:'第2天',info:'+20积分',isSign:false},
					{date:'第3天',info:'+30积分',isSign:true},
					{date:'第4天',info:'+40积分',isSign:false},
					{date:'第5天',info:'+50积分',isSign:true},
					{date:'第6天',info:'+60积分',isSign:false},
					{date:'第7天',info:'领取',tip:'神秘好礼',status:'special',isSign:true},
				],
				toList: [{
						name: '关注微信公众号',
						tip: '任务奖励',
						info: '+100积分',
						icon: '../static/wc.png',
					},
					{
						name: '完善会员信息',
						tip: '任务奖励',
						info: '+100积分',
						icon: '../static/id.png'
					},
					{
						name: '添加企业微信',
						tip: '任务奖励',
						info: '+200积分',
						icon: '../static/c-w.png'
					},
					{
						name: '邀请好友',
						tip: '任务奖励',
						info: '+200积分',
						icon: '../static/add-sign.png'
					},
					{
						name: '阅读精彩文章',
						tip: '任务奖励',
						info: '+10积分',
						icon: '../static/article.png'
					},
					{
						name: '点赞养生好文',
						tip: '任务奖励',
						info: '+10积分',
						icon: '../static/zan-sign.png'
					},
				]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

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
	/* 去掉页面所有滚动条 */
	::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
<style lang="less" scoped>
	// 公共less函数
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
		height: 100% !important;
		width: 100% !important;
		background: #f2f3f7 !important;
		.topBack {
			width: 100%;
			height: 500rpx;
			position: fixed;
			top: 0;
			left: 0;
			background: linear-gradient(to bottom, #3da2ff, #f2f3f7);
		}
		.scrollBox{
			width: 100%;
			height: 100% !important;
			position: fixed;
			top: 0;
			left: 0;
			overflow-y: scroll !important;
			background: transparent;
			padding: 30rpx 30rpx 0rpx 30rpx;
			box-sizing: border-box;
		}
		.wrap {
			box-sizing: border-box;
			background: linear-gradient(to bottom, #f3f9fe, #ffffff);
			padding: 20rpx 30rpx;
			border-radius: 26rpx;
			.wTop {
				.dflexsb();
				.wtLeft {
					flex: 1;
					height: 100%;
					.dflex();
					justify-content: flex-start;
					.headerImg {
						width: 70rpx;
						height: 70rpx;
						background: #ccc;
						border-radius: 50%;
						margin-right: 8rpx;
					}
					.name {
						font-size: 28rpx;
						color: #000;
					}
					.count {
						color: #ff371d;
						font-size: 30rpx;
						margin: 0rpx 4rpx;
					}
				}
				.wtRight {
					width: 140rpx;
					color: #ccc;
					font-size: 26rpx;
					.dflexsa();
					.icon {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
			.wMiddle {
				margin: 10rpx 0rpx;
				padding: 10rpx;
				box-sizing: border-box;
				.dflex();
				justify-content: flex-start;
				flex-wrap: wrap;
				.item {
					height: 166rpx;
					width: 22.75%;
					background: #eff7ff;
					border-radius: 14rpx;
					margin-right: 3%;
					font-size: 24rpx;
					margin-bottom: 20rpx;
					&.active {
						color: #fff !important;
						background: linear-gradient(to bottom, #2ba5fe, #3bb4fd);
					}
					&.active .date {
						color: #fff;
					}
					&:nth-child(4) {
						margin-right: 0 !important;
					}
					.dflex();
					flex-direction: column;
					.date {
						color: #adadad;
					}
					.icon {
						width: 54rpx;
						height: 54rpx;
						margin: 6rpx 0rpx;
					}
					.integral {
						color: #000;
					}
				}
				.sp {
					width: 48.5%;
					height: 166rpx;
					background: #eff7ff;
					border-radius: 14rpx;
					font-size: 24rpx;
					margin-bottom: 20rpx;
					.dflex();
					justify-content: flex-start;
					&.active {
						color: #fff !important;
						background: linear-gradient(to bottom, #2ba5fe, #3bb4fd);
					}
					&.active .date {
						color: #fff !important;
					}
					.left {
						.dflex();
						flex: 1;
						flex-direction: column;
						align-items: flex-start;
						font-size: 24rpx;
						padding-left: 38rpx;
						box-sizing: border-box;
						.date {
							color: #adadad;
						}
						.integral {
							margin: 4rpx 0rpx;
							.dflex();
						}
						.integral:nth-child(2) {
							margin-top: 24rpx;
						}
						.tip {
							color: #000;
						}
					}
					.right {
						width: 52%;
						height: 100%;
						.dflex();
						.icon {
							width: 90rpx;
							height: 90rpx;
						}
					}
				}
			}
			.signBtn {
				background: linear-gradient(to right, #1d9aff, #3cb4ff);
				width: 100%;
				padding: 18rpx 0rpx;
				box-sizing: border-box;
				.dflex();
				color: #fff;
				font-size: 26rpx;
				letter-spacing: 4rpx;
				border-radius: 40rpx;
				margin: 20rpx 0rpx;
			}
		}
		.listBox {
			box-sizing: border-box;
			background: #fff;
			padding: 20rpx 30rpx;
			border-radius: 26rpx;
			margin: 30rpx 0rpx 80rpx 0rpx;
			.lTop {
				.dflex();
				justify-content: flex-start;
				padding: 10rpx;
				box-sizing: border-box;
				.left {
					font-size: 30rpx;
					color: #000;
					font-weight: bolder;
				}
				.right {
					border-left: 4rpx solid #eee;
					margin-left: 10rpx;
					padding-left: 8rpx;
					box-sizing: border-box;
					font-size: 24rpx;
					color: #ccc;
				}
			}
			.item {
				margin-top: 30rpx;
				width: 100%;
				padding: 10rpx;
				box-sizing: border-box;
				.dflexsb();
				justify-content: flex-start;
				.left {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					background: #ecfaff;
					.dflex();
					.icon {
						width: 56rpx;
						height: 56rpx;
					}
				}
				.middle {
					flex: 1;
					margin-left: 26rpx;
					height: 100%;
					.mTop {
						font-size: 26rpx;
						color: #000;
						font-weight: bolder;
						margin-bottom: 12rpx;
					}
					.mBottom {
						.dflex();
						justify-content: flex-start;
						.tip {
							font-size: 24rpx;
							color: #ccc;
						}
						.icon {
							width: 28rpx;
							height: 28rpx;
							margin: 0rpx 4rpx 0rpx 6rpx;
						}
						.info {
							color: #f60;
							font-size: 24rpx;
						}
					}
				}
				.right {
					padding: 10rpx 20rpx;
					box-sizing: border-box;
					.dflex();
					color: #fff;
					font-size: 26rpx;
					letter-spacing: 2rpx;
					background: linear-gradient(to right, #1d9aff, #3cb4ff);
					border-radius: 40rpx;
				}
			}
		}
	}
</style>
