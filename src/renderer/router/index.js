import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'PageList',
            component: require('@/components/PageList').default,
        },
        {
            path: '/barChart1',
            name: 'barChart1',
            component: require('@/components/BarChart1').default,
        },
        {
            path: '/barChart2',
            name: 'barChart2',
            component: require('@/components/BarChart2').default,
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
})
