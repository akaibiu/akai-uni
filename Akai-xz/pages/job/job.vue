<template>
	<view class="container">
		<view class="searchBox">
			<view class="inputBox">
				<image src="../../static/images/search-icon.png" class="searchIcon" mode=""></image>
				<input type="text" name="" placeholder="请输入搜索内容" v-model="searchValue">
			</view>
			<view class="searchBtn" @click="startSearch">
				搜索
			</view>
		</view>
		<view class="banner">
			<view class="item">
				<image src="../../static/images/job.png" class="bIcon" mode=""></image>
				<text>附近工作</text>
			</view>
			<view class="item">
				<image src="../../static/images/education.png" class="bIcon" mode=""></image>
				<text>找实习</text>
			</view>
			<view class="item">
				<image src="../../static/images/package.png" class="bIcon" mode=""></image>
				<text>找兼职</text>
			</view>
			<view class="item">
				<image src="../../static/images/type.png" class="bIcon" mode=""></image>
				<text>职位分类</text>
			</view>
		</view>
		<view class="content">
			<view class="cTop">
				<view class="left">
					<view :class="current==index?'item active':'item'" v-for="(item,index) in tabList" :key="index"
						@click="changeTab(item,index)">
						<view>{{item.name}}</view>
						<view class="line"></view>
					</view>
				</view>
				<view class="right">
					<image src="../../static/images/add.png" class="add" @click="addJob" mode=""></image>
				</view>
			</view>
			<view class="list">
				<view class="itemJob" v-for="(item,index) in jobList" :key="index" @click="clickJobInfo(item,index)">
					<view class="iTop">
						<view class="jobName">
							{{item.jobName}}
						</view>
						<view class="money">
							{{item.money}}
						</view>
					</view>
					<view class="badge" v-if="item.badgeList.length>0">
						<view class="badgeItem" v-for="(x,z) in item.badgeList" :key="z">
							{{x.name}}
						</view>
					</view>
					<view class="info">
						{{item.info}}
					</view>
					<view class="cInfo">
						<view class="hr">
							<image :src="item.header" class="hrHeader" mode=""></image>
							<text>{{item.hr}}</text>
						</view>
						<view class="address">
							{{item.address}}
						</view>
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
				searchValue: null, // Search Value
				tabList: [{
					name: '最新'
				}, {
					name: 'Java'
				}],
				current: 0, // tab选项
				jobList: [
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'周女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'吴女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'王女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'张女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'李女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'谢女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'易女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'甘女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'苏女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
					{jobName:'Java开发工程师',money:'30K-60K 14薪',badgeList:[{name:'1-3年'},{name:'本科'},{name:'美女'}],info:'鸭儿高头巴颗米科技有限公司/50-100人',hr:'郑女士-人事经理',header:'https://salephine.asia/img/index/logo.gif',address:'成都市-高新区'},
				], // 工作列表
			}
		},
		onLoad() {

		},
		methods: {
			//Change Tab
			changeTab(item, index) {
				this.current = index;
			},
			// Start Search
			startSearch() {
				uni.showToast({
					title: this.searchValue,
					duration: 1500,
					icon: 'none'
				})
			},
			// Click Item
			clickJobInfo(item, index) {
				uni.navigateTo({
					url:'/pages/job/jobDetail/jobDetail?item='+encodeURIComponent(JSON.stringify(item))
				})
		 },
			// Click Addjob
			addJob() {
				uni.showToast({
					title: '点击了加号',
					duration: 1500,
					icon: 'none'
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
		overflow: hidden !important;
		background: #f8f8f8;
		color: #333;
		.searchBox {
			.dflexsb();
			width: 100%;
			padding: 10rpx;
			box-sizing: border-box;
			.inputBox {
				position: relative;
				width: 100%;
				height: 70rpx;
				background: #fff;
				border-radius: 50rpx;
				.searchIcon {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					left: 30rpx;
					top: 30%;
				}
				input {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0rpx;
					left: 0rpx;
					padding-left: 80rpx;
					font-size: 26rpx;
					color: #ccc;
					;
					&::placeholder {
						font-size: 26rpx;
						color: #ccc;
					}
				}
			}
			.searchBtn {
				padding: 16rpx 0rpx;
				box-sizing: border-box;
				background-color: #47cfc8;
				min-width: 140rpx;
				.dflex();
				color: #fff;
				font-size: 26rpx;
				border-radius: 40rpx;
				margin-left: 20rpx;
			}
		}
		.banner {
			.dflexsb();
			padding: 30rpx;
			box-sizing: border-box;
			margin-top: 30rpx;
			border-radius: 60rpx;
			background: #fff;
			.item {
				width: 25%;
				.dflex();
				flex-direction: column;
				min-height: 150rpx;
				.bIcon {
					width: 60rpx;
					height: 60rpx;
				}
				text {
					margin-top: 24rpx;
					font-size: 24rpx;
				}
			}
		}
		.content {
			height: 100%;
			overflow-y: scroll;
			.cTop {
				.dflexsb();
				padding: 20rpx 0rpx;
				box-sizing: border-box;
				.left {
					.dflex();
					justify-content: flex-start;
					height: 80rpx;
					.item {
						width: 120rpx;
						color: #333;
						font-size: 26rpx;
						height: 80rpx;
						.dflex();
						flex-direction: column;
						background-color: transparent !important;
						.line {
							width: 30rpx;
							height: 30rpx;
							border-radius: 90%;
							border-bottom: 4rpx solid transparent;
							transition: all 0.3s linear;
						}
						&.active {
							font-size: 28rpx;
						}
						&.active .line {
							border-bottom: 4rpx solid #47cfc8;
						}
					}
				}
				.right {
					.add {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.list {
				height: 100%;
				overflow-y: scroll;
				padding-bottom: 300rpx;
				box-sizing: border-box;
			}
			.itemJob {
				padding: 30rpx;
				box-sizing: border-box;
				background: #fff;
				border-radius: 60rpx;
				margin-bottom: 30rpx;
				.iTop {
					font-size: 26rpx;
					font-weight: bolder;
					padding: 0rpx 10rpx;
					box-sizing: border-box;
					.dflexsb();
					.jobName {
						width: 60%;
					}
					.money {
						flex: 1;
						color: red;
						.dflex();
						justify-content: flex-end;
					}
				}
				.badge {
					.dflex();
					justify-content: flex-start;
					flex-wrap: wrap;
					margin-top: 20rpx;
					.badgeItem {
						padding: 4rpx 14rpx;
						box-sizing: border-box;
						background: #dbfcf3;
						margin-right: 14rpx;
						border-radius: 12rpx;
						.dflex();
						font-size: 22rpx;
					}
				}
				.info {
					font-size: 26rpx;
					color: #bebebe;
					margin-top: 20rpx;
					padding: 0rpx 20rpx 0rpx 0rpx;
					box-sizing: border-box;
				}
				.cInfo {
					.dflexsb();
					margin-top: 24rpx;
					.hr {
						width: 70%;
						.dflex();
						justify-content: flex-start;
						.hrHeader {
							width: 46rpx;
							height: 46rpx;
							border-radius: 50%;
							margin-right: 10rpx;
						}
						text {
							font-size: 24rpx;
						}
					}
					.address {
						flex: 1;
						font-size: 24rpx;
						color: #bebebe;
					}
				}
			}
		}
	}
</style>
