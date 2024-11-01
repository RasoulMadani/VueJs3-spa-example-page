import {createRouter, createWebHistory} from "vue-router";

import Home from "./pages/Home.vue";
import IndexUser from "./pages/users/Index.vue";
import ShowUser from "./pages/users/Show.vue";
const routes= [
    {path:"/" ,name:'home',component: Home},

    {path: "/users",name:"users",component: IndexUser,
        children:[
            {path:':id',name:'userId',component: ShowUser}
        ]}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;