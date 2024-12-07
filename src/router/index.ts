import { createRouter, createWebHistory } from 'vue-router';
import ScheduleEdit from '../views/ScheduleEdit.vue';

const routes = [
    { path: '/schedule/:id/editar', component: ScheduleEdit, name: 'ScheduleEdit' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;