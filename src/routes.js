const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("./view/home/index")
  },
  {
    path: "/blog",
    name: "blog",
    redirect: { name: "blogList" },
    component: () => import("./view/blog/index"),
    children: [
      {
        path: "list",
        name: "blogList",
        component: () => import("./view/blog/BlogList.vue"),
      },
      {
        path: "view/:id",
        name: "blogView",
        props:true,
        component: () => import("./view/blog/BlogDetail.vue"),
      }
    ]
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("./view/shop/index")
  },
  {
    path: "/baidu",
    name: "baidu",
    component: () => import("./view/baidu/index")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("./view/personal/index")
  },
];

export default routes;
