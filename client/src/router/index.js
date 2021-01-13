import Vue from 'vue';
import VueRouter from 'vue-router';
import InventoryEntry from '@/components/InventoryEntry'
import InventoryReport from '@/components/InventoryReport'

Vue.use(VueRouter);



export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/addRecord',
            name: 'InventoryEntry',
            component: InventoryEntry
        },
        {
            path: '/getRecord',
            name: 'InventoryReport',
            component: InventoryReport
        }
    ]
})