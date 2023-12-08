<template>
	<view class="template-order">
		<view class="topTotal" style="width: 100%;height: 400rpx;">
			<view class="titleTip">
				交易概况
			</view>
			<view class="smallTip" @tap="showTip">
				 今日交易统计<text class="tn-icon-help" style="color: #8595c8;margin: 0rpx 0rpx 0rpx 10rpx;"></text>
			</view>
			<tn-tabs :list="tabList" activeColor="#8595c8" :isScroll="false" :current="tabCurrent" name="name" @change="changeTopTab"></tn-tabs>
			<view class="wrap" v-if="tabCurrent==0">
				<view class="left">
					<view class="tip">
						{{totalDataList[tabCurrent].info}}
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].count}}
					</view>
				</view>
				<view class="right">
					<view class="tip">
						较上月
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].percent}}
					</view>
				</view>
			</view>
			<view class="wrap" v-if="tabCurrent==1">
				<view class="left">
					<view class="tip">
						{{totalDataList[tabCurrent].info}}
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].count}}
					</view>
				</view>
				<view class="right">
					<view class="tip">
						较上月
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].percent}}
					</view>
				</view>
			</view>
			<view class="wrap" v-if="tabCurrent==2">
				<view class="left">
					<view class="tip">
						{{totalDataList[tabCurrent].info}}
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].count}}
					</view>
				</view>
				<view class="right">
					<view class="tip">
						较上月
					</view>
					<view class="data">
						{{totalDataList[tabCurrent].percent}}
					</view>
				</view>
			</view>
		</view>
		<view class="order--wrap" style="top: 400rpx">
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
						<view class="charts-box" v-if="chartsFlag">
							<qiun-data-charts type="column" :chartData="chartData" />
						</view>
						<view v-for="(item,index) in hotelRevenue" :key="index" class="tn-margin-top-xl"
							style="margin: 15rpx 30rpx;">
							<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
								style="background: linear-gradient(-120deg, #8895c5, #8595c8, #8a9dd4, #8a9ed9);height: 200rpx;border-radius: 10rpx;">

								<view class="tn-margin-left" style="width: 60%;">
									<view class='title' style="color: #F1C68E;">
										<text>{{item.label}}</text>
									</view>
									<view class='tn-color-white tn-text-sm tn-padding-top-sm'>{{item.info}}</view>
								</view>
								<view style="width: 32%;">
									<text class="tn-text-bold tn-text-xl"
										style="font-size: 36rpx;color: #F1C68E;margin-bottom: 40rpx;">{{item.profit.toFixed(2)}}</text><text
										style="font-size: 22rpx;color: #F1C68E;margin-left: 10rpx;">/{{' '+item.unit}}</text>
									<text class="tn-icon-vip-text tn-text-center"
										style="position: absolute;top:10rpx;right:30rpx; font-size: 60rpx;color: #F1C68E;"></text>
								</view>
								<!-- <view class="tn-margin-right">
									<tn-button shape="round" @click="goDataTable" backgroundColor="#F1C68E" fontColor="#634738" padding="10rpx 0"
										width="160rpx" shadow>
										<text class="tn-icon-vip tn-padding-right-sm tn-text-lg"></text>
										<text class="tn-text-bold">查 看</text>
									</tn-button>
								</view> -->
							</view>
						</view>
						<view class="approve" v-for="(xiaozhou,xiaoqiu) in 5" :key="xiaoqiu">
							<view class="top">
								<view class="name">
									经理审批意见:
								</view>
								<view class="opinion">
									{{hotelComment.evalute}}
								</view>
							</view>
							<view class="bottom">
								<view class="name">
									签字:
								</view>
								<view class="opinion">
									{{hotelComment.sign}}
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view class="charts-box" v-if="chartsFlag">
							<qiun-data-charts type="column" :chartData="chartData" />
						</view>
						<view v-for="(item,index) in restaurantRevenue" :key="index" class="tn-margin-top-xl"
							style="margin: 15rpx 30rpx;">
							<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
								style="background: linear-gradient(-120deg, #8895c5, #8595c8, #8a9dd4, #8a9ed9);height: 200rpx;border-radius: 10rpx;">

								<view class="tn-margin-left" style="width: 60%;">
									<view class='title' style="color: #F1C68E;">
										<text>{{item.label}}</text>
									</view>
									<view class='tn-color-white tn-text-sm tn-padding-top-sm'>{{item.info}}</view>
								</view>
								<view style="width: 32%;">
									<text class="tn-text-bold tn-text-xl"
										style="font-size: 36rpx;color: #F1C68E;margin-bottom: 40rpx;">{{item.profit.toFixed(2)}}</text><text
										style="font-size: 22rpx;color: #F1C68E;margin-left: 10rpx;">/{{' '+item.unit}}</text>
									<text class="tn-icon-vip-text tn-text-center"
										style="position: absolute;top:10rpx;right:30rpx; font-size: 60rpx;color: #F1C68E;"></text>
								</view>
								<!-- <view class="tn-margin-right">
									<tn-button shape="round" @click="goDataTable" backgroundColor="#F1C68E" fontColor="#634738" padding="10rpx 0"
										width="160rpx" shadow>
										<text class="tn-icon-vip tn-padding-right-sm tn-text-lg"></text>
										<text class="tn-text-bold">查 看</text>
									</tn-button>
								</view> -->
							</view>
						</view>
						<view class="approve">
							<view class="top">
								<view class="name">
									经理审批意见:
								</view>
								<view class="opinion">
									{{restaurantComment.evalute}}
								</view>
							</view>
							<view class="bottom">
								<view class="name">
									签字:
								</view>
								<view class="opinion">
									{{restaurantComment.sign}}
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view class="charts-box" v-if="chartsFlag">
							<qiun-data-charts type="column" :chartData="chartData" />
						</view>
						<view v-for="(item,index) in ticketingRevenue" :key="index" class="tn-margin-top-xl"
							style="margin: 15rpx 30rpx;">
							<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
								style="background: linear-gradient(-120deg, #8895c5, #8595c8, #8a9dd4, #8a9ed9);height: 200rpx;border-radius: 10rpx;">

								<view class="tn-margin-left" style="width: 60%;">
									<view class='title' style="color: #F1C68E;">
										<text>{{item.label}}</text>
									</view>
									<view class='tn-color-white tn-text-sm tn-padding-top-sm'>{{item.info}}</view>
								</view>
								<view style="width: 32%;">
									<text class="tn-text-bold tn-text-xl"
										style="font-size: 36rpx;color: #F1C68E;margin-bottom: 40rpx;">{{item.profit.toFixed(2)}}</text><text
										style="font-size: 22rpx;color: #F1C68E;margin-left: 10rpx;">/{{' '+item.unit}}</text>
									<text class="tn-icon-vip-text tn-text-center"
										style="position: absolute;top:10rpx;right:30rpx; font-size: 60rpx;color: #F1C68E;"></text>
								</view>
								<!-- <view class="tn-margin-right">
									<tn-button shape="round" @click="goDataTable" backgroundColor="#F1C68E" fontColor="#634738" padding="10rpx 0"
										width="160rpx" shadow>
										<text class="tn-icon-vip tn-padding-right-sm tn-text-lg"></text>
										<text class="tn-text-bold">查 看</text>
									</tn-button>
								</view> -->
							</view>
						</view>
						<view class="approve">
							<view class="top">
								<view class="name">
									经理审批意见:
								</view>
								<view class="opinion">
									{{ticketingComment.evalute}}
								</view>
							</view>
							<view class="bottom">
								<view class="name">
									签字:
								</view>
								<view class="opinion">
									{{ticketingComment.sign}}
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>


			</swiper>
		</view>

	</view>
