<template>
	<view class="container">
		<view class="title one" title="one">
			Mikuya 
		</view>
		<view class="title two" title="two">
			童话镇-YiFa Chen
		</view>
		<view class="ss">
			<swiper class="swiper" :interval="3750" :indicator-dots="false" easing-function="default" height="500rpx" :autoplay="true" :circular="false" :vertical="true"
				:display-multiple-items="3" >
				<swiper-item v-for="(item,index) in list" :key="index">
					<view class="swiper-item" :style="{color:item.type==1?'hotpink':'#FF7043',transform:item.type===1?'translateX(60rpx)':'translateX(0rpx)'}">
						{{item.name}}
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- <image class="cover" src="https://img0.baidu.com/it/u=3859507698,2329512994&fm=253&fmt=auto&app=138&f=PNG?w=500&h=658" mode=""></image> -->
		<image class="cover" src="https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699088-assets/web-upload/f8da9a2a-a076-4a7b-9af8-6ec14d5f99ea.jpeg" mode=""></image>
	</view>
</template>

<script>
	//这些代码是全局的，可以写在全局块里面
	const audio = uni.createInnerAudioContext();
	audio.onPlay(() => { //播放监听事件
		console.log('开始播放');
	});
	audio.onPause(() => { //暂停监听
		console.log('暂停');
	});
	audio.onStop(() => { //停止监听
		console.log('开始停止了')
	});
	audio.onEnded(() => { // 自然播放结束监听也需要更改isPause 开关状态
		console.log('音频自然播放结束事件');
		audio.stop();
		//在这里可以加一些代码实现单曲循环
	});
	export default {
		data() {
			return {
				list: [
					{name:"翻唱：Yifa Chen",type:1},
					{name:"翻唱：Mikuya",type:0},
					{name:'原唱：An Gang',type:1},
					{name:'平台：Wang Yi',type:0},
					{name:'此平台仅做收录',type:1},
					{name:'不做传播',type:0},
					{name:'如有侵权',type:1},
					{name:'请联系平台作者删除~',type:0},
					{name: '听说白雪公主在逃跑',type:1,},
					{name: '小红帽在担心大灰狼',type:0,},
					{name: '听说疯帽喜欢爱丽丝',type:1,},
					{name: '丑小鸭会变成白天鹅',type:0,},
					{name: '听说彼得潘总长不大',type:1,},
					{name: '杰克他有竖琴和魔法',type:0,},
					{name: '听说森林里有糖果屋',type:1,},
					{name: '灰姑娘丢了心爱的玻璃鞋',type:0,},
					{name: '只有睿智的河水知道',type:1,},
					{name: '白雪是因为贪玩跑出了城堡',type:0,},
					{name: '小红帽有件压抑自己',type:1,},
					{name: '变成狼的大红袍',type:0,},
					{name: '总有一条蜿蜒在童话镇里七彩的河',type:1,},
					{name: '沾染魔法的乖张气息',type:0,},
					{name: '却又在爱里曲折',type:1,},
					{name: '川流不息扬起水花',type:0,},
					{name: '又卷入一帘时光入水',type:1,},
					{name: '让所有很久很久以前',type:0,},
					{name: '都走到幸福结局的时刻',type:1,},
					{name: '⛪',type:0,},
					{name: '⛪',type:1,},
					{name: '⛪',type:0,},
					{name: '听说睡美人被埋葬',type:1,},
					{name: '小人鱼在眺望金殿堂',type:0,},
					{name: '听说阿波罗变成金乌',type:1,},
					{name: '草原有奔跑的剑齿虎',type:0,},
					{name: '听说匹诺曹总说着谎',type:1,},
					{name: '侏儒怪拥有宝石满箱',type:0,},
					{name: '听说悬崖有棵长生树',type:1,},
					{name: '红鞋子不知疲倦地在跳舞',type:0,},
					{name: '只有睿智的河水知道',type:1,},
					{name: '睡美人逃避了生活的煎熬',type:0,},
					{name: '小人鱼把阳光抹成眼影',type:1,},
					{name: '投入泡沫的怀抱',type:0,},
					{name: '总有一条蜿蜒在童话镇里七彩的河',type:1},
					{name: '沾染魔法的乖张气息',type:0,},
					{name: '却又在爱里曲折',type:1,},
					{name: '川流不息扬起水花',type:0,},
					{name: '又卷入一帘时光入水',type:1,},
					{name: '让所有很久很久以前',type:0,},
					{name: '都走到幸福结局的时刻',type:1},
					{name: '总有一条蜿蜒在童话镇里梦幻的河',type:0,},
					{name: '分隔了理想分隔现实',type:1,},
					{name: '又在前方的山口汇合',type:0,},
					{name: '川流不息扬起水花',type:1,},
					{name: '又卷入一帘时光入水',type:0,},
					{name: '让所有很久很久以前',type:1,},
					{name: '都走到幸福结局 的时刻',type:0,},
					{name: '又陌生 啊~~啊~~啊~~',type:1,},
					{name:'呜~~呜~~呜~~呜~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'啊~~啊~~啊~~啊~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'呜~~呜~~呜~~呜~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'啊~~啊~~啊~~啊~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'啊~~啊~~啊~~啊~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'呜~~呜~~呜~~呜~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'啊~~啊~~啊~~啊~~',type:0,},
					{name:'呜~~呜~~呜~~呜~~',type:1,},
					{name:'呜~~呜~~呜~~呜~~',type:0,},
				],
			}
		},
		onUnload(){
			this.stopAudios()
		},
		onShow() {
			this.playAudios();
		},
		
		methods: {
			playAudios() {
				audio.src = 'https://m.hifini.com/music/demo.%E7%AB%A5%E8%AF%9D%E9%95%87.m4a';
				// audio.src = "https://m.hifini.com/music/demo.%E7%AB%A5%E8%AF%9D%E9%95%87.m4a";
				audio.onCanplay(() => {
					console.log('准备播放')
					audio.play()
				})
				// audio.play()
			},
			stopAudios() {
				audio.stop()
				console.log('播放已关闭');
			},
		}
	}
