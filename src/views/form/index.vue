<template>
  <div class="form">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in goods" :key="index" class="swiper-slide">
          <div class="share-detail">
            <img alt="" class="goods-img" :src="item.mainpic" />
          </div>
          <div class="goods-content">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <van-form>
      <van-field
        v-model="form.name"
        required
        label="姓名"
        placeholder="请输入姓名"
        label-width="8em"
      />
      <van-field required label="性别" label-width="8em">
        <template #input>
          <van-radio-group v-model="form.gender" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="form.mobile"
        required
        label="实名手机"
        placeholder="请输入实名手机"
        type="tel"
        label-width="8em"
      />
      <van-field
        v-model="form.idcard"
        required
        label="身份证号"
        placeholder="请输入身份证号"
        label-width="8em"
      />
      <van-field
        v-model="form.lxrName"
        required
        label="紧急联系人姓名"
        placeholder="请输入紧急联系人姓名"
        label-width="8em"
      />
      <van-field
        v-model="form.lxrMobile"
        required
        label="紧急联系人手机"
        placeholder="请输入紧急联系人手机"
        label-width="8em"
        type="tel"
      />
      <van-field
        v-model="form.otherCommand"
        rows="4"
        label="其他需求"
        label-width="8em"
        type="textarea"
        placeholder="请输入您的任何需求"
      />
      <van-field
        label-width="8em"
        v-model="form.recommend"
        label="推荐员工"
        placeholder="请输入推荐员工"
      />
      <div style="margin: 16px;">
        <weui-button @click="submitForm">继续</weui-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button, RadioGroup, Form, Radio } from 'vant'
import Swiper from 'swiper'
Vue.use(Field)
Vue.use(Radio)
Vue.use(Form)
Vue.use(Button)
Vue.use(RadioGroup)
export default {
  name: 'Form',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        gender: '',
        mobile: '',
        idcard: '',
        lxrMobile: '',
        lxrName: '',
        otherCommand: '',
        recommend: ''
      },
      goods: [
        {
          mainpic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F519213556&psig=AOvVaw1aqoILNegCSXSzicUOP_Nx&ust=1705633046721000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCto7L45YMDFQAAAAAdAAAAABAD'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      slidesPerView: 1.7, // 可以看到前后的块
      spaceBetween: 40,
      centeredSlides: true,
      loop: true, // 循环
      pagination: '.swiper-pagination', // 如果需要分页器
      bulletClass: 'my-swiper-pagination-bullet', // 自定义分页器样式
      bulletActiveClass: 'my-bullet-active' // 当前选中分页器样式
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev'
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar'
    })
  },
  methods: {
    submitForm () {
      console.log(this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
  .form {
    padding: 20px;
    .van-field {
      margin-bottom: 20px;
    }
  }
</style>
<style>
  .my-swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.08rem;
    display: block;
    float: left;
    margin: 0;
    border-radius: 0;
    margin-top: 0.3rem;
    background: rgba(255, 255, 255, 0.37);
    margin-left: 1.3rem;
  }

  .my-swiper-pagination-bullet:nth-of-type(2) {
    position: relative;
    left: 1.6rem;
  }

  .my-swiper-pagination-bullet:nth-of-type(3) {
    position: relative;
    left: 3.1rem;
  }

  .my-bullet-active {
    background: #fff;
  }
</style>
