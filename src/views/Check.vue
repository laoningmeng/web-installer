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

<script>
export default {
  name: "Check"
}
</script>

<style scoped>

</style>