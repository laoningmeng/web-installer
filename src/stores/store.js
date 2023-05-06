import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
  state(){
    return {
      current_step:0,
    }
  },
  actions:{
    setCurStep(step) {
      this.current_step = step
    },
  }
})