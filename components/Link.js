import { ROOT_DIV, TITLE } from '../config/main.js'
import { ROUTES } from '../config/routes.js'

const template = document.getElementById('t-link')

export const navigateTo = to => {
  ROOT_DIV.innerHTML = ROUTES[to]
  document.title = to ? `${to} - ${TITLE}` : TITLE
}

class Link extends HTMLElement {
  constructor() {
    super()
    this.appendChild(template.content.cloneNode(true))
    this.to = this.getAttribute('href')
  }

  connectedCallback() {
    this.onclick = this.onNavigate
  }

  onNavigate = ({ target: { to } }) => {
    window.history.pushState({}, to, window.location.origin + '/' + to)
    navigateTo(to)
  }
}

customElements.define('link-comp', Link)
export default Link
