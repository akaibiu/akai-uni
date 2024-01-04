<template>
	<view class="container">
		<view class="card">
			<text>CARD</text>
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

<style>
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		width: 190px;
		height: 254px;
		background: #07182E;
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		place-content: center;
		place-items: center;
		overflow: hidden;
		border-radius: 20px;
	}
	.card text {
		z-index: 1;
		color: white;
		font-size: 2em;
	}
	.card::before {
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
	.card::after {
		content: '';
		position: absolute;
		background: #07182E;
		;
		inset: 5px;
		border-radius: 15px;
	}
	/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
</style>
