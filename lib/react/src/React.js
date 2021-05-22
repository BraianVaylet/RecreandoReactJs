class Component {
  constructor(props = {}, state = {}) {
    this.props = props
    this.state = state
  }

  update() {}
  #updater(){
    this.update(this.render())   
    this.componentDidUpdate() 
  }

  // antes del renderizado del componente
  componentWillMount() {}
  // cuando el componente se renderizo
  componentDidMount() {}
  // cuando el componente se actualizo
  componentDidUpdate() {}

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater()
  }

  build() {
    this.componentWillMount()
    return this.render()
  }
}

export {
  Component
}