import { Component } from '../core/assets'

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */ `
    <h1>
      404
    </h1>
    <h3>
        Page Not Found!
    </h3>
    `
  }
}
