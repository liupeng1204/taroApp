import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'
import { AtButton } from 'taro-ui'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))

export default class User extends Component {

  config = {
    navigationBarTitleText: '个人信息'
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
      <View className='page_university'>
        user
        <View>
          counter: {this.props.counter.num}
        </View>
        <AtButton size='small' onClick={this.props.add}>add</AtButton>
        <AtButton size='small' onClick={this.props.dec}>dec</AtButton>
        <AtButton size='small' onClick={this.props.asyncAdd}>asyncAdd</AtButton>
      </View>
    )
  }
}
