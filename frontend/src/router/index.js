import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue"),
      meta: { title: "Parler sans peur" },
    },
    {
      path: '/book',
      name: 'book',
      component: () => import("../views/BookView.vue"),
      meta: { title: "Liste des rdv" },
    },
    {
      path: "/book/:id",
      name: "bookform",
      component: () => import("../components/forms/BookForm.vue"),
      meta: { title: "Réservation de rdv" },
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;