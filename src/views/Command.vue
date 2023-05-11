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
let socket = new WebSocket("ws://127.0.0.1:8100/ws");

socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send("My name is John");
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // 例如服务器进程被杀死或网络中断
    // 在这种情况下，event.code 通常为 1006
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};

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