import React from 'react'
import { connect } from 'react-redux'
import setTitle from '../../redux/actions/layout'
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {
    // dom加载之前
  }
  componentDidMount () {
    // 访问真实的DOM
  }
  componentWillReceiveProps(nextProps){
    // 父组件更新子组件props时
  }
  shouldComponentUpdate(nextProps,nextState){
    // 是否应该更新组件，默认返回true。当返回false时，后期函数就不会调用，组件不会在次渲染。
  }
  componentDidUpdate() {
    // 在更新真实的DOM成功后调用
  }
  componentWillUnmount() {
    // 销毁阶段
  }
  render() {
    return (
      <div>Home</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return dispatch(setTitle("Home"));
}
export default connect(null, mapDispatchToProps)(Home);