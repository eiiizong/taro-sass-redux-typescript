import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

// import nimiprogromConfig from './miniprogram.config'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/my/index',
      'pages/index/index',
      'pages/address/index',
      'pages/redux/index',
      'pages/orders/index',
      'pages/webview/index',
      'pages/shoppingCar/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fa7570',
      navigationBarTitleText: 'Eiiizong',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#dbdbdb',
      backgroundColor: '#fafafa',
      selectedColor: '#fa7570',
      borderStyle: 'white',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index',
          iconPath: 'assets/images/tabbar/home.png',
          selectedIconPath: 'assets/images/tabbar/home-active.png'
        },
        {
          text: '购物车',
          pagePath: 'pages/shoppingCar/index',
          iconPath: 'assets/images/tabbar/shopping-car.png',
          selectedIconPath: 'assets/images/tabbar/shopping-car-active.png'
        },
        {
          text: '订单',
          pagePath: 'pages/orders/index',
          iconPath: 'assets/images/tabbar/orders.png',
          selectedIconPath: 'assets/images/tabbar/orders-active.png'
        },
        {
          text: '我的',
          pagePath: 'pages/my/index',
          iconPath: 'assets/images/tabbar/my.png',
          selectedIconPath: 'assets/images/tabbar/my-active.png'
        }
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

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
