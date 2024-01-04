<template>
	<view class="container" style="height: 100vh;overflow-y: scroll;background-color: #ffffff;">
		<!-- 页面内容 -->
		<view class="wrap">
			<tn-form :model="form" ref="form" :errorType="errorType" labelPosition="left" :labelWidth="600" labelAlign="left">
				<tn-form-item label="账号" prop="name" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.name" type="text"  placeholder="请输入账号(全英文或英文数字混合)" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="店铺名称" prop="shopName" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.shopName" type="text" placeholder="请输入店铺名称" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="请选择行业" :required="true" prop="goodsType" labelPosition="top" labelAlign="left">
					<tn-input v-model="form.goodsType" type="select" placeholder="请选择商品类型" :border="false" :selectOpen="selectShow" @click="selectShow = true" @confirm="checkType"></tn-input>
				</tn-form-item>
				<tn-form-item label="店铺地址" prop="address" :required="true" labelPosition="top" labelAlign="left">
					<tn-input v-model="form.address" type="select" placeholder="请选择店铺所在地区" :border="false" :selectOpen="pickerShow" @click="pickerShow=true" @confirm="checkAddress"></tn-input>
				</tn-form-item>
				<tn-form-item label="详细地址" prop="detailAddress" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.detailAddress" type="text" placeholder="请输入店铺详细地址" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="服务商ID" prop="serviceId" labelPosition="top" labelAlign="left">
					<tn-input v-model="form.serviceId" type="number" placeholder="请输入服务商ID(非必填选项)" :border="false"></tn-input>
				</tn-form-item>
			</tn-form>
			<tn-picker v-model="pickerShow" mode="region" @confirm="checkAddress"></tn-picker>
			<tn-select v-model="selectShow" valueName="industry_code" labelName="industry_name" mode="single" :list="industryTyleList" @confirm="checkType"></tn-select>
			<tn-button shape="round" margin="60rpx 0rpx 0rpx 0rpx" backgroundColor="#007aff" :countDownText="s" :blockRepeatClick="true" fontColor="#FFFFFF" width="100%" @click="regester">注册</tn-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType: ['message', 'border-bottom'],
				pickerShow: false,
				selectShow: false,
				setinForm: null,
				industryTyleList: [{
						industry_name: '餐饮',
						industry_code: 2
					},
					{
						industry_name: '酒店/民宿',
						industry_code: 1
					},
				],
				form: {
					name: '',
					shopName: '',
					address: '',
					detailAddress: '',
					serviceId: '',
					goodsType: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入账号',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '请规范输入您的账号',
							trigger: ['change', 'blur'],
						},
						{	
							pattern:/^[a-zA-Z0-9_-]{4,16}$/,
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								return /^[a-zA-Z0-9_-]{4,16}$/.test(value);
							},
							message: '姓名必须为英文或英文数字混合',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						},
					],
					detailAddress: [{
						required: true,
						message: '店铺详细地址不能为空',
						trigger: 'change'
					}],
					address: [{
						required: true,
						message: '所在地区不能为空',
						trigger: 'change'
					}],
					goodsType: [{
						required: true,
						message: '所选行业不能为空',
						trigger: 'change'
					}],
					shopName: [{
						required: true,
						message: '店铺名称不能为空',
						trigger: 'change'
					}],
				},
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			// Regester
			regester() {
				let that=this;
				that.$refs.form.validate(valid => {
					if (valid) {
						// 验证通过
						that.$t.message.toast('验证通过!')
					} else {
						// 验证失败
						that.$t.message.toast('验证失败,请检查所填选项!')
					}
				})
			},
			// Check Address
			checkAddress(event) {
				this.form.address = event.province.label + '-' + event.city.label + '-' + event.area.label
			},
			// Check Type
			checkType(event) {
				this.form.goodsType = `${event[0]['label']}`;
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.tn-form-item--left__content__label {
		font-weight: bold;
	}
	/deep/.tn-checkbox__label {
		margin-right: 0rpx !important;
	}
	.container {
		padding: 0rpx 60rpx 60rpx 60rpx !important;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		.wrap {
			width: 100%;
			margin-top: 30rpx;
		}
	}
</style>
