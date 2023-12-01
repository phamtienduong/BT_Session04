import React, { Component } from 'react'
import Form from './components/Form'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0, // cơ chế state trong classcomponent merge, function replace
    }
  }
  componentDidUpdate=()=>{
    console.log("componentDidUpdate được thực thi");
  }
  componentWillUpdate=()=>{
    console.log("componentWillUpdate bắt đầu được gọi");
  }
  shouldComponentUpdate=()=>{
    console.log("shouldComponentUpdate được thực thi");
    return true
  }
  componentWillMount = () => {
    console.log("componentWillMount bắt đầu chạy");
  }
  componentDidMount = () => {
    console.log("sau khi component render lần đầu tiên chạy đến didMount ");
    // nơi để call API
  }
  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log("component bắt đầu render ");
    return (
      <>
        Count{this.state.count}
        <button onClick={this.increaseCount}>Click</button> <br />
        <Form></Form>
      </>
    )
  }
}
