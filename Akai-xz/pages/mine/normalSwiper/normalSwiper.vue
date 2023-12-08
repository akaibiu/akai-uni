<template>
	<view class="template-order">
		<!-- 顶部标签 -->
		<view class="tn-bg-white">
			<tn-tabs-swiper class="order__tabs" ref="tabs" activeColor="#3165CC" inactiveColor="#080808"
				:list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs-swiper>
		</view>
		
		<!-- 标签内容 -->
		<swiper class="order__swiper" :style="{top: `44px`, height: `${swiperHeight}px`}" :current="swiperIndex"
			@transition="swiperTransition" @animationfinish="swiperAnimationFinish">
			<swiper-item class="order__swiper__item">
				<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						经理审批意见:
					<view class="tn-padding-bottom"></view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="order__swiper__item">
				<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
					经理审批意见2:
					<view class="tn-padding-bottom"></view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="order__swiper__item">
				<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
					经理审批意见3
					<view class="tn-padding-bottom"></view>
				</scroll-view>
			</swiper-item>
		
		</swiper>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				list: [{
						name: '酒店',
					},
					{
						name: '餐饮'
					},
					{
						name: '票务',
					}
				],
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
			}
		},
		onLoad() {

		},
		onReady() {
			this.$nextTick(() => {
				this.updateSwiperInfo()
			})
		},
		methods: {
			// 计算可滑动区域的高度信息
			updateSwiperInfo() {
				// 获取可滑动菜单的信息
				this._tGetRect('.order__tabs').then(res => {
					if (!res) {
						setTimeout(() => {
							this.updateSwiperInfo()
						}, 10)
						return
					}
					const systemInfo = uni.getSystemInfoSync()
					this.swiperTop = res.bottom - this.vuex_custom_bar_height
					this.swiperHeight = systemInfo.safeArea.height - res.bottom + systemInfo.statusBarHeight
				})
			},
			// Swiper Tab Change
			tabsChange(index) {
				this.swiperIndex = index
			},
			// swiper-item position change
			swiperTransition(event) {
				this.$refs.tabs.setDx(event.detail.dx)
			},
			// swiper animation end
			swiperAnimationFinish(event) {
				const current = event.detail.current
				this.$refs.tabs.setFinishCurrent(current)
				this.swiperIndex = current
				this.tabsIndex = current
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tn-padding-bottom {
		margin-top: 30rpx;
		padding-bottom: 160rpx;
	}
	.order {
		&--wrap {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}
		/* 导航栏 start */
		&__tabs {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: inherit;
		}
		/* 导航栏 end */
		/* swiper start */
		&__swiper {
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
			// padding: 0 16rpx;
		}
		/* swiper end */
		/* 订单内容 start */
		&__item {
			margin: 20rpx;
			padding: 36rpx 26rpx;
			background-color: #FFFFFF;
			border-radius: 18rpx;
			&:last-child {
				margin-bottom: 120rpx;
			}
		}
		/* 订单内容 end */
	}
</style>
