"use strict";

import store from "./store/index";
import router from "./router/index";
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
const clientApp = new Vue({
  render: (h) => h(App),
  router,
  store,
});


const ready = async () => {
  const initParam =window.__INITIAL_STATE__||{
    store:{},
    router:[]
  };

  store.replaceState(initParam.store);
  // 这里假定 App.vue 模板中根元素具有 `id="app"`
  router.add(initParam.router)

  router.onReady(() => {
    router.beforeResolve((to, from, next) => {
      const components = router.getMatchedComponents(to);
      if (!components.length) {
        next();
      }

      console.log(components.map((c) =>c && c.asyncData(store, router, {})));
      Promise.all(
        components.map((c) =>c && c.asyncData(store, router, {})
        //  () => {
        //   if (c.asyncData) {
        //     c.asyncData(store, router, {});
        //   }
        )
      )
        .then(next)
        .catch(next);
    });
    clientApp.$mount("#app");
  });
}

ready().catch(console.error);