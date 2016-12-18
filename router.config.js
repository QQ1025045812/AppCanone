import App from './phone/vue/App.vue'
import First from './phone/vue/components/First.vue'
import Second from './phone/vue/components/Second.vue'
export default{
	'/App':{
		component:App
	},
	'/components/First':{
		component:First
	},
	'/components/Second':{
		component:Second
	}
}