import { createElement } from '../react/index.js'
import htmlTags from './tags.js'

const styled = {}

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice()
  dynamicValues.forEach((value, index) => {
    style[index] += value(props)
  })
  return style.join('')
}

htmlTags.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props)
      return createElement(tag, {
        ...props,
        style,
      }, content) 
    }
  }
})

export default styled
