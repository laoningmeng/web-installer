<template>
  <div>
    <a-list item-layout="horizontal" :data-source="check_list" style="text-align: left;">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-space style="margin-right:20px;">
            <check-circle-outlined v-if="item.status==1" style="color: #52c41a; font-size:20px;"/>
            <exclamation-circle-outlined v-if="item.status==0" style="color: gray; font-size:20px;"/>
            <close-circle-outlined v-if="item.status==2" style="color: #eb2f96; font-size:20px;" />
          </a-space>
          <a-list-item-meta
              :description="item.desc"
          >
            <template #title>
              <span >{{ item.title }}</span>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <div>
      <a-row  justify="center" style="margin-top:20px">
        <a-button type="primary" @click="check">开始检测</a-button>
        <a-button  style="margin-left: 20px;" @click="next">下一步</a-button>
      </a-row>

    </div>
  </div>
</template>
<script>
import { CheckCircleOutlined,ExclamationCircleOutlined,CloseCircleOutlined } from '@ant-design/icons-vue';
import {getCheckList} from '@/api/data'


export default{
  components:{
    CheckCircleOutlined,ExclamationCircleOutlined,CloseCircleOutlined
  },
  data(){
    return {
      check_list:[]
    }
  },
  mounted() {
    this.getList()
  },
  methods:{
    getList(is_check=0){
      getCheckList({is_check:is_check}).then(res=>{
        const data = res.data
        this.check_list = data
        this.$emit("current_step", res.current_step)
        // 遍历data, 看看status 是不是都是ok
      })
    },
    check(){
      this.getList(1)
    },
    next(){
      const data = this.check_list
      let flag = true
      data.forEach(val=>{
        console.log(val,val["status"])
        if (val["status"]!==1){
          flag = false
        }
      })
      if (flag===true){
        this.$router.push('/config')
      }
    }
  }
}




</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
.logo{
  color: #fff;
  font-size: 18px;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>