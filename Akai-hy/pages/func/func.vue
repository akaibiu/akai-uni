<template>
	<view class="container">
		<view class="title animate__animated animate__heartBeat">
			animation动画示例
		</view>
		<view class="title animate__animated animate__heartBeat">
			下面所有案例仅为参考 作者审美水平有限 需自己美化样式
		</view>
		<u-cell-group>
			<u-cell icon="setting-fill" title="简单卡片" :isLink="true" arrow-direction="right" @click="goCard"></u-cell>
			<u-cell icon="setting-fill" title="完美布局" :isLink="true" arrow-direction="right" @click="goFlex"></u-cell>
			<u-cell icon="setting-fill" title="个人设置" :isLink="true" arrow-direction="right" @click="goInfo"></u-cell>
			<u-cell icon="setting-fill" title="记录列表" :isLink="true" arrow-direction="right" @click="goRecords"></u-cell>
			<u-cell icon="setting-fill" title="刷新加载" :isLink="true" arrow-direction="right" @click="goRefresh"></u-cell>
			<u-cell icon="setting-fill" title="全屏轮播" :isLink="true" arrow-direction="right" @click="goSwiperTab">
			</u-cell>
			<u-cell icon="setting-fill" title="技术支持" :isLink="true" arrow-direction="right" @click="goTech"></u-cell>
			<u-cell icon="setting-fill" title="滚动示例" :isLink="true" arrow-direction="right" @click="goScorollX">
			</u-cell>
			<u-cell icon="setting-fill" title="上下滚动" :isLink="true" arrow-direction="right" @click="goScorollY">
			</u-cell>
			<u-cell icon="setting-fill" title="搜索导航" :isLink="true" arrow-direction="right" @click="goSearchNav">
			</u-cell>
			<u-cell icon="setting-fill" title="提醒输入" :isLink="true" arrow-direction="right" @click="goShake"></u-cell>
			<u-cell icon="setting-fill" title="梯形选项" :isLink="true" arrow-direction="right" @click="goLadder"></u-cell>
			<u-cell icon="setting-fill" title="半圆案例" :isLink="true" arrow-direction="right" @click="goCircle"></u-cell>
			<u-cell icon="setting-fill" title="梯形选项" :isLink="true" arrow-direction="right" @click="goCircleTwo"></u-cell>
			<u-cell icon="setting-fill" title="打开登录" :isLink="true" arrow-direction="right" @click="showdate=true"></u-cell>
			<u-cell icon="setting-fill" title="积分签到" :isLink="true" arrow-direction="right" @click="goSignIn"></u-cell>
			<u-cell icon="setting-fill" title="lodash" :isLink="true" arrow-direction="right" @click="goLodash">
			</u-cell>
		</u-cell-group>
		<OpendateWindow v-model="showdate" @send="getSonValue"></OpendateWindow>
	</view>
</template>

<script>
	import OpendateWindow from '@/components/opendate-Window/opendate-Window.vue'
	export default {
		components: {
			OpendateWindow
		},
		data() {
			return {
				showdate: false,
			}
		},
		onShow() {
			console.log(this.vuex_frenidList,'vuex_frenidList');
		},
		created() {

		},
		methods: {
			// 积分签到
			goSignIn(){
				uni.navigateTo({
					url:'/pages/func/sign/sign'
				})
			},
			// 登录
			getSonValue(res) {
				this.userinfo = res;
				this.showdate = false;
				console.log('获取用户', this.userinfo)
			},
			goLodash() {
				uni.navigateTo({
					url: '/pages/func/lodash/lodash'
				})
			},
			goCard() {
				uni.navigateTo({
					url: '/pages/func/card/card'
				})
			},
			goFlex() {
				uni.navigateTo({
					url:'/pages/func/Flex/Flex'
				})
			},
			goInfo() {
				uni.navigateTo({
					url: 'personalSetting/personalSetting'
				})
			},
			goRecords() {
				uni.navigateTo({
					url: '/pages/func/records/records'
				})
			},
			goRefresh() {
				uni.navigateTo({
					url: '/pages/func/refresh/refresh'
				})
			},
			goSwiperTab() {
				uni.navigateTo({
					url: '/pages/func/swiperTab/swiperTab'
				})
			},
			goTech() {
				uni.navigateTo({
					url: '/pages/func/techSupport/techSupport'
				})
			},
			goScorollX() {
				uni.navigateTo({
					url: '/pages/func/scrollBox/scrollBox'
				})
			},
			goScorollY() {
				uni.navigateTo({
					url: '/pages/func/music/music'
				})
			},
			goSearchNav() {
				uni.navigateTo({
					url: 'searchNav/searchNav'
				})
			},
			goShake() {
				uni.navigateTo({
					url: '/pages/func/shakeINput/shakeINput'
				})
			},
			goLadder() {
				uni.navigateTo({
					url: '/pages/func/ladderShape/ladderShape'
				})
			},
			goCircleTwo(){
				uni.navigateTo({
					url:'/pages/func/ladderShapeTwo/ladderShapeTwo'
				})
			},
			goCircle() {
				uni.navigateTo({
					url: '/pages/func/halfCircle/halfCircle'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 动画执行
	.animate__heartBeat {
		animation-duration: 3000;
		animation-iteration-count: infinite;
	}
	.container {
		width: 100%;
		height: 100%;
		.title {
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
