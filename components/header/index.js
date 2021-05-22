import { Component, createElement } from '../../lib/react/index.js'
import { HeaderStyled, TitleStyled } from './header-styled.js'

class Header extends Component {
  displayName = 'Header'
  state = {
    mode: 'light',
    counter: this.props.counter
  }    
  render() {     
    return HeaderStyled({            
      children: [
        TitleStyled({}, 'Recreando ReactJs con JavaScript Vainilla POO'),
      ]
    }, '')
  }
}

export default Header