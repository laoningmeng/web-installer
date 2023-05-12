<template>
  <a-form
      :model="mysql"
      name="mysql"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="Host"
        name="host"
        :rules="[{ required: true, message: 'Please input your host!' }]"
    >
      <a-input v-model:value="mysql.host" />
    </a-form-item>
    <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="mysql.username" />
    </a-form-item>
    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="mysql.password" />
    </a-form-item>

    <a-form-item
        label="Port"
        name="port"
        :rules="[{ required: true, message: 'Please input your port!' }]"
    >
      <a-input v-model:value="mysql.port" />
    </a-form-item>
    <a-form-item
        label="DBName"
        name="db_name"
        :rules="[{ required: true, message: 'Please input your dbname!' }]"
    >
      <a-input v-model:value="mysql.db_name" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" @click="save">安装</a-button>
      <a-button style="margin-left: 20px" html-type="submit">取消</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {saveConfig} from "@/api/data";

export  default {
  data(){
    return {
      mysql:{}
    }
  },
  methods:{
    save(){
      saveConfig(this.mysql).then(res=>{
        console.log("res:", res)
      })
    },
    onFinish(){
      this.$router.push("/command")
    },
    onFinishFailed(){

    }
  },
  mounted() {
    this.$emit("current_step", 1)
  }
}
</script>


        
