import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/home.vue'
import AboutUs from '@/pages/about-us.vue'
import ContactUs from '@/pages/contact-us.vue'
import OurServices from '@/pages/our-services.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about-us',
		name: 'AboutUs',
		component: AboutUs,
	},
	{
		path: '/contact-us',
		name: 'ContactUs',
		component: ContactUs,
	},
	{
		path: '/our-services',
		name: 'OurServices',
		component: OurServices,
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
	scrollBehavior() {
		// always scroll to top
		return { top: 0 }
	}
})
export default router
