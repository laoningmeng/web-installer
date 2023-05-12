<template>
  <div>
    <div class="terminal-print" ref="scrollContainer">
      <p v-for="text in texts" :key="text"  >{{ text }}</p>
    </div>
    <div class="process">
      <a-progress :percent="data_percent" size="small"   />
    </div>
    <div style="margin-top: 20px;text-align: center">
      <a-button type="primary" html-type="submit" @click="run">开始执行</a-button>
      <a-button style="margin-left: 20px" html-type="submit">下一步</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data_percent:0,
      texts:[],
      ws:null,
    }
  },
  created() {
    // 创建 WebSocket 连接
    const ws_url = import.meta.env.VITE_APP_WS
    this.ws = new WebSocket(ws_url)
  },
  mounted() {
    this.ws.addEventListener('message', event => {
      const message = event.data
      this.texts.push(message)
      this.$nextTick(() => {
        this.$refs.scrollContainer.scrollTop = this.$refs.scrollContainer.offsetHeight;
      });
    })

    this.ws.addEventListener('onopen', event => {
      this.ws.send("start ws")
    })
    this.ws.addEventListener('onclose', event => {

    })

  },
  methods:{
    run(){
      this.ws.send("start");
    },
  }
}

</script>

<style scoped>
.terminal-print{
  width:100%;
  height: 200px;
  overflow:scroll;
  background: black;
  min-height: 200px;
  color: green;
  padding: 15px;
}
.process{
  margin-top:20px
}
</style>