import { render } from '../../react-dom.js'


function renderChildren(children, container) {
  // si el children es un array
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container))
  }
  // si children es único
  return render(children, container)
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback)
}

function setProperties(prop, value, element) {
  // Soporte para eventos
  if(prop.startsWith('on')) {
    const event = prop.replace('on','').toLowerCase()
    return setEvents(element, event, value)
  }
  // soporte para los children
  if (prop === 'children') {
    return renderChildren(value, element)
  }
  // soporte para atributos
  const attribute = value
  return element.setAttribute(prop, attribute)
}

export function createElement(type, props, content) {
  // Creando tipo de elemento
  const element = document.createElement(type)
  // Contenido
  if (content) {
    element.textContent = content
  }
  // Propiedades
  if (props) {
    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element ))
  }
  return element
}

