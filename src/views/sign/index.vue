<template>
  <div class="sign">
  <canvas ref="canvas"></canvas>
    <div class="btns">
      <weui-button
        :type="'default'"
        @click="cancel()"
        style="width: 100px;"
        :mini="true"
        >取消</weui-button
      >
      <weui-button @click="save()" :mini="true" style="width: 100px;"
        >确定</weui-button
      >
    </div>
  </div>
</template>
<script>
// 配置内容
const config = {
  width: 375, // 宽度
  height: 500, // 高度
  lineWidth: 3, // 线宽
  // strokeStyle: 'red', // 线条颜色
  lineCap: 'round', // 设置线条两端圆角
  lineJoin: 'round' // 线条交汇处圆角
}

// 保存上次绘制的 坐标及偏移量
const client = {
  offsetX: 0, // 偏移量
  offsetY: 0,
  endX: 0, // 坐标
  endY: 0
}

export default {
  name: 'Sign',
  components: {},
  props: {},
  data () {
    return {
      ctx: null,
      canvas: null,
      client,
      mobileStatus: /Mobile|Android|iPhone/i.test(navigator.userAgent) // 判断是否为移动端
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    // 获取canvas 实例
    this.canvas = this.$refs.canvas
    // 设置宽高
    this.canvas.width = config.width
    this.canvas.height = config.height
    // 设置一个边框
    this.canvas.style.border = '1px solid #333'
    // 创建上下文
    this.ctx = this.canvas.getContext('2d')
    // 设置填充背景色
    this.ctx.fillStyle = 'transparent'
    // 绘制填充矩形
    this.ctx.fillRect(
      0, // x 轴起始绘制位置
      0, // y 轴起始绘制位置
      config.width, // 宽度
      config.height // 高度
    )
    // 创建鼠标/手势按下监听器
    window.addEventListener(
      this.mobileStatus ? 'touchstart' : 'mousedown',
      this.init
    )
    // 创建鼠标/手势 弹起/离开 监听器
    window.addEventListener(
      this.mobileStatus ? 'touchend' : 'mouseup',
      this.cloaseDraw
    )
  },
  methods: {
    // 取消-清空画布
    cancel () {
      // 清空当前画布上的所有绘制内容
      this.ctx.clearRect(0, 0, config.width, config.height)
    },
    // 保存-将画布内容保存为图片
    save () {
      // 将canvas上的内容转成blob流
      this.canvas.toBlob(blob => {
        // 获取当前时间并转成字符串，用来当做文件名
        const date = Date.now().toString()
        // 创建一个 a 标签
        const a = document.createElement('a')
        // 设置 a 标签的下载文件名
        a.download = `${date}.png`
        // 设置 a 标签的跳转路径为 文件流地址
        a.href = URL.createObjectURL(blob)
        // 手动触发 a 标签的点击事件
        a.click()
        // 移除 a 标签
        a.remove()
      })
    },
    // 初始化
    init (event) {
      // 获取偏移量及坐标
      const { offsetX, offsetY, pageX, pageY } = this.mobileStatus
        ? event.changedTouches[0]
        : event

      // 修改上次的偏移量及坐标
      this.client.offsetX = offsetX
      this.client.offsetY = offsetY
      this.client.endX = pageX
      this.client.endY = pageY

      // 清除以上一次 beginPath 之后的所有路径，进行绘制
      this.ctx.beginPath()
      // 根据配置文件设置相应配置
      this.ctx.lineWidth = config.lineWidth
      this.ctx.strokeStyle = config.strokeStyle
      this.ctx.lineCap = config.lineCap
      this.ctx.lineJoin = config.lineJoin
      // 设置画线起始点位
      this.ctx.moveTo(client.endX, client.endY)
      // 监听 鼠标移动或手势移动
      window.addEventListener(
        this.mobileStatus ? 'touchmove' : 'mousemove',
        this.draw
      )
    },
    // 绘制
    draw (event) {
      // 获取当前坐标点位
      const { pageX, pageY } = this.mobileStatus
        ? event.changedTouches[0]
        : event
        // console.log(pageX, pageY, '绘制方法')
        // 修改最后一次绘制的坐标点
      this.client.endX = pageX
      this.client.endY = pageY

      // 根据坐标点位移动添加线条
      this.ctx.lineTo(pageX, pageY)

      // 绘制
      this.ctx.stroke()
    },
    // 结束绘制
    cloaseDraw () {
      // 结束绘制
      this.ctx.closePath()
      // 移除鼠标移动或手势移动监听器
      window.removeEventListener('mousemove', this.draw)
    }
  }
}
</script>
<style lang="scss" scoped>
  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
  }
</style>
