import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from './phone/vue/App.vue'
//import First from './phone/vue/components/First.vue'
//import Second from './phone/vue/components/Second.vue'
import routerConfig from './router.config.js'
Vue.use(VueRouter)
var App = Vue.extend({});
//配置路由
const router=new VueRouter()
router.map(routerConfig)
router.start(App,'#app')
router.go({"path":"/"});
router.redirect({
	'/':'/App'
})
///
