export default {
  pages: [
    "pages/home/index",
    "pages/record/index",
    "pages/insights/index",
    "pages/profile/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8c8c8c",
    selectedColor: "#FFBA5A",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      { pagePath: "pages/home/index", text: "首页" },
      { pagePath: "pages/record/index", text: "记录" },
      { pagePath: "pages/insights/index", text: "心迹" },
      { pagePath: "pages/profile/index", text: "我的" },
    ],
  },
};
