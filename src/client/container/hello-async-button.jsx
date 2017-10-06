// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../components/button'

const mapStateToProps = state => ({
  label: 'Say hello asynchronously and send 1234',
})

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(sayHelloAsync(1234))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button)
