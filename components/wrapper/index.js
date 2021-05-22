import { Component, createElement } from '../../lib/react/index.js'

class Wrapper extends Component {
  render() {
    const { children } = this.props
    return createElement('div', {
      class: 'wrapper',
      children: [
        ...children,
        createElement('h5', { class: 'author' }, 'Braian D. Vaylet')
      ],
    })
  }
}

export default Wrapper