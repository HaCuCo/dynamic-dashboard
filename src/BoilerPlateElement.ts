import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HassConfig } from './types';
import { HomeAssistant } from 'custom-card-helpers';
import { TailwindElement } from './shared/TailwindElement.ts';

class BoilerPlateElement extends TailwindElement() {
  @property({ attribute: false })
  public hass!: HomeAssistant;

  @state()
  private config!: HassConfig;

  public setConfig(config: HassConfig): void {
    if (!config) {
      throw new Error('You need a config');
    }

    this.config = config;
  }

  render() {
    if (!this.hass) throw new Error('No Hass found');
    if (!this.config) throw new Error('No Config found');

    return html`
      <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  }

  public getCardSize() {
    return 1;
  }
}

// eslint-disable-next-line no-undef
customElements.define('boilerplate-element', BoilerPlateElement);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards: any;
  }
}

// eslint-disable-next-line no-undef
window.customCards = window.customCards || [];

// eslint-disable-next-line no-undef
window.customCards.push({
  type: 'boilerplate-element',
  name: 'Boilerplate Element',
  preview: true,
  description: 'Boilerplate Element'
});
