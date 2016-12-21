import App from './phone/vue/App.vue'
import First from './phone/vue/components/First.vue'
import Second from './phone/vue/components/Second.vue'
import First2 from './phone/vue/components/First2.vue'
import Second2 from './phone/vue/components/Second2.vue'
import details from './phone/vue/components/details.vue'
export default{
	'/App':{
		component:App
	},
	'/attendance/First':{
		component:First
	},
	'/attendance/Second':{
		component:Second
	},
	'/attendance/:time':{
		component:First2
	},
	'/attendance/Second2':{
		component:Second2
	},
	'/attendance/details/:id':{
        component:details
    },
}