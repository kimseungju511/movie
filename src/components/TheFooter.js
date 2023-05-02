import { Component } from '../core/assets'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github } = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a href="#/" class="foo"><span>OMDbAPI</span>.COM</a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          KimSeungJu
        </a>
      </div>
    `
  }
}
