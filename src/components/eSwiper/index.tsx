import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'

import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

import BannerImg from '../../assets/images/index/banner.jpg'

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
      <View className='e-swiper'>
        <Swiper className="swiper"
          // 指示点颜色 默认 rgba(0, 0, 0, .3)
          indicatorColor='#fff'
          // 当前选中的指示点颜色 默认 #000
          indicatorActiveColor='#fa7570'
          // 自动切换时间间隔 默认 5000
          interval={5000}
          // 当前所在滑块的 index 默认 0
          current={0}
          // 滑动方向是否为纵向 默认 false(水平)
          vertical={false}
          // 滑动动画时长 默认 500
          duration={500}
          // 是否采用衔接滑动 默认 false
          circular={true}
          // 是否显示面板指示点 默认 false
          indicatorDots={true}
          // 是否自动切换 默认 false
          autoplay={true}>
          <SwiperItem>
            <View className='swiper-item'>
              <Image src={BannerImg} className="img"></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-item'>
              <Image src={BannerImg} className="img"></Image>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default ESwiper as ComponentClass<PageOwnProps, PageState>
