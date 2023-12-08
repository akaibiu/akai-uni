<template>
	<view class="template-login">
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="goHome"></text>
			</view>
		</tn-nav-bar>
		<view class="login">
			<view class="login__bg login__bg--top">
				<image class="bg" src="https://tnuiimage.tnkjapp.com/login/2/login-top2.png" mode="widthFix"></image>
			</view>
			<view class="login__wrapper" style="margin-top: 360rpx;">
				<view class="tn-margin-left tn-margin-right tn-text-bold animate__animated animate__pulse"
					style="font-size: 60rpx;color:#2e355e">
					欢迎使用
				</view>
				<view class="tn-margin tn-color-gray--disabled tn-text-lg animate__animated animate__pulse"
					style="color: #007aff !important;margin-left:100rpx;font-family: '楷体';">
					亲爱的iKun,微信授权即可体验!
				</view>
				<view class="login__way animate__animated animate__pulse tn-flex tn-flex-col-center tn-flex-row-center">
					<view
						class="login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-teal--dark">
						<view class="tn-icon-wechat-fill"></view>
					</view>
				</view>
				<view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"
					style="margin-top:40rpx">
					<button type='primary' hover-class="tn-hover" style="letter-spacing: 6rpx;"
						class="login__info__item__button tn-bg-blue tn-color-white" open-type="getPhoneNumber"
						@getphonenumber="getPhoneNumber" @click="getLogin">手机号码一键登录</button>
				</view>
				<view class="tn-margin tn-color-gray--disabled tn-text-lg"
					style="color: #ccc !important;margin-left:100rpx;font-family: '楷体';margin-top: 60rpx;">
					新用户登录即加入会员，可享受会员权益!
				</view>
			</view>
			<!-- 底部背景图片-->
			<view class="login__bg login__bg--bottom">
				<image src="https://tnuiimage.tnkjapp.com/login/2/login-bottom2.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	// import {authLogin,getUserInfo,getUserPhone} from '@/apis/login.js'
	export default {
		data() {
			return {
				code: null,
				getUserPhoneParam: {
					appid: null,
					encryptedData: null,
					iv: null,
					sessionKey: null,
					hotelIds:null,
					openid:null,
				}
			}
		},
		watch: {
			currentModeIndex(value) {
				const sliderWidth = uni.upx2px(476 / 2)
				this.modeSliderStyle.left = `${sliderWidth * value}px`
			}
		},
		onShow() {
			let that = this;
		},
		methods: {
			goHome() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 按钮点击事件------------------------------------------------------------------------------------------
			getLogin(){
				let that=this;
				// uni.login({
				// 	success: (res) => {
				// 		getApp().globalData.config.appInfo.code = res.code;
				// 		that.code = res.code;
				// 		// 1-调用登录函数获取openid和sessionKey
				// 		authLogin(that.getUserPhoneParam.appid, res.code).then(res => {
				// 			if (res.openid && res.sessionKey) {
				// 				uni.setStorageSync('openid', res.openid);
				// 				uni.setStorageSync('sessionKey', res.sessionKey);
				// 				that.getUserPhoneParam.sessionKey = res.sessionKey;
				// 				that.getUserPhoneParam.openid=res.openid;
				// 			} else {
				// 				that.tool.toastTip('登录出错,请稍后重试!', 'none', 1000)
				// 			}
				// 		}).catch(error => {
				// 			that.tool.toastTip('登录出错,请稍后重试!', 'none', 1000)
				// 		})
				// 	}
				// });
			},
			// 0-手机号码授权一键登录
			getPhoneNumber(e) {
				let that = this;
				uni.showLoading({title:'正在登录中...'});
				// 2-调用手机号授权获取解析手机号参数
				// if (e.detail.errMsg == "getPhoneNumber:ok") {
				// 	that.getUserPhoneParam.encryptedData = e.detail.encryptedData;
				// 	that.getUserPhoneParam.iv = e.detail.iv;
				// 	// 3-获取手机号码信息
				// 	getUserPhone(that.getUserPhoneParam).then(res => {
				// 		if (res.code == 200) {
				// 			uni.setStorageSync('phone', res.data.phoneNumber);
				// 			uni.hideLoading();
				// 			that.tool.toastTip('登录成功!', 'none', 1000)
				// 			setTimeout(function() {that.goBack()}, 1000);
				// 		} else {
				// 			that.tool.toastTip(res.msg, 'none', 1000)
				// 		}
				// 	}).catch(err => {
				// 		that.tool.toastTip(res.msg, 'none', 1000)
				// 	});
				// } else {
				// 	that.tool.toastTip('用户拒绝授权手机号', 'none', 1000)
				// }
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/templatePage/custom_nav_bar.scss';
	.animate__pulse {
		animation-duration: 1500ms; //控制动画执行时间
		animation-iteration-count: infinite;
	}
	.login {
		position: relative;
		height: 100%;
		z-index: 1;
		/* 背景图片 start */
		&__bg {
			z-index: -1;
			position: fixed;
			&--top {
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				.bg {
					width: 750rpx;
					will-change: transform;
				}
			}
			&--bottom {
				bottom: -10rpx;
				left: 0;
				right: 0;
				width: 100%;
				// height: 144px;
				margin-bottom: env(safe-area-inset-bottom);
				image {
					width: 750rpx;
					will-change: transform;
				}
			}
		}
		/* 背景图片 end */
		/* 内容 start */
		&__wrapper {
			margin-top: 300rpx;
			width: 100%;
		}
		/* 切换 start */
		&__mode {
			position: relative;
			margin: 0 auto;
			width: 476rpx;
			height: 77rpx;
			margin-top: 100rpx;
			background-color: rgba(255, 255, 255, 0.6);
			box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
			border-radius: 39rpx;
			&__item {
				height: 77rpx;
				width: 100%;
				line-height: 77rpx;
				text-align: center;
				font-size: 31rpx;
				color: #080808;
				letter-spacing: 1em;
				text-indent: 1em;
				z-index: 2;
				transition: all 0.4s;
				&--active {
					font-weight: bold;
					color: #FFFFFF;
				}
			}
			&__slider {
				position: absolute;
				height: inherit;
				width: calc(476rpx / 2);
				border-radius: inherit;
				box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
				z-index: 1;
				transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}
		/* 切换 end */
		/* 登录注册信息 start */
		&__info {
			margin: 80rpx 30rpx 10rpx 30rpx;
			padding-bottom: 0;
			border-radius: 20rpx;
			&__item {
				&__input {
					margin-top: 59rpx;
					width: 100%;
					height: 77rpx;
					border: 1rpx solid #E6E6E6;
					border-radius: 39rpx;
					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						color: #838383;
					}
					&__content {
						width: 80%;
						padding-left: 10rpx;
						&--verify-code {
							width: 56%;
						}
						input {
							font-size: 24rpx;
							// letter-spacing: 0.1em;
						}
					}
					&__right-icon {
						width: 10%;
						font-size: 44rpx;
						margin-right: 20rpx;
						color: #838383;
					}
					&__right-verify-code {
						width: 34%;
						margin-right: 20rpx;
					}
				}
				&__button {
					margin-top: 75rpx;
					margin-bottom: 39rpx;
					width: 100%;
					height: 77rpx;
					text-align: center;
					font-size: 31rpx;
					font-weight: bold;
					line-height: 77rpx;
					letter-spacing: 1em;
					text-indent: 1em;
					border-radius: 39rpx;
					box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
				}
				&__tips {
					margin: 30rpx 0;
					color: #AAAAAA;
				}
			}
		}
		/* 登录注册信息 end */
		/* 登录方式切换 start */
		&__way {
			margin: 0 auto;
			margin-top: 110rpx;
			&__item {
				&--icon {
					width: 85rpx;
					height: 85rpx;
					font-size: 80rpx;
					// border-radius: 100rpx;
					margin-bottom: 18rpx;
					position: relative;
					z-index: 1;
					// &::after {
					//   content: " ";
					//   position: absolute;
					//   z-index: -1;
					//   width: 100%;
					//   height: 100%;
					//   left: 0;
					//   bottom: 0;
					//   border-radius: inherit;
					//   opacity: 1;
					//   transform: scale(1, 1);
					//   background-size: 100% 100%;
					//   background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
					// }
				}
			}
		}
		/* 登录方式切换 end */
		/* 内容 end */
	}
	/deep/.input-placeholder {
		font-size: 24rpx;
		color: #838383;
	}
	.login__info__item__button:hover {
		background: #5e76ff;
	}
</style>
