<template>
  <a-layout class="layout">
    <a-layout-header>
      <span class="logo">安装程序</span>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px; margin-top:20px">
      <a-card  :bordered="false"  style="padding: 20px;">
        <div :style="{ background: '#fff', minHeight: '100px'}" aclass="height-100">
          <a-row type="flex" justify="space-around" style="margin-top:20px">
            <a-steps :current="current_step">
              <a-step v-for="step in steps" :title="step.title"  />
            </a-steps>
          </a-row>
        </div>
        <div>
          <router-view :key="key" />
        </div>
      </a-card>

    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "Layout",
  data(){
    return {
      steps:[
        {
          title:"环境检测",
          sort: 0
        },
        {
          title:"配置信息",
          sort: 0
        },
        {
          title:"waitting",
          sort: 0
        },
        {
          title:"环境检测",
          sort: 0
        },
        {
          title:"配置信息",
          sort: 0
        },
        {
          title:"waitting",
          sort: 0
        }
      ],
      current_step:0,
    }
  },
}
</script>

<style scoped>
.logo{
  color:white;
}
</style>