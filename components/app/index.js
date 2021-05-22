import { Component, createElement } from '../../lib/react/index.js'
import Header from '../header/index.js'
import User from '../user/index.js'
import Wrapper from '../wrapper/index.js'

const imgUser = './images/user.png'

class App extends Component {
  render() {
    const header = new Header({})
    const user = new User({
      name: 'User',
      avatar: imgUser,
      counter: 0,
    })    
    return createElement('div', {
      class: 'app',
      children: new Wrapper({
        children: [
          header,
          user
        ]
      })
    })
  }
}

export default App
