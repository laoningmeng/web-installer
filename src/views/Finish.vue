<template>
  <a-result
      status="success"
      title="程序初始化成功"
      sub-title="程序初始化成功程序初始化成功程序初始化成功"
  >
    <template #extra>
      <a-button key="console" type="primary">访问站点</a-button>
      <a-button key="buy">关闭安装程序</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted() {
    this.$emit("current_step", 3)
  }
}

</script>

<style scoped>

</style>