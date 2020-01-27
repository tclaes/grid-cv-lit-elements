import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cv-skill')
export class Skill extends LitElement {
  @property() name = 'HTML';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}