<template>
	<view class="content">
		
		<view class="wrap">
		     <view class="halfCircle">
		
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
			
		}
	}
</script>

<style lang="less" scoped>

.wrap{
            width: 200px;
            height: 140px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            margin: 10%;
            display: flex;
            align-items: center;
			justify-content: center;
        }
        .wrap .halfCircle{
            width: 20px;
				height: 40px;
				border-radius: 0 20px 20px 0;
                background: rgba(149, 157, 165, 0.1);
        }
</style>
