import { Component } from 'react'
import { Provider } from 'mobx-react'

import dataStore from './store/counter'

import './app.styl'

const store = {
  dataStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  onLaunch(options){
    console.log("onLaunch",options);
  }

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
