import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { RequestAPI } from '../../utils/request'

import ESwiper from '../../components/eSwiper'
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

  componentDidShow() {
    this.requestShopData()
  }

  componentDidHide() { }
  requestShopData() {
    const url = "shops"
    const data = {}
    const header = {}
    const method = "POST"
    const success = data => {
      console.log(data)
    }
    const fail = err => {
      console.log(err)
    }

    RequestAPI(url, data, header, method, success, fail)
  }
  render() {
    return (
      <View className='index'>
        <ESwiper />
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
