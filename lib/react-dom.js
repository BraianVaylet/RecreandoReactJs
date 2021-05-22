function render(element, container) {  
  // debo poder recibir como elemento una clase(componente), un html o un string  
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element)
  }
  // re-renderizado
  function reRender(newChild) {
    container.replaceChild(newChild, childElement)
    childElement = newChild
  }
  // si es una clase
  element.update = reRender
  let childElement = element.build()
  container.append(childElement)
  element.componentDidMount()
}

export {
  render
}