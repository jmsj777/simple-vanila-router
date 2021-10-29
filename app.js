import { navigateTo } from './components/Link.js'

navigateTo('')

window.onpopstate = () => {
  navigateTo(window.location.pathname)
}
