import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import models from '../model';

import Home from '../views/Home.vue';

const routes = models.map((model) => {
  const { id, name, path, twins, quote, parent, hide_back, hide_home, next_page, exclude, cpt, after_click } = model;
  return {
    name,
    path,
    component: Home,
    meta: {
      id,
      twins,
      quote,
      parent,
      hide_back,
      hide_home,
      next_page, 
      exclude, 
      after_click,
      cpt
    },
  };
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
