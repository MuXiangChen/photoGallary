export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Forever24"} }],
  ["/album/Event2.html", { loader: () => import(/* webpackChunkName: "album_Event2.html" */"C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/.temp/pages/album/Event2.html.js"), meta: {"title":""} }],
  ["/album/", { loader: () => import(/* webpackChunkName: "album_index.html" */"C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/.temp/pages/album/index.html.js"), meta: {"title":"相册"} }],
  ["/upload/", { loader: () => import(/* webpackChunkName: "upload_index.html" */"C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/.temp/pages/upload/index.html.js"), meta: {"title":"文件上传"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/uaena/Desktop/photoGallary/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
