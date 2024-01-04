<template>
	<view class="container">
		<view class="form">
			<view class="titleBox">
				<input type="text" v-model="form.title" placeholder="填写标题更容易出售闲置哦~">
			</view>
			<view class="content">
				<textarea name="" v-model="form.content" id="" cols="30" rows="80" placeholder="添加正文内容~"></textarea>
			</view>
		</view>
		<view class="card">
			<view class="title">
				添加图片
			</view>
			<text>图片上传组件</text>
			<view class="title">
				出售价格<text>/元</text>
			</view>
			<input type="digit" maxlength="10" @input="validateNumber"
				placeholder-style="font-size:24rpx;font-weight:normal;" v-model="form.price" placeholder="请输入您要出售的价格~">
			<view class="title">
				商品标签
			</view>
			<view class="badgeBox">
				<view :class="['item', { active: item.selected }]" v-for="(item,index) in badgeList" :key="index"
					@click="checkBadge(item,index)">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="releaseBtn" @click="startRelease">
			+发布
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					title: null, // 标题
					content: null, // 内容
					price: null, // 价格
					checkList: [], // 当前选中的标签
				},
				badgeList: [{
						name: '校内交易',
						id: '0',
						isSelected: false
					},
					{
						name: '运费自理',
						id: '1',
						isSelected: false
					},
					{
						name: '校内交易',
						id: '2',
						isSelected: false
					},
					{
						name: '不议价',
						id: '3',
						isSelected: false
					},
					{
						name: '包邮',
						id: '4',
						isSelected: false
					},
				]
			}
		},
		onLoad() {

		},

		methods: {
			// 选择标签
			checkBadge(item, index) {
				item.selected = !item.selected;
				if (item.selected) {
					this.form.checkList.push(item);
				} else {
					const index = this.form.checkList.findIndex(item => item.id === item.id);
					if (index !== -1) {
						this.form.checkList.splice(index, 1);
					}
				}
			},
			// 开始发布
			startRelease() {
				console.log(this.form, 'form');
			},
			// 验证
			validateNumber() {
				// 使用正则表达式验证输入是否为数字且最多两位小数
				const regex = /^\d+(\.\d{0,2})?$/;
				if (!regex.test(this.form.price)) {
					uni.showToast({
						title:'最多只能输入两位小数哦~',
						icon:'none',
						duration:1500
					})
					this.form.price = '';
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
	input, textarea {
		font-size: 24rpx;
		color: #333;
		width: 100%;
		height: 100%;
		outline: none;
	}
	input::placeholder {
		color: #bebebe !important;
	}
	.container {
		height: 100%;
		width: 100%;
		font-family: PingFangSC-Semibold, PingFang SC;
		padding: 20rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		// overflow: hidden !important;
		background: #eceff5;
		color: #333;
		padding-bottom: 60rpx;
		overflow-y: scroll !important;
		.form {
			padding: 20rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 12rpx;
			.titleBox {
				width: 100%;
				height: 76rpx;
				border-bottom: 1rpx solid #bebebe;
				.dflex();
				justify-content: flex-start;
				input {
					padding-left: 20rpx;
					box-sizing: border-box;
					font-size: 26rpx;
					letter-spacing: 2rpx;
					&::placeholder {
						color: #919191;
					}
				}
			}
			.content {
				padding: 10rpx;
				box-sizing: border-box;
				width: 100%;
				height: 300rpx;
				border-bottom: 1rpx solid #bebebe;
				margin-top: 20rpx;
				textarea {
					font-size: 24rpx;
				}
			}
		}
		.card {
			margin: 30rpx 0rpx;
			padding: 30rpx 20rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 12rpx;
			.title {
				padding: 20rpx 10rpx;
				box-sizing: border-box;
				font-size: 26rpx;
				font-weight: bolder;
				text {
					font-size: 22rpx;
				}
			}
			input {
				height: 70rpx;
				width: 100%;
				border: 4rpx solid #6d9ff0;
				font-size: 28rpx;
				font-weight: bolder !important;
				padding-left: 20rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
				letter-spacing: 3rpx;
			}
			.badgeBox {
				padding: 6rpx 0rpx;
				box-sizing: border-box;
				width: 100%;
				.dflex();
				flex-wrap: wrap;
				justify-content: flex-start;
				.item {
					padding: 12rpx 18rpx;
					box-sizing: border-box;
					border-radius: 10rpx;
					background: #edeef5;
					margin-right: 20rpx;
					max-width: 150rpx;
					font-size: 24rpx;
					margin-bottom: 20rpx;
					&:nth-child(5) {
						margin-right: 0 !important;
					}
					&.active {
						background: #007aff;
						color: #fff;
					}
				}
			}
		}
		.releaseBtn {
			height: 66rpx;
			margin: 50rpx 10% 30rpx 10%;
			width: 80%;
			border-radius: 40rpx;
			background-color: #007aff;
			.dflex();
			font-size: 26rpx;
			letter-spacing: 4rpx;
			color: #fff;
		}
	}
</style>
