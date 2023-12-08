#### 属性
1. width:宽度
2. height:高度
3. bgsrc:背景图地址
#### 方法
1. chooseimg:提供事件对象，可以获取选择图片的临时地址
#### 示例
```
<template>
	<view class="page">
		<upload-img 
			:width="300"
			:height="200"
			bgsrc="../../static/temp/bg.png"
			@chooseimg="handleChooseImg">
		</upload-img>
	</view>
</template>

<script>
	import uploadImg from '../../components/uploadimg/uploadImg.vue'
	export default {
		data() {
			return {
				src:''
			}
		},
		components:{
			uploadImg
		},
		methods:{
			handleChooseImg(e){
				console.log('imageSrc:',e);
			}
		}
	}
</script>

<style class="sass">
	.page{
		width: 100%;
		height: 100vh;
	}
</style>
```