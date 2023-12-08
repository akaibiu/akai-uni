<!-- 温馨提示：使用的时候将此页面代码全部复制粘贴到同目录下的index.vue文件中(支付宝账号和姓名并未在响应数据中提现) -->
<template>
	<view class="container">
		<view class="userInfo">
			<view class="one">
				<view class="textTip">
					真实姓名*
				</view>
				<view class="content">
					KAI QIU
				</view>
			</view>
			<view class="one">
				<view class="textTip">
					用户微信*
				</view>
				<view class="content">
					Akaibiu
				</view>
			</view>
			<view class="two">
				<view class="textTip">
					用户手机号*
				</view>
				<view class="content">
					17738531107
				</view>
			</view>
		</view>
		<view class="cashBox">
			<view class="title">
				请输入提现金额
			</view>
			<view class="inputBox">
				<tn-input v-model="amount" :clearable="false" placeholder="请输入您要提现的金额" placeholderStyle="font-size:24rpx" @input="inputValue" height="100" type="digit"/>
			</view>
			<view class="total">
				<view class="tl">
					您共有<text>{{info.total}}</text>积分,可提现<text>{{info.abled}}</text>元
				</view>
				<view class="tr">
					<tn-button fontSize="22" :blockRepeatClick="true" size="sm" width="80%" :plain="true" @click="cashAll" fontColor="#F1C68E">全部提现</tn-button>
				</view>
			</view>
			<view class="rules">
				<view class="rt">
					规则:满15元起;仅支持整数兑换;提现手续费1%
				</view>
				<view class="rb">
					申请提现后3天到账，如有疑问请联系客服
				</view>
			</view>
			<view class="exchangeBtn">
					<tn-button width="80%" backgroundColor="#F1C68E" :disabled="btnDisabled" fontColor="#fff">{{btnText}}</tn-button>
			</view>
		</view>
		<view class="cashRecords" @click="cashRecords">
			<view class="tip">
				提现记录
			</view>
			<text class="tn-icon-right" style="padding: 10rpx;"></text>
		</view>
	</view>
</template>

<script>
	// import {memberAccount,memberWithdraw,getPayInfo} from '@/services/api.js';
	export default {
		data() {
			return {
				btnDisabled: true, 		// VALUE>=0?BTNDISABLED=TRUE?BTNDISABLED=FALSE
				info:{
					total:20,
					abled:10
				},
				account:"",  			// CASH OUT ACCPUNT
				amount: '', 			// VALUE OF INPUT
				btnText:"提现到微信",	// BUTTON TEXT
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			
		},
		
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function () {},
		
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function () {
		},
		
		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function () {},
		
		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function () {},
		
		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function () {},
		
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function () {},
		
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function () {},
		methods: {
			// INPUT WRITE WORDS
			inputValue(e){
				this.amount=parseFloat(e);
				this.amount>0?this.btnDisabled=false:this.btnDisabled=true;
				this.amount>0?this.btnText="提现到微信":this.btnText="请输入提现金额";
				
			},
			// CASH ALL
			cashAll(){
				this.amount=parseFloat(this.info.abled);
				this.amount>0?this.btnDisabled=false:this.btnDisabled=true;
				this.amount>0?this.btnText="提现到微信":this.btnText="请输入提现金额";
			},
			// CASH RECORDS
			cashRecords(){
				this.tool.toastTip("功能正在完善中...",'none',1000)
			}
		}
	}
</script>
<style>
	page, html, body {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
</style>
<style lang="less" scoped>
	.dflex() {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dflexsb() {
		.dflex();
		justify-content: space-between;
	}
	.dflexsa() {
		.dflex();
		justify-content: space-around;
	}
	.container {
		width: 100%;
		height: 100%;
		background-color: #f4f4f4;
		padding-top: 30rpx;
		box-sizing: border-box;
		font-family: PingFang SC-Bold, PingFang SC;
		.userInfo, .cashBox, .cashRecords {
			width: 92%;
			margin-left: 4%;
			padding: 22rpx;
			background: #fff;
			border-radius: 14rpx;
		}
		.userInfo {
			letter-spacing: 2rpx;
			font-size: 28rpx;
			.one, .two {
				padding: 20rpx 0rpx;
				font-weight: bold;
				color: #474747;
				.dflexsb();
			}
			.one {
				border-bottom: 2rpx solid #eeeeee;
				.textTip {
					color: #ff9823;
				}
				.content {
					font-weight: normal;
				}
			}
			.two {
				margin-top: 2rpx;
			}
		}
		.cashBox {
			margin-top: 30rpx;
			.title {
				font-size: 26rpx;
				letter-spacing: 2rpx;
				font-weight: bold;
				color: #474747;
			}
			.inputBox {
				padding: 10rpx 0rpx 0rpx 0rpx;
				border-bottom: 2rpx solid #eee;
				/deep/.tn-input__input{
					font-size: 48rpx !important;
					color: #474747 !important;
					padding-left: 20rpx;
				}
			}
			.total {
				.dflexsb();
				margin: 20rpx 0rpx 20rpx 0rpx;
				.tl {
					width: 70%;
					color: #474747;
					font-size: 24rpx;
					text {
						color: #ff9823;
						margin: 0rpx 4rpx;
						font-size: 28rpx;
					}
				}
				.tr {
					flex: 1;
					/deep/.tn-btn {
						border: 2rpx solid #F1C68E !important;
						height: 54rpx;
						width: 140rpx;
						font-size: 20rpx;
						border-radius: 30rpx;
					}
				}
			}
			.rules {
				padding: 8rpx 0rpx 20rpx 10rpx;
				background-image: linear-gradient(120deg, #fdfbfb 0%, #f9f9fa 100%);
				border-radius: 10rpx;
				font-size: 24rpx;
				.dflex();
				flex-direction: column;
				line-height: 48rpx;
				.rt {
					color: #474747;
					font-weight: bold;
				}
				.rb {
					color: #ffc43a;
				}
			}
			.exchangeBtn {
				/deep/.tn-btn {
					border: 2rpx solid #eee !important;
					margin-top: 40rpx;
					color: #fff;
					letter-spacing: 2rpx;
					margin-left: 10%;
					border-radius:34rpx;
				}
			}
		}
		.cashRecords {
			margin-top: 30rpx;
			.dflexsb();
			.tip {
				font-size: 30rpx;
				font-weight: bolder;
				color: #474747;
			}
		}
	}
</style>
