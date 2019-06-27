import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'

import ESwiperComponent from '../../components/eSwiper'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface ESwiper {
  props: IProps;
}


class ESwiper extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <ESwiperComponent>
        ESwiper
      </ESwiperComponent>
    )
  }
}

export default ESwiper as ComponentClass<PageOwnProps, PageState>
