<template>
	<view class="upload-img" :style="{
			width: width + 'rpx',
			height: height + 'rpx',
			'background-image': 'url(' + bgsrc + ')'
		}" @tap="handleAddNewImage">
		<image class="cover" :src="currentImage" mode="aspectFill"></image>
		<view class="plusicon">
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 64
			},
			height: {
				type: Number,
				default: 64
			},
			bgsrc: {
				type: String
			}
		},
		data() {
			return {
				currentImage: '',
				choosed: false
			};
		},
		methods: {
			handleAddNewImage() {
				const _that = this;
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['compressed'],
					success(res) {
						_that.currentImage = res.tempFilePaths[0];
						_that.choosed = true;
						_that.$emit('chooseimg', {
							src: _that.currentImage
						});
					}
				});
			}
		}
	};
</script>

<style lang="scss">
	@font-face {
		font-family: "iconfont";
		src:
			url('data:application/octet-stream;base64,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') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-plus:before {
		content: "\e8fe";
	}

	.upload-img {
		width: 64rpx !important;
		height: 64rpx !important;
		position: relative;
		background-size: 64rpx 64rpx!important;
		-webkit-background-size: 64rpx 64rpx !important;
		border-radius: 50% !important;

		.cover {
			display: inline-block;
			width: 64rpx;
			height: 64rpx;
			border-radius: 50% !important;
		}

		.plusicon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
