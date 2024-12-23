import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HelloWorld", defineAsyncComponent(() => import("C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/components/HelloWorld.vue")))
    
      app.component("AvatarGrid", defineAsyncComponent(() => import("C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/components/AvatarGrid.vue")))
  },
}
