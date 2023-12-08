<template>
	<view>
		<view class="tip">
			<text class="tn-icon-tips" style="color: #8a8a8a;padding-top: 4rpx;"></text>
			<text style="font-size: 26rpx;">{{topTip}}</text>
		</view>
		<view v-if="isCanUse">
			<view>
				<view class='header'>
					<image src='https://img1.baidu.com/it/u=554356530,611890499&fm=253&fmt=auto&app=138&f=PNG?w=500&h=498'></image>
				</view>
				<view class='content'>
					<view>{{companyInfoText}}</view>
					<text>{{loginInfoText}}</text>
				</view>
				<button class="bottom" type='primary' @click="getUserProfile">
					微信登录授权
				</button>
			</view>
		</view>
		<view v-if="isCanUse2">
			<view>
				<view class='header'>
					<image src='https://img1.baidu.com/it/u=554356530,611890499&fm=253&fmt=auto&app=138&f=PNG?w=500&h=498'></image>
				</view>

				<view class='content'>
					<view>{{companyInfoText}}</view>
					<text>{{loginPhoneText}}</text>
				</view>
			<!-- 	<button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="PhoneNumber">
					点击授权手机登录
				</button> -->
				<button class='bottom' type='primary' @click="goMine">
					点击授权手机登录
				</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				topTip:'未注册用户将进行注册,已注册用户直接登录!',
				companyInfoText: '顶呱呱集团申请获取以下权限',
				loginInfoText: '即将获得你的公开信息(昵称，头像、地区等)',
				loginPhoneText: '登录享受更好的用户体验，即将获得你的手机号用于绑定登录',
				code: "",
				isCanUse: true,
				isCanUse2: false,
				tip: '未注册用户将进行注册,已注册用户直接登录!'
			};
		},
		methods: {
			getUserProfile(){
				this.isCanUse=false;
				this.isCanUse2=true;
			},
			goMine(){
				uni.reLaunch({
					url:'/pages/mine/mine'
				})
			}
		},
	}
</script>

<style>
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}

	.tip {
		width: 100%;
		height: 80rpx;
		background-image: linear-gradient(-225deg, #fffdff 0%, #ddffff 100%);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #999;
		vertical-align: center;
		padding-left: 30rpx;
		box-sizing: border-box;
	}

	.u-icon__icon {
		margin-top: 6rpx;
		margin-right: 15rpx;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items:flex-start;
		margin-left: 20rpx;
		margin-bottom: 90rpx;
	}

	.regtip {
		color: #9d9d9d;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}

	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>
