import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index'
import './app.scss'

const store = configStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/university_profession/index',
      'pages/aspiration/index',
      'pages/user/index',
      'pages/university_profession/university/query/index',
      'pages/university_profession/profession/query/index',
      'pages/aspiration/copy/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "金榜首页",
        iconPath: "./public/img/sb.png",
        selectedIconPath: "./public/img/sb.png"
      }, {
        pagePath: "pages/university_profession/index",
        text: "高校专业",
        // iconPath: "./images/tab/cart.png",
        // selectedIconPath: "./images/tab/cart-active.png"
      }, {
        pagePath: "pages/aspiration/index",
        text: "志愿填报",
        // iconPath: "./images/tab/user.png",
        // selectedIconPath: "./images/tab/user-active.png"
      }, {
        pagePath: "pages/user/index",
        text: "个人中心",
        // iconPath: "./images/tab/user.png",
        // selectedIconPath: "./images/tab/user-active.png"
      }],
      color: '#999',
      selectedColor: '#000',
      backgroundColor: '#fff',
      borderColor: '#ccc'
    }
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