</template>

<script>
	import templatePageMixin from '@/libs/mixin/template_page_mixin.js'

	export default {
		name: 'TemplateOrder',
		mixins: [templatePageMixin],
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
				tabList: [{
					name: '交易额'
				}, {
					name: '订单数量'
				}, {
					name: '用户体量',
				}],
				tabCurrent: 0,
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
				hotelRevenue: [{
						profit: 12.36,
						label: '去年营收:',
						unit: '万元',
						info: '去年营收整体呈平稳发展趋势,销量有待拓展提升!'
					},
					{
						profit: 12360,
						label: '今日营收:',
						unit: '元',
						info: '日销售额于今年5月20日再创新高，当日订单量3486笔!'
					},
					{
						profit: 22.00,
						label: '明年目标营收:',
						unit: '万元',
						info: '截止今日距离目标营收-4.65万元'
					},
				],
				totalDataList:[
					{percent:'12.66%',count:1266,info:'交易金额(元)'},
					{percent:'66.23%',count:5681,info:'订单总量(笔)'},
					{percent:'-6.57%',count:972,info:'用户体量(人)'},
				],
				hotelComment: {
					evalute: '今年酒店整体营收效益相比去年目前已提升3.5个百分点，日平均订单量每天相比去年增加150单，日销售额相比去年增加56000元，明年目标年营收220000，望不忘初心，砥砺前行!',
					sign: 'Akaiz',
				},
				restaurantRevenue: [{
						profit: 9.64,
						label: '去年营收:',
						unit: '万元',
						info: '去年营收整体呈平稳发展趋势,销量有待拓展提升!'
					},
					{
						profit: 16320,
						label: '今日营收:',
						unit: '元',
						info: '日销售额于今年5月20日再创新高，当日订单量3486笔!'
					},
					{
						profit: 35.00,
						label: '明年目标营收:',
						unit: '万元',
						info: '截止今日距离目标营收-4.65万元'
					},
				],
				restaurantComment: {
					evalute: '今年餐饮业务整体营收效益相比去年目前已提升4.5个百分点，受疫情影响日平均订单量每天相比去年减少46单，日销售额相比去年减少4250.00元，明年目标年营收150000，望不忘初心，再接再厉!',
					sign: 'ChenLei',
				},
				ticketingRevenue: [{
						profit: 14.65,
						label: '去年营收:',
						unit: '万元',
						info: '去年营收整体呈平稳发展趋势,销量有待拓展提升!'
					},
					{
						profit: 18650,
						label: '今日营收:',
						unit: '元',
						info: '日销售额于今年5月20日再创新高，当日订单量3486笔!'
					},
					{
						profit: 25.00,
						label: '明年目标营收:',
						unit: '万元',
						info: '截止今日距离目标营收-4.65万元'
					},
				],
				ticketingComment: {
					evalute: '今年票务整体营收效益相比去年目前已提升1.5个百分点，日平均订单量每天相比去年增加560单，日销售额相比去年增加96000元，明年目标年营收30000，望不忘初心，砥砺前行!',
					sign: 'XiaoZhou',
				},
				chartsFlag: false, // uCharts
				chartData: {}, // uCharts
				chartsDataRose2: {}, // uCharts
			}
		},
		onLoad() {

		},
		onReady() {
			this.getServerData(); // uCharts
			this.$nextTick(() => {
				this.updateSwiperInfo()
			})
		},
		methods: {
			// uCharts
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					let res = {
						categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
						series: [{
								name: "目标值",
								data: [35, 36, 31, 33, 13, 34]
							},
							{
								name: "完成量",
								data: [18, 27, 21, 24, 6, 28]
							}
						]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
			// Show Tip
			showTip() {
				this.tool.toastTip('点我干啥~','none',1000)
			},
			// Tab Switch
			changeTopTab(index){
				 this.tabCurrent = index;
			},
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
	// .template-order {
	// 	background-color: #f7f7f7;
	// }
	.tn-padding-bottom {
		margin-top: 30rpx;
		padding-bottom: 160rpx;
	}
	.topTotal {
		padding-top: 30rpx;
		.titleTip {
			width: 94%;
			margin-left: 3%;
			height: 30rpx;
			border-left: 4rpx solid #8595c8;
			text-indent: 14rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 28rpx;
			color: #e1c69c;
		}
		.smallTip {
			margin: 16rpx 0rpx 10rpx 60rpx;
			font-size: 24rpx;
			color: #5d80a1;
		}
		.wrap{
			padding: 30rpx 30rpx;
			width: 94%;
			margin-left: 3%;
			display: flex;
			align-items: center;
			min-height: 200rpx;
			background: #f8f8f8;
			.left,.right{
				width: 48%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				line-height: 46rpx;
				.data{
					font-size: 36rpx;
					color: #cfb690;
				}
				.tip{
					font-size: 24rpx;
					color: #5d80a1;
				}
			}
			.left{
				border-right: #5d80a1 solid 6rpx;
			}
		}
	}
	.approve {
		width: 90%;
		margin-left: 5%;
		padding: 30rpx 20rpx;
		box-sizing: border-box;
		.top, .bottom {
			line-height: 60rpx;
			padding-left: 10rpx;
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			align-items: flex-start;
			.name {
				font-size: 26rpx;
				color: #e1c69c;
			}
			.opinion {
				font-size: 24rpx;
				color: #5d80a1;
				text-indent: 50rpx;
			}
		}
		.bottom {
			.opinion {
				font-size: 36rpx;
				color: #5d80a1;
				margin-left: 60rpx;
			}
		}
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
			/* 头部 start */
			&__head {
				&__title {
					font-weight: bold;
					line-height: normal;
					&--right-icon {
						font-size: 24rpx;
						margin-left: 8rpx;
					}
				}
				&__status {
					font-size: 22rpx;
					color: #AAAAAA;
				}
			}
			/* 头部 end */
			/* 内容 start */
			&__content {
				margin-top: 20rpx;
				&__image {
					margin-right: 20rpx;
					image {
						width: 140rpx;
						height: 140rpx;
						border-radius: 10rpx;
					}
				}
				&__title {
					padding-right: 40rpx;
					display: -webkit-box;
					overflow: hidden;
					white-space: normal !important;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				&__info {
					&__price {
						&--unit {
							font-size: 20rpx;
						}
						&__value--integer, &__value--decimal {
							font-weight: bold;
						}
						&__value--decimal {
							font-size: 20rpx;
						}
					}
					&__count {
						color: #AAAAAA;
						font-size: 24rpx;
					}
				}
			}
			/* 内容 end */
			/* 操作按钮 start */
			&__operation {
				margin-top: 30rpx;
				&__right {
					&__button {
						margin-left: 10rpx;
					}
				}
			}
			/* 操作按钮 end */
		}
		/* 订单内容 end */
	}
</style>
