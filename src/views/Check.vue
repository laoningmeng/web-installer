<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data" style="text-align: left;">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-space style="margin-right:20px;">
            <check-circle-outlined style="color: #52c41a; font-size:20px;"/>
            <exclamation-circle-outlined style="color: gray; font-size:20px;"/>
            <close-circle-outlined style="color: #eb2f96; font-size:20px;" />
          </a-space>
          <a-list-item-meta
              description="ready to check"
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
        <a-button type="primary" >开始检测</a-button>
      </a-row>
    </div>
  </div>
</template>
<script setup name="Check">
import { CheckCircleOutlined,ExclamationCircleOutlined,CloseCircleOutlined } from '@ant-design/icons-vue';
import { useStore } from '@/stores/store'
const data = [{
  title: 'node',
}, {
  title: 'go',
}, {
  title: 'redis',
}, {
  title: 'mysql',
}];

const store = useStore();
store.setCurStep(3)


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