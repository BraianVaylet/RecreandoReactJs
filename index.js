import { render } from './lib/react-dom.js'
import App from './components/app/index.js'

const container = document.querySelector('#root')

render(new App(), container)