<template>
	<view class="container">
		<view class="logo">
			<image src="@/static/login/logo.png" class="logo" mode=""></image>
		</view>
		<view class="phone" v-if="false">
			177****1947
		</view>
		<view class="phone" style="margin-top: 60rpx;">
			视频问诊随时随地
		</view>
		<view class="phone" style="margin-bottom: 60rpx;">
			挂号陪诊健康保障
		</view>
		<block v-if="!isAgree">
			<tn-button shape="round" backgroundColor="#1DC069" margin="0rpx 5%" width="90%" height="72rpx"
				fontColor="tn-color-white" openType="getPhoneNumber" @getphonenumber="getPhoneNumber" :blockRepeatClick="true">本机号码一键登录</tn-button>
		</block>
		<block v-else>
			<tn-button shape="round" backgroundColor="#1DC069" margin="0rpx 5%" width="90%" height="72rpx"
				fontColor="tn-color-white" @click="checkIsAgree" :blockRepeatClick="true">本机号码一键登录</tn-button>
		</block>
		<block>
			<view class="wxTip">
				微信一键登录
			</view>
			<view class="wcLogo" @click="wcLogin">
				<image src="@/static/login/wechat.png" class="wcLogo" mode=""></image>
			</view>
		</block>
		<view class="agreement">
			<tn-checkbox size="34" labelSize="24" shape="circle" activeColor="#1DC069" v-model="isAgree">登录即代表同意</tn-checkbox><text class="article"  @click="goUser">用户协议</text>和<text class="article" @click="goPrivate">隐私协议</text>
		</view>
		 <OpendateWindow v-model="showAuth" @send="getSonValue"></OpendateWindow>
	</view>
</template>
<script>
	import OpendateWindow from '@/components/opendate-Window/opendate-Window.vue';
	export default {
		data() {
			return {
				isAgree:false,
				sessionkey:'',
				openid:'',
				showAuth:true, 
			}
		},
		components:{
			OpendateWindow
		},
		onLoad(options) {
			
		},
		methods: {
			wcLogin(){
				this.tool.toastTip('很抱歉,暂时未开通一键登录!','none',1200);
			},
			checkIsAgree(){
				if(!this.isAgree){
					this.tool.toastTip('请勾选协议!','none',1500)
				}else{
					setTimeout(function() {
						uni.navigateBack({
							delta:1
						})
					}, 1200);
				}
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
		width: 100%;
		background: #fff;
		font-family: PingFangSC-Semibold, PingFang SC;
		color: #333;
		padding: 30rpx;
		box-sizing: border-box;
		.tipTitle {
			font-size: 40rpx;
			font-weight: bolder;
			color: #3D3D3D;
		}
		.logo {
			width: 190rpx;
			height: 190rpx;
			.dflex();
			margin: 40rpx auto;
			box-sizing: border-box;
		}
		.phone {
			margin: 30rpx auto;
			font-size: 38rpx;
			font-weight: bolder;
			.dflex();
			color: #3D3D3D;
		}
		.phone:nth-child(1){
			margin-top: 60rpx;
		}
		.wxTip {
			font-size: 24rpx;
			color: #808080;
			margin: 280rpx 0rpx 30rpx 0rpx;
			text-align: center;
		}
		.wcLogo {
			width: 80rpx;
			height: 80rpx;
			.dflex();
			margin: 20rpx auto;
		}
		.agreement{
			.dflex();
			position: fixed;
			bottom: 140rpx;
			left: 0rpx;
			right: 0rpx;
			/deep/.tn-checkbox__label{
				color: #808080;
				font-size: 24rpx;
				margin-right: 0rpx !important;
			}
			.article{
				color: #1DC069;
				margin: 0rpx 4rpx;
				font-weight: bolder;
				font-size: 24rpx;
			}
		}
	}
</style>
