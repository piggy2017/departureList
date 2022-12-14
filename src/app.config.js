/*
 * @Author: SunLin
 * @Date: 2022-07-04 14:10:38
 * @LastEditors: SunLin
 * @LastEditTime: 2022-11-17 16:56:25
 * @Description: 
 */
export default {
  pages: [
    'pages/index/index',
    'pages/home/home'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    //custom:true,
    list: [
      {
        iconPath: './static/tabImg/sign1.png',
        selectedIconPath: './static/tabImg/sign2.png',
        pagePath: 'pages/index/index',
        text: '้ฆ้กต'
      },
      {
        iconPath: './static/tabImg/sign3.png',
        selectedIconPath: './static/tabImg/sign4.png',
        pagePath: 'pages/home/home',
        text: 'ๆ็'
      }
    ],
    // usingComponents: {
    //   customtabbar: "custom-tab-bar/index"
    // },
    color: '#828282',
    selectedColor: '#2469FE',
    backgroundColor: '#fff',
    borderStyle: 'black'
  },

}
