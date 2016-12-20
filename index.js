import Vue from 'vue'
import VueRouter from 'vue-router'
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
