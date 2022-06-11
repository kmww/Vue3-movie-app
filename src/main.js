import { createApp } from "vue"
import App from "./App"
import router from "./routes/index.js"  //특정 폴더안에 있는 index.js 파일은 생략해도 적용됨
import store from "./store/index.js"
import loadImage from "./plugins/loadImage"
createApp(App)
  .use(router)      //vue.js에서 사용할 플러그인(라이브러리) 연결
  .use(store)
  .use(loadImage)
  .mount("#app")