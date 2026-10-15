import { createApp } from "vue";

import "./app.scss";
import "virtual:uno.css";

import { IconFont } from "@nutui/icons-vue";
import "@nutui/icons-vue/dist/style_iconfont.css";

const App = createApp({
  name: "MoodDiaryApp",
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(IconFont);

export default App;
