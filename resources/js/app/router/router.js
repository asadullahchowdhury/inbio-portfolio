import {createRouter, createWebHistory} from "vue-router";

import Layout from '../layout/layout.vue'
import Index from '../pages/index.vue'

const routes = [
    {path: '/', name: 'Layout', component: Layout,
        children: [
            {path: '', name: 'Index', component: Index},
        ]
    },
];

const router = createRouter({
    history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {el: to.hash, behavior: 'smooth'};
        } else {
            return {top: 0, behavior: 'smooth'};
        }
    }
});

export default router;
