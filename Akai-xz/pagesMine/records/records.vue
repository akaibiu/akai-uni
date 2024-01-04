<template>
	<view class="content">
		<z-paging ref="paging" :show-loading-more-no-more-view="false" loading-more-no-more-text="暂时没有更多兑换记录!"  empty-view-text="暂时没有查询到兑换记录!" :auto-show-back-to-top="true" back-to-top-threshold="300rpx" v-model="dataList"
			@query="queryList"  :refresher-complete-delay="500" :delay="300" :safe-area-inset-bottom="true" :use-custom-refresher="true">
			<view class="item" v-for="(item,index) in dataList" :key="index">
				<view class="left">
					<view class="top">
						<text>¥</text>{{item.CouponFace}}
					</view>
					<view class="middle">
						{{item.CouponName}}
					</view>
				</view>
				<view class="right">
					<!-- v1.0.4 兑换订单号展示功能废弃 -->
					<!-- <view class="rightItem">
						<view class="rightLeft">
							券码:
						</view>
						<view class="data" @longpress="copyCode(item.Code)">{{item.Code}}</view>
					</view> -->
					<view class="rightItem">
						<view class="rightLeft">
							到期时间:
						</view>
						<view class="data">{{String(item.CouponEndTime).replace('T',' ').slice(0,10)}}到期</view>
					</view>
					<view class="rightItem">
						<view class="rightLeft">
							流水号:
						</view>
						<view class="data" @longpress="copySerial(item.ExchangeSerial)">{{item.ExchangeSerial}}</view>
					</view>
					<view class="rightItem">
						<view class="rightLeft">
							兑换时间:
						</view>
						<view class="data">{{String(item.CreateTime).replace('T',' ')}}</view>
					</view>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	// import HTTP from '@/https/request.js'
	// import {API} from '@/https/apis.js'
	export default {
		data() {
			return {
				dataList: [],
			}
		},
		mounted() {
			this.tool.loadingFn('',500);
		},
		methods: {
			queryList() {
				// if (!uni.getStorageSync('seesionKey') || !uni.getStorageSync('phone')) {
				// 	this.tool.pleaseLoginTipBox('../../login/login');
				// } else {
				// 	let that = this;
				// 	const postData = {
				// 		openid: uni.getStorageSync('openId'),
				// 		appid: that.commonConfig.quanyi_appid,
				// 		version: that.commonConfig.version,
				// 		timestamp: new Date().valueOf(),
				// 		codeStatus:'0',
				// 	};
				// 	HTTP.requestPost(API.searchCouponApi, that.tool.getPostData(postData), res => {
				// 		console.log(res, '响应成功(获取兑换记录列表)');
				// 		const {data}=res.data;
				// 		res.data.code=='000'?that.$refs.paging.complete(data):that.tool.toastTip(res.data.message,'none',1500)
				// 	}, err => {
				// 		console.log(err, '响应失败')
				// 		that.tool.toastTip('发生未知错误,请稍后重试!','none',1500)
				// 	})
				// }
				const data=[
					{CouponFace:"20.00元",CouponName:"提现20.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现10.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现30.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现40.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现50.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
					{CouponFace:"20.00元",CouponName:"提现60.00元",Code:"xrwrwdfsfs",CouponEndTime:"2023-01-01 20:09:20",CreateTime:"2023-01-03 20:09:20",ExchangeSerial:"497798464545"},
				];
				this.$refs.paging.complete(data);
			},
			copyCode(e) {
				uni.setClipboardData({
					data: String(e),
					success: () => {
						this.tool.toastTip('券码复制成功!','none',1500);
					}
				});
			},
			copySerial(e) {
				uni.setClipboardData({
					data: String(e), 
					success: () => { 
						this.tool.toastTip('券码复制成功!','none',1500);
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
		@f2:#f2f2f2;
		@fff:#ffffff;
		@br50:50%;
		@d8:#d8d8d8;
		@fffce8:#fffce8;
		@666:#666666;
		@FF3329:#FF3329;
		@000:#000000;
		@f4:#f4f4f4;
		@f8:#f8f8f8;
		@333:#333333;
		@444:#444444;
		@0081FF:#0081FF;
		@9d:#9d9d9d;
		@999:#999999;
		@FCB138:#FCB138;
		@813D00:#813D00;
		@EF861B:#EF861B;
		@70431B:#70431B;
		@f0:#f0f0f0;
		@888:#888888;
		@B8783F:#B8783F;
		@777:#777777;
		@eee:#eeeeee;
		@631:#636661;
		@bbb:#bbbbbb;
		@ad:#adadad;
		@ccc:#cccccc;
		@303133:#303133;
		@FA6400:#FA6400;
		@FFF3D2:#FFF3D2;
		/deep/.z-paging-content{
			top: 5rpx !important;
		}
	.content {
		background-color: @f2;
		.nothing {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-top: -20%;
			image {
				width: 270rpx;
				height: 188rpx;
				margin-bottom: 30rpx;
			}
			view {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: @bbb;
			}
		}
		.item {
			width: 96%;
			margin: 0 auto;
			margin-bottom: 20rpx;
			height: 200rpx;
			background: @fff;
			border-radius: 8rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
			&:last-child {
				margin-bottom: 40rpx;
			}
			.left {
				width: 35%;
				height: 200rpx;
				background: @FFF3D2;
				border-radius: 8rpx 0px 0px 8rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				line-height: 60rpx;
				padding: 0rpx 10rpx;
				box-sizing: border-box;
				.top {
					font-size: 40rpx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: @EF861B;
					text {
						font-size: 30rpx;
					}
				}
				.middle {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: @333;
					padding: 0rpx 5rpx;
					box-sizing: border-box;
				}
				.bottom {
					font-size: 20rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: @666;
				}
			}
			.right {
				height: 100%;
				width: 70%;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: @444;
				line-height: 40rpx;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				margin-left: 20rpx;
				.rightItem {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.rightLeft {
						width: 150rpx;
					}
					.data {
						flex: 1;
						flex-wrap: wrap;
					}
				}
			}
		}
	}
</style>
