<template>
  <div>
    <div class="terminal-print">
      hello<br>
      hello<br>
      hello<br>
      hello<br>
    </div>
    <div class="process">
      <a-progress :percent="70" size="small"   />
    </div>
  </div>
</template>

<script setup name="command">
import {useStore} from "@/stores/store";
const store = useStore()
store.setCurStep(2)

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