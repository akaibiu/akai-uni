<template>
	<view class="content">
		<scroll-view :scroll-x="true" style="white-space: nowrap;">
			<view class="dataInfo">
				<view class="dataList">
					<view class="list">Cadillac CT5</view>
				</view>
				<view class="dataList">
					<view class="list">Cadillac CT6</view>
				</view>
				<view class="dataList">
					<view class="list">Cadillac ATS-L</view>
				</view>
			</view>
		</scroll-view>

		<!-- 自动播报start -->
		<view class="banner">
			<swiper class="swiper" next-margin="50px" autoplay :interval="3000" :duration="500" circular>
				<swiper-item class="swiper-item" v-for="(item, index) in boardData" :key="index">
					<view class="item">
						<image :src="item.coverPic" class="img"></image>
						<view class="desc">
							<view class="title">{{ item.title }}</view>
							<view class="subtitle">{{ item.subtitle }}</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 自动播报end -->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				boardData: [{
						"id": 53,
						"postId": 48,
						"no": "BB20200525152258",
						"sort": 1,
						"type": 1,
						"contentType": 1,
						"title": "喜茶制粽，现正预售中",
						"subtitle": "2020喜茶制粽端午礼盒",
						"coverPic": "https://go.cdn.heytea.com/storage/products/2020/05/25/d7f9a7e9ea3747778d301b443147cd82.png",
						"imageTextContent": null,
						"redirectContent": {
							"redirectType": 1,
							"name": null,
							"path": "https://mp.weixin.qq.com/s/eWEMnvHNtOEup-hzE38r8Q",
							"appId": null
						}
					},
					{
						"id": 54,
						"postId": 49,
						"no": "BB20200525152844",
						"sort": 2,
						"type": 1,
						"contentType": 1,
						"title": "来颗布蕾QQ麻薯球",
						"subtitle": "灵感之茶，与音乐共生",
						"coverPic": "https://go.cdn.heytea.com/storage/products/2020/05/25/0346c403e88243eaa76aa334097ad8ec.png",
						"imageTextContent": null,
						"redirectContent": {
							"redirectType": 1,
							"name": null,
							"path": "https://mp.weixin.qq.com/s/AaMBCLliMla5ktAVF5TGSA",
							"appId": null
						}
					},
					{
						"id": 50,
						"postId": 45,
						"no": "BB20200508143203",
						"sort": 3,
						"type": 1,
						"contentType": 1,
						"title": "喜茶星球会员升级啦",
						"subtitle": "点击了解升级详情",
						"coverPic": "https://go.cdn.heytea.com/storage/products/2020/05/08/0a11147144ff42629e6eca9eeec53215.png",
						"imageTextContent": null,
						"redirectContent": {
							"redirectType": 0,
							"name": null,
							"path": "pages/member/upgrade_publicity/index",
							"appId": null
						}
					},
					{
						"id": 51,
						"postId": 46,
						"no": "BB20200521172417",
						"sort": 4,
						"type": 1,
						"contentType": 1,
						"title": "多肉车厘回归",
						"subtitle": "喜茶大陆门店现已有售",
						"coverPic": "https://go.cdn.heytea.com/storage/products/2020/05/21/14b70fe3fd1d4a8eb0d079d5ac571bfb.jpeg",
						"imageTextContent": null,
						"redirectContent": {
							"redirectType": 1,
							"name": null,
							"path": "https://mp.weixin.qq.com/s/nhnQd7zQlqJXMsjChVfCsw",
							"appId": null
						}
					},
					{
						"id": 52,
						"postId": 47,
						"no": "BB20200521172540",
						"sort": 5,
						"type": 1,
						"contentType": 1,
						"title": "一杯灵感之茶的诞生",
						"subtitle": "新茶风，喜茶造",
						"coverPic": "https://go.cdn.heytea.com/storage/products/2020/05/21/f4ae061b3b1d44cfa8518b8b6ec8f348.jpeg",
						"imageTextContent": null,
						"redirectContent": {
							"redirectType": 1,
							"name": null,
							"path": "https://mp.weixin.qq.com/s/wXSC4MrE7NJlTk6uluhmDA",
							"appId": null
						}
					}
				]
			}
		}
	}
</script>
<style lang="less" scoped>
	.content {
		width: 95%;
		margin: 0 auto;
		.dataInfo {
			width: 100%;
			display: flex;
		}
		.dataList {
			margin: 10rpx;
		}
		.dataList:first-child {
			margin-left: 0;
		}
		.list {
			display: inline-block;
			width: 200px;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: bisque;
			background: #F8F8F8;
			border: 1px solid bisque;
		}
		.banner {
			width: 100%;
			position: relative;
			padding: 0rpx 30rpx;
			box-sizing: border-box;
			border: 1px solid bisque;
			.swiper {
				height: 160rpx;
				padding: 20rpx 0rpx;
				box-sizing: border-box;
				.item {
					display: flex;
					background-color: #f8f8f8;
					padding: 10rpx 20rpx;
					border-radius: 6rpx;
					align-items: center;
					margin-right: 40rpx;
					image {
						width: 100rpx;
						height: 100rpx;
						border-radius: 100%;
						margin-right: 20rpx;
					}
					.desc {
						display: flex;
						flex-direction: column;
						.title {
							font-size: 28rpx;
							font-weight: 500;
							margin-bottom: 10rpx;
						}
						.subtitle {
							font-size: 24rpx;
							font-weight: 500;
							margin-bottom: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
