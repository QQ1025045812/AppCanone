import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './phone/vue/App.vue'
import First from './phone/vue/components/First.vue'
import Second from './phone/vue/components/Second.vue'
Vue.use(VueRouter)
//配置路由
const router=new VueRouter()
router.map({
	'/App':{
		component:App
	},
	'/First':{
		component:First
	},
	'/Second':{
		component:Second
	}
})
router.start(App,'#app')
router.redirect({
	'/':'/App'
})
new Vue({
	el:'body',
	components:{
		app:App
	}
})