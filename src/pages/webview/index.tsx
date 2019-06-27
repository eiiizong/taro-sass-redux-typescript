import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'

import './index.scss'

type PageStateProps = {
}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface WebViewPages {
  props: IProps;
}

class WebViewPages extends Component {
  config: Config = {
    navigationBarTitleText: this.$router.params.name
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() {

    interface UrlParams {
      name: string,
      url: string
    }

    const urlParams: UrlParams = this.$router.params

    Taro.setNavigationBarTitle({
      title: urlParams.name
    })
  }

  componentDidHide() { }
  render() {
    return (
      <View className='webview'>
        <WebView src={this.$router.params.url} />
      </View>
    )
  }
}

export default WebViewPages as ComponentClass<PageOwnProps, PageState>
