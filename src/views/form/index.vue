<template>
  <div>
    <div>
      <LightSwiper :imgs="imgs" :height="200" indicatorSytle="round">
        <div
          class="swiper_inner"
          v-for="(img, index) in imgs"
          :key="img"
          :slot="index"
        ></div>
      </LightSwiper>
    </div>
    <div class="form">
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
        <div style="margin: 16px">
          <weui-button @click="submitForm">继续</weui-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import banner from '../../assets/images/banner.jpg'
import Vue from 'vue'
import { Field, Button, RadioGroup, Form, Radio } from 'vant'
import LightSwiper from 'light-swiper-v2'

Vue.use(Field)
Vue.use(Radio)
Vue.use(Form)
Vue.use(Button)
Vue.use(RadioGroup)
export default {
  name: 'Form',
  components: {
    LightSwiper
  },
  props: {},
  data () {
    return {
      imgs: [banner],
      form: {
        name: '',
        gender: '',
        mobile: '',
        idcard: '',
        lxrMobile: '',
        lxrName: '',
        otherCommand: '',
        recommend: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},

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
.swiper_inner {
  position: absolute !important;
  color: white;
  bottom: 20%;
  width: 100%;
  text-align: center;
  left: 0;
}
</style>
