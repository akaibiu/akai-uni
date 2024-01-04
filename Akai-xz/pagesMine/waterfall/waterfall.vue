<template>
	<view class="tn-safe-area-inset-bottom">
		<view class="" style="padding: 30rpx 20rpx;">
			<tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
				<template v-slot:left="{ leftList }">
					<view v-for="(item, index) in leftList" :key="item.id" class="product__item">
						<view class="item__image">
							<tn-lazy-load :threshold="6000" height="100%" :image="item.mainImage" :index="item.id"
								imgMode="widthFix"></tn-lazy-load>
						</view>
					</view>
				</template>
				<template v-slot:right="{ rightList }">
					<view v-for="(item, index) in rightList" :key="item.id" class="product__item">
						<view class="item__image">
							<tn-lazy-load :threshold="6000" height="100%" :image="item.mainImage" :index="item.id"
								imgMode="widthFix"></tn-lazy-load>
						</view>
					</view>
				</template>
			</tn-waterfall>
		</view>
		<tn-load-more :status="loadStatus"></tn-load-more>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/* 瀑布流*/
				loadStatus: 'loadmore',
				list: [],
				data: [{
						title: '酷炫外卖首页',
						userName: '试试就逝世',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603328-assets/web-upload/0506256f-4ea4-4b19-a0aa-b032e31eb0a2.jpeg',
						userImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: ['首页', '美食'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 338
						},
					},
					{
						title: '内容发布页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603332-assets/web-upload/83f4706e-9e88-4748-80dd-350b514b5c9e.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: ['表单', '新建'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 289
						},
					},
					{
						title: '商品详情，带购物车动画',
						userName: '青梅煮马',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603396-assets/web-upload/a7f7dd1d-3618-4888-a20c-6b55a6aa69a4.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: ['男生头像', '情侣头像'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 381
						},
					},
					{
						title: '简约个人中心页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603328-assets/web-upload/89c4931b-bbdf-413f-806f-e73f0d291e8d.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 526
						},
					},
					{
						title: '消息通知页面',
						userName: '坟头草三米高',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603394-assets/web-upload/901c83d3-f0ef-4ef8-acd8-fe16934672e1.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 372
						},
					},
					{
						title: '弹窗领红包',
						userName: '不许凶我',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603386-assets/web-upload/13ccbeff-8878-41f5-abd9-96bb1aaa267a.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: ['弹窗', '模态窗'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 694
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603381-assets/web-upload/15743f8a-2c04-4ab3-8140-1d93f58b094a.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603455-assets/web-upload/997b637d-3435-44ee-a7cd-dc6914126f99.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603418-assets/web-upload/2f17ab8f-d0c0-4727-b1d6-5f5f9222452b.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603403-assets/web-upload/c0ae4a35-6e63-4bf3-b7db-7a5b085ed5a4.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603452-assets/web-upload/c206eac9-0690-436f-8c89-5e652503cfe6.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603449-assets/web-upload/55a2f676-4e6d-482a-854f-07cd984e0e8a.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603492-assets/web-upload/9d4b96de-55f8-4808-83a7-9962be5b2477.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603439-assets/web-upload/82420ab2-45ae-47a3-b344-583dc74f9510.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603408-assets/web-upload/3220af13-505c-45e8-b945-c013b98d2e97.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603509-assets/web-upload/d1dcb46a-2589-4b26-b443-9fe9b52f8dc1.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603532-assets/web-upload/c8f3f24f-789c-474f-9fdf-831bedb7833c.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603498-assets/web-upload/62858fcd-ca48-45c2-8ffe-2204f646a6dd.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603544-assets/web-upload/0f26f622-b992-4480-8203-caddf9ff994c.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603532-assets/web-upload/9415afc4-a3dd-4b53-9acd-b746b8df2b4e.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603530-assets/web-upload/ef2234e6-6419-4c2a-921b-927a61ecfffa.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603568-assets/web-upload/d3e42c95-74ff-46ab-885c-f5c9531b3996.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603649-assets/web-upload/a8394b38-ba4b-4df4-9f9a-fa40469f03cd.jpeg',
						userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					}
				],
			}
		},

		onLoad() {
			this.getRandomData()
		},
		onReachBottom() {
			this.getRandomData()
		},
		methods: {
			// 获取随机数据
			getRandomData() {
				console.log(13);
				this.loadStatus = 'loading'
				for (let i = 0; i < 10; i++) {
					let index = this.$t.number.randomInt(0, this.data.length - 1)
					let item = JSON.parse(JSON.stringify(this.data[index]))
					item.id = this.$t.uuid()
					this.list.push(item)
				}
			},
			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 瀑布流*/
	.product__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 20rpx;
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		.item {
			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
				overflow: hidden;
			}
		}
	}
</style>
