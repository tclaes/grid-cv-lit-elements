import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cv-name')
export class Name extends LitElement {
  @property() name = 'Claes';
  @property() firstName = "Tom"

  render() {
    return html`
    <h1>${this.firstName} ${this.name}
    `;
  }
}