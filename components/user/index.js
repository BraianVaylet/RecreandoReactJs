import { Component, createElement } from '../../lib/react/index.js'
import { UserStyled, AvatarStyled } from './user-styled.js'
import { theme } from '../../styles/theme.js' 

class User extends Component {
  displayName = 'User'
  state = {
    mode: 'light',
    counter: this.props.counter
  }  
  componentWillMount() {
    console.log(`1.el componente ${this.displayName} se va a renderizar`)
  }
  componentDidMount() {
    console.log(`2.el componente ${this.displayName} se renderizó`)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    this.setMode(mediaQuery)
    mediaQuery.addEventListener('change', this.setMode)
  }
  componentDidUpdate() {
    console.log(`3.el componente ${this.displayName} se actualizó`)
  }
  setMode = (event) => {    
    if(event.matches) {
      return this.setState({
        mode: 'dark'
      })
    }
    this.setState({
      mode: 'light'
    })
  }
  handleClick = (event) => {
    console.log(this.state.age)
    this.setState({
      counter: this.state.counter + 1,
    })
    this.setMode()
  }
  render() {
    const { avatar, name } = this.props
    const { counter, mode } = this.state
    const colors = (mode === 'light') ? theme.light : theme.dark       
    return UserStyled({
      ...colors,
      onClick: this.handleClick,
      children: [
        AvatarStyled({
          src: avatar,
        }),
        createElement('h2', null, `Hola soy ${name}`),
        createElement('p', null, `Contador:  ${counter}`)
      ]
    }, '')
  }
}

export default User