<template>
	<view class="container">
		<view class="brand">
			<image :src="userInfo.avatarUrl?userInfo.avatarUrl:'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'" class="avatar" @click="infoOperation"></image>
			<view class="username">{{userInfo.nickName||'周淑怡'}}</view>
		</view>
		<view class="user-form">
			<view class="itemWrap">
				<view class="form-item">
					<view class="label">昵称</view>
					<input type="text" placeholder="周淑怡" v-model="userInfo.nickName" />
				</view>
			</view>
			<view class="itemWrap">
				<view class="form-item">
					<view class="label">手机号码</view>
					<input type="text" placeholder="您尚未进行手机号授权" v-model="userInfo.phone" />
				</view>
			</view>
			<view class="itemWrap" v-if="headerSexFlag">
				<view class="form-item">
					<view class="label">性别</view>
					<view class="radio" @tap="userInfo.gender = !userInfo.gender">
						<image
							:src="!userInfo.gender ? '/static/mine/gouxuankuang.png' : '/static/mine/round-black-selected.png'">
						</image>
						<view>男</view>
					</view>
					<view class="radio" @tap="userInfo.gender = !userInfo.gender">
						<image
							:src="userInfo.gender ? '/static/mine/gouxuankuang.png' : '/static/mine/round-black-selected.png'">
						</image>
						<view>女</view>
					</view>
				</view>
			</view>
			<view class="itemWrap" v-if="headerSexFlag">
				<view class="form-item">
					<view class="label">生日</view>
					<picker class="flex-fill" mode="date" :value="userInfo.birthday" @change="handleBirthdayChange">
						<view>{{ userInfo.birthday }}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="save-btn">
			<tn-button shape="round" backgroundColor="#007aff" :countDownText="s" :blockRepeatClick="true"
				fontColor="#FFFFFF" width="100%" @click="saveInfo">保存</tn-button>
		</view>
		<tn-action-sheet v-model="actionShow" :list="actionList" @click="checkOperation"></tn-action-sheet>
	</view>
</template>

<script>
	import {modifyUserInfoApi,headerImageUploadApi} from '@/apis/user.js';  // 引入封装的api接口功能函数
	import config from '@/config/config.js'; // 获取配置信息
	export default {
		data() {
			return {
				userInfo: null,
				headerSexFlag: true, // birthday flag
				actionShow: false,
				actionList: [{
					text: '更换头像'
				}, {
					text: '查看头像'
				}],
			}
		},
		onShow() {
			let that = this;
			uni.getStorageSync('userInfo') ? that.userInfo = JSON.parse(uni.getStorageSync('userInfo')) : that.userInfo = {gender: 0};
			that.$set(that.userInfo, 'birthday', '1999-10-30'); // 给小周设置一下她的生日!
		},
		methods: {
			infoOperation() {
				let that = this;
				that.actionShow = true;
			},
			handleBirthdayChange({target: {value}}) {
				this.userInfo.birthday = value;
			},
			// 接口请求示例
			saveInfo() {
				let that = this;
				modifyUserInfoApi(that.userInfo).then(res => {
					switch (res.code) {
						case 200:
							that.tool.toastTip('修改信息成功!!', 'none', 1000); // 功能库封装
							break;
						case 200:
							break;
						default:
							that.tool.toastTip(res.msg, 'none', 1000);
							break;
					}
				})
			},
			// 选择操作
			checkOperation(index) {
				let that = this;
				switch (index) {
					case 0:
						uni.chooseImage({
							count: 1, // 默认9
							sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
							success: res => {
								const {tempFilePaths} = res;
								const param = {
									name: 'avatarfile',
									avatarfile: tempFilePaths[0]
								};
								that.tool.toastTip("上传成功")
								that.userInfo.avatarUrl = param.avatarfile;
								console.log(that.userInfo.avatarUrl,'头像地址----------------------------------------------');
								// 图片上传接口示例(换成自己的API以下都为接口请求)
								// headerImageUploadApi(param).then(res => {
								// 	switch (res.code) {
								// 		case 200:
								// 			that.tool.toastTip('头像上传成功!', 'none', 1000);
								// 			that.userInfo.avatarUrl = res.imgUrl;
								// 			break;
								// 		default:
								// 			that.tool.toastTip(res.msg, 'none', 1000);
								// 			break;
								// 	}
								// }).catch(err => {
								// 	that.tool.toastTip('获取用户信息出错,请稍后重试!', 'none', 1000)
								// });
							},
							fail: err => {
								that.tool.toastTip('图片上传失败,请稍后重试!', 'none', 1000)
							}
						});
						break;
					case 1:
						uni.previewImage({
							urls: ['https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'],
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) +'张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						});
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.login__info__item__button {
		height: 50rpx;
		padding: 10rpx 20rpx;
		font-size: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		letter-spacing: 0rpx !important;
		background: transparent !important;
		color: #2aa3ff !important;
		border: 1rpx solid #2aa3ff !important;
	}
	.brand {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx 0;
		margin-bottom: 20rpx;
		.avatar {
			width: 200rpx;
			height: 200rpx;
			border-radius: 100%;
			margin-bottom: 30rpx;
			border: 1rpx solid #f3f3f3;
		}
		.username {
			color: 28rpx;
			font-weight: bold;
		}
	}
	.user-form {
		padding: 0rpx 30rpx;
		box-sizing: border-box;
		.itemWrap {
			padding: 30rpx 26rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #c8c7cc;
			&:last-child {
				border-bottom: none;
			}
		}
		.form-item {
			width: 100%;
			display: flex;
			align-items: center;
			min-height: 60rpx;
			button[type='default'] {
				color: #666 !important;
				border: 2rpx solid #ccc !important;
				background-color: #ffffff;
			}
			.label {
				width: 160rpx;
			}
			input {
				flex: 1;
			}
			.radio {
				display: flex;
				margin-right: 50rpx;
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
	.save-btn {
		padding: 0 70rpx;
		margin-top: 60rpx;
	}
</style>
