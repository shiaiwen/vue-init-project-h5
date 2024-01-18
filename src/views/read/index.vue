<template>
  <div class="page">
    <div class="content">
      Dolor tempora dolore aperiam fuga necessitatibus? Odio atque tempora
      deleniti voluptates voluptatem. Dolorem earum voluptas blanditiis labore
      quisquam? Quibusdam nesciunt consequatur aliquam ea corrupti animi, itaque
      consequatur neque? At porroSit nemo aliquid quas error doloremque
      Reiciendis ratione repellendus quae sit commodi amet architecto? Aut
      officiis aliquam fugit nulla at necessitatibus Optio totam quibusdam
      laboriosam aperiam libero! Officiis reiciendis Elit quaerat sed vero
      perferendis architecto consequatur. Consequuntur ad illum dolore ut
      accusamus. Cum possimus odit sequi quaerat beatae, eveniet. Rerum dolore
      ipsam quia consectetur iste Veniam mollitia dolores tempore? Dolor tempora
      dolore aperiam fuga necessitatibus? Odio atque tempora deleniti voluptates
      voluptatem. Dolorem earum voluptas blanditiis labore quisquam? Quibusdam
      nesciunt consequatur aliquam ea corrupti animi, itaque consequatur neque?
      At porroSit nemo aliquid quas error doloremque Reiciendis ratione
      repellendus quae sit commodi amet architecto? Aut officiis aliquam fugit
      nulla at necessitatibus Optio totam quibusdam laboriosam aperiam libero!
      Officiis reiciendis Elit quaerat sed vero perferendis architecto
      consequatur. Consequuntur ad illum dolore ut accusamus. Cum possimus odit
      sequi quaerat beatae, eveniet. Rerum dolore ipsam quia consectetur iste
      Veniam mollitia dolores tempore?
    </div>
    <div style="padding-top: 20px;">
      <label
        id="weuiAgree"
        for="weuiAgreeCheckbox"
        class="weui-agree weui-wa-hotarea"
        style="display: flex;"
      >
        <input
          id="weuiAgreeCheckbox"
          type="checkbox"
          class="weui-agree__checkbox"
          style="position: relative; top: 5px;"
          v-model="val"
        />
        <span class="weui-agree__text" style="display: flex;"
          >阅读并同意<a>《相关条款》</a></span
        >
      </label>
    </div>
    <div class="sign-btns">
        <weui-button :mini="true" style="width: 160px;"  @click="confirm">阅读并同意</weui-button>
        <weui-button :mini="true" style="width: 100px; margin: 0 30px;" @click="sign"  :block="true">取消</weui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      val: false
    }
  },
  computed: {},
  created () {},
  methods: {
    confirm () {
      this.val = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
    .content {
      height: 75vh;
      overflow-y: scroll;
    }
    .sign-btns {
      display: flex;
      margin: 20px 0;
    }
  }
</style>
