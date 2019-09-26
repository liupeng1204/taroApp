import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import homeImg from '../../public/img/bg_0.png'
import universityImg from '../../public/img/bg_1.png'
import professionImg from '../../public/img/bg_2.png'
import { AtAvatar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='page_home'>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='home'>
              <Image src={homeImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='university'>
              <Image src={universityImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='profession'>
              <Image src={professionImg} />
            </View>
          </SwiperItem>
        </Swiper>
        <View className='at-row top-items'>
          <View className='at-col at-col-4'>
            <AtAvatar circle image={homeImg} className='center-x' />
            高校查询
          </View>
          <View className='at-col at-col-4'>
            <AtAvatar circle image={homeImg} className='center-x' />
            专业查询
          </View>
          <View className='at-col at-col-4'>
            <AtAvatar circle image={homeImg} className='center-x' />
            志愿填报
          </View>
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>高考头条</View>
            <View className='at-article__p'>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
              <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
