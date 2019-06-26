import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 选择地址
  choiceAddress() {
    Taro.chooseLocation().then(res => console.log(res)).catch(err => console.log(err))
  }
  // 选择收货地址
  choiceAddress2() {
    Taro.chooseAddress().then(res => console.log(res)).catch(err => console.log(err))
  }
  render() {
    return (
      <View className='address'>
        <Button onClick={this.choiceAddress.bind(this)}>选择地址</Button>
        <Button onClick={this.choiceAddress2.bind(this)}>选择收货地址</Button>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
