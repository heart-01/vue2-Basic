// ไฟล์สำหรับ Render Vue JS ในตอนแรก
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //Render ข้อมูลในตัว ./App.vue
}).$mount('#app') //ไปติดไว้ในส่วนของ id app ใน public
