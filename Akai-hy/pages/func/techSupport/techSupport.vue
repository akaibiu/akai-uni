<template>
	<view id="container">
		<view class="firework-grp">
			<view class="firework pos1 ">
				<view class="drops-grp">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
				<view class="drops-grp drops-grp2">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
			</view>
			<view class="firework pos2 delay1">
				<view class="drops-grp">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
				<view class="drops-grp drops-grp2">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
			</view>
			<view class="firework pos3 delay2">
				<view class="drops-grp">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
				<view class="drops-grp drops-grp2">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
			</view>
			<view class="firework pos4 ">
				<view class="drops-grp">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
				<view class="drops-grp drops-grp2">
					<text class="drop drop-1"></text>
					<text class="drop drop-2"></text>
					<text class="drop drop-3"></text>
					<text class="drop drop-4"></text>
				</view>
			</view>
		</view>
		<view class="tip">
			<view class="title">
				Life is a fucking movie
			</view>
			<view class="smallTitle">
				<view class="name" @click="copyK('Akaibiu')">Wechat:<view class="wechat">Akaibiu</view>
				</view>
				<view class="name" @click="phoneK('17738531107')">Wechat:<view class="wechat">17738531107</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			copyK(e) {
				uni.setClipboardData({
					data: String(e),
					success: () => {
						this.tool.toastTip('微信账号复制成功!', 'none', 1500);
					}
				});
			},
			phoneK(e) {
				let that = this;
				const res = uni.getSystemInfoSync();
				// ios系统默认有个模态框
				if (res.platform == 'ios') {
					uni.makePhoneCall({
						phoneNumber: e,
						success() {
							console.log('拨打成功了');
						},
						fail() {
							console.log('拨打失败了');
						}
					})
				} else {
					//安卓手机手动设置一个showActionSheet
					uni.showActionSheet({
						itemList: [e, '呼叫'],
						success: function(res) {
							console.log(res);
							if (res.tapIndex == 1) {
								uni.makePhoneCall({
									phoneNumber: e,
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style>
	html, body {
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		position: relative;
		width: 100%;
		height: 100%;
	}
	#container {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
	}
	.tip {
		width: 90%;
		padding: 30rpx;
		box-sizing: border-box;
		position: fixed;
		top: 60%;
		left: 5%;
	}
	.tip>.title {
		font-size: 38rpx;
		font-weight: bold;
		color: #9e9e9e;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		align-items: center;
		padding: 40rpx 0rpx;
		font-family: '楷体';
	}
	.tip>.smallTitle {
		display: flex;
		flex-direction: column;
	}
	.tip>.smallTitle>.name {
		display: flex;
		width: 300rpx;
		justify-content: flex-start;
		margin-left: 15%;
		align-items: center;
		padding: 20rpx 0rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		color: #9e9e9e;
	}
	.wechat {
		color: #9e9e9e;
		color: #ffaf75;
		font-size: 36rpx;
		margin-left: 20rpx;
	}
	.firework-grp {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.firework {
		font-size: 10px;
		display: block;
		width: 8.5em;
		height: 8.5em;
		position: absolute;
	}
	/*位置，颜色，大小都可调*/
	.pos1 {
		left: 10%;
		top: 5%;
		color: #F44336;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
	}
	.pos2 {
		left: 65%;
		top: 10%;
		color: #FFC107;
		-webkit-transform: scale(0.6);
		transform: scale(0.6);
	}
	.pos3 {
		left: 60%;
		top: 35%;
		color: #F44336;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
	}
	.pos4 {
		left: 15%;
		top: 30%;
		color: #FFC107;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	/*烟花*/
	.drops-grp {
		display: block;
		width: 8.5em;
		height: 8.5em;
		position: absolute;
	}
	.drops-grp2 {
		display: block;
		width: 8.5em;
		height: 8.5em;
		position: absolute;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.drop {
		display: block;
		width: 1em;
		height: 2em;
		overflow: hidden;
		position: absolute;
		opacity: 0;
	}
	.drop:before {
		content: "";
		display: block;
		width: 1em;
		height: 1em;
		background: currentColor;
		border-radius: 50%;
	}
	.drop:after {
		content: "";
		display: block;
		position: relative;
		top: -0.4em;
		width: 0;
		height: 0;
		border-top: 1.4em solid currentColor;
		border-left: 0.5em solid transparent;
		border-right: 0.5em solid transparent;
	}
	/*烟花绽放的速度，次数，方式也可以调节*/
	.drop-1 {
		left: 3.75em;
		top: 0;
		-webkit-animation: drop1anim 1.5s ease-in-out infinite;
		animation: drop1anim 1.5s ease-in-out infinite;
	}
	.drop-2 {
		top: 3.25em;
		right: 0;
		-webkit-animation: drop2anim 1.5s ease-in-out infinite;
		animation: drop2anim 1.5s ease-in-out infinite;
	}
	.drop-3 {
		left: 3.75em;
		bottom: 0;
		-webkit-animation: drop3anim 1.5s ease-in-out infinite;
		animation: drop3anim 1.5s ease-in-out infinite;
	}
	.drop-4 {
		top: 3.25em;
		left: 0;
		-webkit-animation: drop4anim 1.5s ease-in-out infinite;
		animation: drop4anim 1.5s ease-in-out infinite;
	}
	/*延迟时间*/
	.delay1 .drop {
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s
	}
	.delay2 .drop {
		-webkit-animation-delay: 1s;
		animation-delay: 1s
	}
	/*动画*/
	@-webkit-keyframes drop1anim {
		0% {
			top: 3.25em;
			opacity: 0;
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1);
		}
		100% {
			top: -0.75em;
			opacity: 0;
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
		}
	}
	@keyframes drop1anim {
		0% {
			top: 3.25em;
			opacity: 0;
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1);
		}
		100% {
			top: -0.75em;
			opacity: 0;
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
		}
	}
	@-webkit-keyframes drop2anim {
		0% {
			right: 3.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(90deg);
			transform: scale(0.3) rotate(90deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(90deg);
			transform: scale(1) rotate(90deg);
		}
		100% {
			right: -0.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(90deg);
			transform: scale(0.3) rotate(90deg);
		}
	}
	@keyframes drop2anim {
		0% {
			right: 3.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(90deg);
			transform: scale(0.3) rotate(90deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(90deg);
			transform: scale(1) rotate(90deg);
		}
		100% {
			right: -0.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(90deg);
			transform: scale(0.3) rotate(90deg);
		}
	}
	@-webkit-keyframes drop3anim {
		0% {
			bottom: 3.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(180deg);
			transform: scale(0.3) rotate(180deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(180deg);
			transform: scale(1) rotate(180deg);
		}
		100% {
			bottom: -0.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(180deg);
			transform: scale(0.3) rotate(180deg);
		}
	}
	@keyframes drop3anim {
		0% {
			bottom: 3.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(180deg);
			transform: scale(0.3) rotate(180deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(180deg);
			transform: scale(1) rotate(180deg);
		}
		100% {
			bottom: -0.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(180deg);
			transform: scale(0.3) rotate(180deg);
		}
	}
	@-webkit-keyframes drop4anim {
		0% {
			left: 3.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(-90deg);
			transform: scale(0.3) rotate(-90deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(-90deg);
			transform: scale(1) rotate(-90deg);
		}
		100% {
			left: -0.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(-90deg);
			transform: scale(0.3) rotate(-90deg);
		}
	}
	@keyframes drop4anim {
		0% {
			left: 3.75em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(-90deg);
			transform: scale(0.3) rotate(-90deg);
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1) rotate(-90deg);
			transform: scale(1) rotate(-90deg);
		}
		100% {
			left: -0.25em;
			opacity: 0;
			-webkit-transform: scale(0.3) rotate(-90deg);
			transform: scale(0.3) rotate(-90deg);
		}
	}
</style>
