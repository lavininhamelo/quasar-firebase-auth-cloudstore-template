const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "login", component: () => import("pages/Auth/Login.vue") },
      { path: "/register", component: () => import("pages/Auth/SignUp.vue") },
      { path: "profile", component: () => import("pages/Auth/Profile.vue") },
      { path: "produto", component: () => import("pages/Forms/Produto.vue") },
      { path: "reserva", component: () => import("pages/Tables/Reserva.vue") }
    ]
  }
];
// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