</script>

<style lang="less" scope>
	page {
		position: relative;
		width: 100%;
		height: 100%;
		// background: #fff;
		background: black !important;
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		place-content: center;
		place-items: center;
		overflow: hidden;
		// border-radius: 20px;
		&::before {
			content: '';
			position: absolute;
			width: 100px;
			background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(0, 183, 255)), to(rgb(255, 48, 255)));
			background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
			height: 130%;
			-webkit-animation: rotBGimg 3s linear infinite;
			animation: rotBGimg 3s linear infinite;
			-webkit-transition: all 0.2s linear;
			transition: all 0.2s linear;
		}
		
		&::after {
			content: '';
			position: absolute;
			background: #fff;
			inset: 5px;
			border-radius: 15px;
		}
		/* .card:hover:before {
		  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
		  animation: rotBGimg 3.5s linear infinite;
		} */
	}
	// 卡片样式动画
	@-webkit-keyframes rotBGimg {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes rotBGimg {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes titleFrame {
		to{
			clip-path: ellipse(32px 32px at 0% 50%);
		}
		from{
			clip-path: ellipse(32px 32px at 100% 50%);
		}
	}
	@keyframes cover {
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	.container {
		width: 99%;
		height: 99%;
		// background: #fff !important;
		background: black !important;
		z-index: 99999999 !important;
		display: flex;
		// justify-content: center;
		align-items: center;
		flex-direction: column;
		.cover{
			width: 350rpx;
			height: 350rpx;
			border-radius: 50%;
			animation: cover 5s linear infinite;
		}
		.one{
			margin-bottom: 50rpx;
			font-size: 45rpx;
			color: #575757;
			position: relative;
			display: inline-block;
			&::after{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				content:'Mikuya';
				// color: #e1be8b;
				color: #3D7EFF;
				animation: titleFrame 1s ease-in-out infinite alternate;
			}
		}
		.two{
			margin-bottom: 50rpx;
			font-size: 45rpx;
			color: #575757;
			position: relative;
			display: inline-block;
			&::after{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				content:'童话镇-YiFa Chen';
				color: #e1be8b;
				animation: titleFrame 3s ease-in-out infinite alternate;
			}
		}
		.ss{
			height: 600rpx !important;
			width: 70%;
		}
		.swiper {
			width:96%;
			padding: 30rpx 0rpx;
			z-index: 99999;
			// background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
		}
		.swiper-item {
			padding: 20rpx;
			// background: #e1be8b;
			// color: #e1be8b !important;
			inset: 10px !important;
			font-size: 34rpx;
			box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
			box-sizing: border-box;
			text-indent: 20rpx;
			display: flex;
			align-items: center;
		}
	}
</style>
