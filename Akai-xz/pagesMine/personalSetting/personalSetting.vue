<template>
	<skeleton  :avatar="top"  avatarAlign="left" :row="6" animate="true" :loading="loading">
		<view class="container">
			<view class="ui-all">
				<view class="avatar" @tap="avatarChoose">
					<view class="imgAvatar">
						<view class="iavatar" :style="'background: url('+avater+') no-repeat center/cover #eeeeee;'">
						</view>
					</view>
					<text>修改头像</text>
				</view>
				<view class="ui-list">
					<text>昵称</text>
					<input type="text" fixed="true" auto-height="true" :placeholder="value" :value="nickName"
						@input="bindnickName" placeholder-class="place" />
				</view>
				<view class="ui-list">
					<text>手机号</text>
					<input v-if="mobile" fixed="true" auto-height="true" type="tel" :placeholder="value" :value="mobile"
						@input="bindmobile" placeholder-class="place" />
				</view>
				<view class="ui-list right">
					<text>性别</text>
					<picker @change="bindPickerChange" mode='selector' range-key="name" :value="index" :range="sex">
						<view class="picker">
							{{sex[index].name}}
						</view>
					</picker>
				</view>
				<view class="ui-list right">
					<text>常住地</text>
					<picker @change="bindRegionChange" mode='region'>
						<view class="picker">
							{{region[0]}} {{region[1]}} {{region[2]}}
						</view>
					</picker>
				</view>
				<view class="ui-list right">
					<text>生日</text>
					<picker mode="date" :value="date" @change="bindDateChange">
						<view class="picker">
							{{date}}
						</view>
					</picker>
				</view>
				<view class="ui-list">
					<text>签名</text>
					<textarea :placeholder="value" placeholder-class="place" :value="description"
						@input="binddescription"></textarea>
				</view>
				<button class="save" @tap="savaInfo">保 存 修 改</button>
			</view>
		</view>
	</skeleton>
</template>

<script>
	export default {
		data() {
			return {
				loading:true,
				value: '请填写',
				sex: [{id: 0,name: '男'}, {id: 1,name: '女'}],
				index:1,
				region: ['请填写', '', ''],
				date: '请填写',
				avater:'https://img1.baidu.com/it/u=554356530,611890499&fm=253&fmt=auto&app=138&f=PNG?w=500&h=498',  // 初始化获取本地缓存头像 选取头像后切换地址
				description: '简单介绍一下自己叭!',
				nickName:'小周要快乐!',
				mobile:17738531107,
				headimg: '',   // 上传到数据库的图片地址
				url:'请求接口地址'
			}
		},
		methods: {
			// 性别
			bindPickerChange(e) {
				this.index = e.detail.value;
			},
			// 常住地
			bindRegionChange(e) {
				this.region = e.detail.value;
			},
			// 生日
			bindDateChange(e) {
				this.date = e.detail.value;
			},
			// 昵称
			bindnickName(e) {
				this.nickName = e.detail.value;
			},
			// 手机号
			bindmobile(e) {
				this.mobile = e.detail.value;
			},
			// 描述
			binddescription(e) {
				this.description = e.detail.value;
			},
			// 选取头像
			avatarChoose() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						console.log(res,'图片获取')
						// tempFilePath可以作为img标签的src属性显示图片
						that.avater = res.tempFilePaths[0]; // 后期注释
						that.imgUpload(res.tempFilePaths);
						const tempFilePaths = res.tempFilePaths;
					}
				});
			},
			savaInfo() {
				let that = this;
				let nickname = that.nickName;
				let headimg = that.headimg;
				let gender = that.index + 1;
				let mobile = that.mobile;
				let region = that.region;
				let birthday = that.date;
				let description = that.description;
				let updata = {};
				if (!nickname) {
					uni.showToast({
						title: '请填写昵称',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				updata.nickname = nickname;
				if (!headimg) {
					headimg = that.avater;
				}
				updata.headimg = headimg;
				updata.gender = gender;
				if (that.isPoneAvailable(mobile)) {
					updata.mobile = mobile;
				} else {
					uni.showToast({
						title: '手机号码有误，请重填',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (region.length == 1) {
					uni.showToast({
						title: '请选择常住地',
						icon: 'none',
						duration: 2000
					});
					return;
				} else {
					updata.province = region[0];
					updata.city = region[1];
					updata.area = region[2];
				}
				if (birthday == "0000-00-00") {
					uni.showToast({
						title: '请选择生日',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				updata.birthday = birthday;
				updata.description = description;
				that.updata(updata);
			},
			isPoneAvailable(poneInput) {
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(poneInput)) {
					return false;
				} else {
					return true;
				}
			},
			async updata(datas) {
				//传后台

			},
			// 图片上传到后台服务器
			imgUpload(file) {
				let that = this;
				uni.uploadFile({
					header: {
						Authorization: uni.getStorageSync('token')
					},
					url: that.url + '/api/upload/image', //需传后台图片上传接口
					filePath: file[0],
					name: 'file',
					formData: {
						type: 'user_headimg'
					},
					success: function(res) {
						var data = JSON.parse(res.data);
						data = data.data;
						that.avater = that.url + data.img;
						that.headimg = that.url + data.img;
					},
					fail: function(error) {
						console.log(error);
					}
				});
			},
		},
	}
</script>

<style lang="scss">
	.container {
		display: block;
	}

	.ui-all {
		padding: 20rpx 40rpx;

		.avatar {
			width: 100%;
			text-align: left;
			padding: 20rpx 0;
			border-bottom: solid 1px #f2f2f2;
			position: relative;

			.imgAvatar {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				display: inline-block;
				vertical-align: middle;
				overflow: hidden;

				.iavatar {
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			text {
				display: inline-block;
				vertical-align: middle;
				color: #8e8e93;
				font-size: 28rpx;
				margin-left: 40rpx;
			}

			&:after {
				content: ' ';
				width: 20rpx;
				height: 20rpx;
				border-top: solid 1px #030303;
				border-right: solid 1px #030303;
				transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				/* IE 9 */
				-moz-transform: rotate(45deg);
				/* Firefox */
				-webkit-transform: rotate(45deg);
				/* Safari 和 Chrome */
				-o-transform: rotate(45deg);
				position: absolute;
				top: 85rpx;
				right: 0;
			}
		}

		.ui-list {
			width: 100%;
			text-align: left;
			line-height: 70rpx;
			border-bottom: solid 1px #f2f2f2;
			position: relative;
			text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}

			input {
				color: #030303;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
			}

			button {
				color: #030303;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
				background: none;
				margin: 0;
				padding: 0;

				&::after {
					display: none;
				}
			}

			picker {
				width: 90%;
				color: #030303;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 0rpx;
				left: 150rpx;
			}

			textarea {
				color: #030303;
				font-size: 30rpx;
				vertical-align: middle;
				height: 150rpx;
				width: 100%;
				margin-top: 50rpx;
			}

			.place {
				color: #999999;
				font-size: 28rpx;
			}
		}

		.right:after {
			content: ' ';
			width: 20rpx;
			height: 20rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			/* IE 9 */
			-moz-transform: rotate(45deg);
			/* Firefox */
			-webkit-transform: rotate(45deg);
			/* Safari 和 Chrome */
			-o-transform: rotate(45deg);
			position: absolute;
			top: 40rpx;
			right: 0;
		}

		.save {
			background: #7fd97b;
			border: none;
			color: #ffffff;
			margin-top: 40rpx;
			font-size: 28rpx;
		}
	}
</style>
