<template>
  <view class="discovery tn-safe-area-inset-bottom">
    
   <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF99">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <view class="custom-nav__back">
          <text class="tn-icon-discover tn-color-cat" style="font-size: 50rpx;" @click="tn('/discoveryPages/edit')">
          </text>
          <text class="tn-icon-team tn-color-cat tn-padding-left" style="font-size: 50rpx;" @click="tn('/discoveryPages/partner')">
          </text>
        </view>
      </view>
    </tn-nav-bar>
    
    
    <swiper class="card-swiper" @click="tn('')" :circular="true"
      :autoplay="false" duration="500" interval="8000" @change="cardSwiper"> 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
        </view>
        
        <view class="swiper-item-text">
          <view class="tn-padding swiper-item-title">
            <view class="tn-text-bold tn-color-white" style="font-size: 40rpx;">{{item.title}}</view>
            <view class="tn-color-white tn-padding-top" style="font-size: 25rpx;">{{item.name}}</view>
          </view>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in swiperList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
    
    <view class="tn-margin-top-sm">
      <tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
        <tn-tabs :list="fixedList" :current="current" :isScroll="true" activeColor="#000" :bold="true" :fontSize="32" :badgeOffset="[20, 50]" @change="tabChange" backgroundColor="#FFFFFF99" :height="110"></tn-tabs>
      </tn-sticky>
    </view>
    
    
    <view class="" v-if="current==0">
      <view class="" style="padding: 30rpx 20rpx;" >
        <tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
          <template v-slot:left="{ leftList }">
            <view v-for="(item, index) in leftList" :key="item.id" class="product__item" @click="tn('')">
              <view class="item__image">
                <tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load>
              </view>
              <view class="item__data">
                <view class="item__title-container">
                  <!-- <view v-if="item.newProduct" class="item__store-type tn-bg-gray--light">标签</view>
                  <view v-else-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-1">SVIP</view> -->
                  <text class="item__title tn-color-cat">{{ item.title }}</text>
                </view>
                <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                  <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
                </view>
    
                <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
                  <view class="justify-content-item">
                    <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                      <view class="logo-pic">
                        <view class="logo-image">
                          <view class="" :style="'background-image:url('+ item.userImage +');width: 40rpx;height: 40rpx;background-size: cover;'">
                          </view>
                        </view>
                      </view>
                      <view class="tn-padding-left-xs">
                        <text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
                      </view>
                
                    </view>
                  </view>
                  <view class="justify-content-item">
                    <text class="tn-icon-rocket tn-color-gray tn-padding-right-xs"></text>
                    <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}</text>
                  </view>
                </view>
                
                
              </view>
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view v-for="(item, index) in rightList" :key="item.id" class="product__item" @click="tn('')">
              <view class="item__image">
                <tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage" :index="item.id" imgMode="widthFix"></tn-lazy-load>
              </view>
              <view class="item__data">
                <view class="item__title-container">
                  <!-- <view v-if="item.storeType === 1" class="item__store-type tn-cool-bg-color-5">VIP</view> -->
                  <text class="item__title tn-color-cat">{{ item.title }}</text>
                </view>
                <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                  <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
                </view>
                <!-- <view class="item__price-container">
                  <text class="item__price--unit">￥</text>
                  <text class="item__price--integer">{{ item.priceInteger }}</text>
                  <text class="item__price--dot">.</text>
                  <text class="item__price--decimal">{{ item.priceDecimal }}</text>
                </view> -->
                <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
                  <view class="justify-content-item">
                    <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                      <view class="logo-pic">
                        <view class="logo-image">
                          <view class="" :style="'background-image:url('+ item.userImage +');width: 40rpx;height: 40rpx;background-size: cover;'">
                          </view>
                        </view>
                      </view>
                      <view class="tn-padding-left-xs">
                        <text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
                      </view>
                
                    </view>
                  </view>
                  <view class="justify-content-item">
                    <text class="tn-icon-rocket tn-color-gray tn-padding-right-xs"></text>
                    <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}</text>
                  </view>
                </view>
              </view>
            </view>
          </template>
        </tn-waterfall>
      </view>
      <tn-load-more :status="loadStatus"></tn-load-more>
    </view>
    
    <view class="" v-if="current==1">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了1</view>
      </view>
    </view>
    <view class="" v-if="current==2">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了2</view>
      </view>
    </view>
    <view class="" v-if="current==3">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了3</view>
      </view>
    </view>
    <view class="" v-if="current==4">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了4</view>
      </view>
    </view>
    <view class="" v-if="current==5">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了5</view>
      </view>
    </view>
    <view class="" v-if="current==6">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了6</view>
      </view>
    </view>
    <view class="" v-if="current==7">
      <view class="" style="padding: 30rpx 20rpx;">
        <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
          <text class="tn-icon-wea-wind tn-color-gray--light"></text>
        </view>
        <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了7</view>
      </view>
    </view>
    
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'Discovery',
    mixins: [template_page_mixin],
    data(){
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          title: '海水、月亮和一些心碎',
          name: '晚风轻踩着云朵，月亮在贩售快乐，你从银河背后靠近我，我与星辉一同为你沉沦。。',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner3.jpg',
        }, {
          id: 1,
          type: 'image',
          title: '为什么我没能早点遇见你',
          name: '生活需要一些仪式感，这跟矫情无关，它只关乎你对生活的热爱和对幸福的敏感。。',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner1.jpg',
        }, {
          id: 2,
          type: 'image',
          title: '随性而行，无需刻意',
          name: '我不喜欢带伞，因为雨水从不滴落在我的心上；心若向阳，无惧远方。。',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner2.jpg',
        }, {
          id: 3,
          type: 'image',
          title: '有些记忆会被时间焚烧',
          name: '如果我能享受一年四季带给我的陪伴，那么生命就不会成为我的负担。。',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner0.jpg',
        }],
        /* tabs*/
        current: 0,
        fixedList: [
          {name: '推荐'},
          {name: '附近'},
          {name: '最新'},
          {name: '精品'},
          {name: '人气'},
          {name: '精选'},
          {name: '优选'},
          {name: '品质'},
        ],
        
        /* 瀑布流*/
        loadStatus: 'loadmore',
        list: [],
        data: [
          {
            title: '帮忙喂猫',
            userName: '图鸟北北',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image0.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: ['军训汇演','青春校园'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 338
            },
          },
          {
            title: '可当伴娘噢',
            userName: '你的名字',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image1.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['空间设计'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 289
            },
          },
          {
            title: '线下陪玩剧本时',
            userName: '青梅煮马',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image2.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 381
            },
          },
          {
            title: '浦江航拍夜上海',
            userName: '你的名字',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image3.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: true, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 526
            },
          },
          {
            title: '2022建档百年 外滩灯光秀 与你一起',
            userName: '捉住那只北北猪',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image4.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 372
            },
          },
          {
            title: '广州纳达堡三室两厅',
            userName: '捉住那只北北猪',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image5.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
            storeType: 2, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['VR看房'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 694
            },
          },
          {
            title: '冰岛极光航拍',
            userName: '捉住那只北北猪',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image6.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
            storeType: 2, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['看世界'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 508
            },
          },
          {
            title: '泰山之巅',
            userName: '你的名字',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image7.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['航拍中国'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 923
            },
          },
          {
            title: '广州分手塔',
            userName: '图鸟北北',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image8.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: ['热门景点'],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 989
            },
          },
          {
            title: '珠海澳门捉猪行动',
            userName: '捉住那只北北猪',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image8.jpg',
            userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
            storeType: 1, // 1 自营 2 第三方店铺
            newProduct: false, // 是否为新品
            tags: [],
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
          }
        ]
      }
    },
    /* 瀑布流*/
    created() {
      this.getRandomData()
    },
    onReachBottom() {
      
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      /* 瀑布流*/
      // 获取随机数据
      getRandomData() {
        this.loadStatus = 'loading'
        for (let i = 0; i < 10; i++) {
          let index = this.$t.number.randomInt(0, this.data.length - 1)
          let item = JSON.parse(JSON.stringify(this.data[index]))
          let price = this.getPrice(item.price)
          item.id = this.$t.uuid()
          item.priceInteger = price[0]
          item.priceDecimal = price[1]
          this.list.push(item)
        }
      },
      // 瀑布流加载完毕事件
      handleWaterFallFinish() {
        this.loadStatus = 'loadmore'
      },
      // 获取价格整数和小数部分
      getPrice(price) {
        const priceStr = String(price)
        if (priceStr.indexOf('.') !== -1) {
          return priceStr.split('.')
        } else {
          return [priceStr, '00']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .discovery{
    max-height: 100vh;
  }
  /* 底部安全边距 start*/
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
    height: calc(140rpx + constant(safe-area-inset-bottom));
  }
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin-left: 30rpx;
      margin-top: 5rpx;
      font-size: 40rpx;
      flex-basis: 5%;
      width: 100rpx;
      position: absolute;
    }
  }
  /* 自定义导航栏内容 end */
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 800rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    // padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    // background-color: rgba(0, 0, 0, 0.7);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.05));
    margin-top: -260rpx;
    width: 100%;
    display: block;
    height: 50%;
    // border-radius: 10rpx;
    transform: translate(0rpx, 0rpx) scale(1);
    transition: all 0.6s ease 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    // background-color: rgba(0, 0, 0, 0.7);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.04));
    margin-top: -260rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(1);
    transition: all 0.6s ease 0s;
  }
  
  
  .card-swiper swiper-item .swiper-item-title {
    transform: translate(50rpx, 0rpx) scale(0.9);
    transition: all 0.6s ease 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-title {
    transform: translate(0rpx, 0rpx) scale(1);
    transition: all 0.6s ease 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: -60rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
  /* 用户头像 start */
  .logo-image {
    width: 40rpx;
    height: 40rpx;
    position: relative;
  }
  
  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border: 1rpx solid rgba(255,255,255,0.05);
    // box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  
  /* 瀑布流*/
  .product__item {
    background-color: #FFFFFF;
    overflow: hidden;
    margin: 0 10rpx;
    margin-bottom: 40rpx;
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
      /* 图片 end */
      
      /* 内容 start */
      &__data {
        padding: 14rpx 0rpx;
      }
      
      /* 标题 start */
      &__title-container {
        text-align: justify;
        line-height: 38rpx;
        vertical-align: middle;
      }
      &__store-type {
        height: 28rpx;
        font-size: 20rpx;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4rpx;
        border-radius: 6rpx;
        white-space: nowrap;
        text-align: center;
        top: -2rpx;
        margin-right: 6rpx;
      }
      &__title {
        font-size: 30rpx;
      }
      /* 标题 end */
      
      /* 标签 start */
      &__tags-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
      }
      &__tag {
        margin: 10rpx;
        color: #7C8191;
        background-color: #F3F2F7;
        padding: 4rpx 14rpx 6rpx;
        border-radius: 10rpx;
        font-size: 20rpx;
        
        &:first-child {
          margin-left: 0rpx !important;
        }
      }
      /* 标签 end */
      
      /* 价格 start */
      &__price-container {
        font-size: 24rpx;
        color: #E83A30;
        font-weight: bold;
      }
      &__price {
        &--unit {
          
        }
        &--integer {
          font-size: 38rpx;
        }
        &--decimal {
          
        }
      }
      /* 价格 end */
      /* 内容 end */
    }
  }
  
</style>
