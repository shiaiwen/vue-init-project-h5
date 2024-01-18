<template>
  <div class="contract">
    <div class="title ">
      融资居间服务合同
    </div>
    <div class="paragraph">
      1今甲方受到乙方进行融资居间服务，成功下款后收取融资金额15%+299元的居间服务费(299只有第一次下款收取)，所有费用都是下款到账后收取，不到账是不会收取任何费用的，另外额度是可以循环使用的，以后续借不收取服务费。
    </div>
    <div class="paragraph">
      2甲方承诺有能力还款，并且按时还款，不会恶意逾期。
    </div>
    <div class="paragraph">
      3本协议一式两份，签署后生效
    </div>
    <div class="signs">
      <div class="sign-item">
        <div class="left">
          甲方：
        </div>
        <div class="right"></div>
      </div>
      <div class="sign-item">
        <div class="left">
          乙方：
        </div>
        <div class="right">武汉凯和鑫网络科技有限公司</div>
      </div>
    </div>
    <img src="../../assets/images/seal.png" alt="" class="seal">
    <div class="sign-btns">
        <weui-button :mini="true" style="width: 100px; margin: 0 30px;" @click="sign"  :block="true">手写签名</weui-button>
        <weui-button :mini="true" style="width: 160px;"  @click="confirm">确认签署</weui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contract',
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  methods: {
    sign () {
      this.$router.push('/sign')
    }
  }
}
</script>

<style lang="scss" scoped>
  .contract {
    padding: 20px;
    .title {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      margin: 20px 0;
    }
    .signs {
      margin: 20px 0;
      .sign-item {
        display: flex;
        margin: 10px 0;
          .right {
            width: 260px;
            text-align: center;
            border-bottom: 1px solid #222;
          }
      }
    }
    .seal {
      width: 100px;
      height: 100px;
      position: relative;
      top: -60px;
      left: 200px;
    }
  }
</style>
