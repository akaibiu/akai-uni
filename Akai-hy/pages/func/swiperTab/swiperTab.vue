<template>
	<view class="content">
		<scroll-view class="tab" id="tab" :show-scrollbar="false" :scroll-x="true" :scroll-into-view="tabScrollInto">
			<view class="tabContent" style="display: flex; flex-direction: column;">
				<view style="display: flex;flex-direction: row;">
					<view class="tabItem" v-for="(tab,tabItemIndex) in tabList" :key="tab.id" :id="tab.id"
						:data-id="tabItemIndex" :data-current="tabItemIndex" @click="pressScrollViewItem">
						<text class="tabItemTitle" :class="tabIndex==tabItemIndex ? 'tabItemTitleActive' : ''"
							:style="{width:tabList[tabItemIndex].width + 'px'}">{{tab.title}}</text>
					</view>
				</view>
				<view class="tabLineView">
					<view class="tabLine" :class="isPress ? 'tabLineActive':'tabLineActive'"
						:style="{left: tabItemLineLeft + 'px', width: tabItemLineWidth + 'px'}"></view>
				</view>
			</view>
		</scroll-view>
		<swiper class="childPageView" :current="tabIndex" :duration="250" @change="swiperChange"
			@animationfinish="swiperChangeEnd" @onAnimationEnd="swiperChangeEnd" :style="{height: swiperHeight+'px'}">
			<swiper-item class="childPageViewItem" v-for="(page, childPageViewItemIndex) in tabList"
				:key="childPageViewItemIndex">
				<scroll-view scroll-y="true" :style="{height: swiperHeight+'px'}">
					<view class="">
						<view class="" v-for="(data,itemIndex) in item1Data" :key="itemIndex"
							style="width: 100vw; height: 300rpx;margin-bottom: 30rpx;display: flex; align-items:center;justify-content: center; background-color: #DBF1E1;">
							{{data.title}}
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					id: "tabItem0",
					title: '周淑怡',
					width: 70,
				}, {
					id: "tabItem1",
					title: '林允儿',
					width: 70,
				}, {
					id: "tabItem2",
					title: '郭仙儿',
					width: 70,
				}],
				tabIndex: 0,
				tabScrollInto: "",
				tabListSize: {},
				tabItemLineLeft: 0,
				tabItemLineWidth: 0,
				isPress: false,
				swiperHeight: 0,
				item1Data: [{
					title: '1楼',
				}, {
					title: '2楼',
				}, {
					title: '3楼',
				}, {
					title: '4楼',
				}, {
					title: '5楼',
				}, {
					title: '6楼',
				}, {
					title: '7楼',
				}, {
					title: '8楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}, {
					title: '9楼',
				}],
			}
		},
		onLoad() {
			let system = uni.getSystemInfoSync();
			this.swiperHeight = system.windowHeight - 44;
			console.log(this.swiperHeight);
		},
		onReady() {
			this.setTabItemDistance();
			this.setTabSelect(this.tabIndex);
		},
		methods: {
			pressScrollViewItem(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.isPress = true;
				this.setTabSelect(index);
			},
			swiperChange(e) {
				let index = e.target.current || e.detail.current;
				this.tabIndex = index;
				this.setTabSelect(this.tabIndex);
			},
			setTabItemDistance() {
				var queryTabSize = uni.createSelectorQuery().in(this);
				for (var i = 0; i < this.tabList.length; i++) {
					queryTabSize.select('#' + this.tabList[i].id).boundingClientRect();
				}
				queryTabSize.exec(rects => {
					rects.forEach((rect) => {
						this.tabListSize[rect.dataset.id] = rect;
					})
					console.log(this.tabListSize);
					this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this
							.tabIndex]
						.width);
				});
			},
			setTabItemLinePosition(left, width) {
				this.tabItemLineLeft = left;
				this.tabItemLineWidth = width;
			},
			swiperChangeEnd(e) {
				this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
			},
			setTabSelect(index) {
				this.tabIndex = index;
				this.tabScrollInto = this.tabList[index].id;
				console.log(this.tabScrollInto);
			},
		}
	}
</script>

<style>
	.content {
		/* flex: 1; */
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
	}

	.tab {
		/* #ifdef APP-PLUS */
		width: 100vw;
		/* #endif */
		height: 44px;
		display: flex;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	/* 隐藏滚动条 */

	.tab ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.tabLineView {
		position: relative;
		height: 2px;
		background-color: transparent;

	}

	.tabLine {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		background-color: #DD6161;
	}

	.tabLineActive {
		transition-duration: 0.3s;
		transition-property: left;
	}

	.childPageView {
		display: flex;
		flex-direction: column;
	}

	.tabItem {
		/* #ifndef APP-PLUS */
		/* display: inline-block; */
		/* #endif */
		display: flex;


		/* flex-wrap: nowrap; */

		/* 
		padding-left: 20px;
		padding-right: 20px; */

	}

	.tabItemTitle {
		color: #333333;
		font-size: 15px;
		height: 42px;
		line-height: 40px;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.tabItemTitleActive {
		color: #DD6161;
	}

	.childPageViewItem {
		flex: 1;
		flex-direction: column;
	}
</style>
