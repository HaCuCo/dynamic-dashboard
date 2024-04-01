import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Hass, HassConfig } from './types';
import { TailwindElement } from './shared/TailwindElement.ts';
import './components/DashboardSection.ts';
import { DashboardSection } from './components/DashboardSection.ts';

class DynamicDashboard extends TailwindElement() {
  @property({ attribute: false })
  public hass!: Hass;

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

    const areas = this.hass.areas;

    return html`
      <div>
        ${Object.keys(areas).map((key) => {
          return new DashboardSection(areas[key]).render();
        })}
      </div>
    `;
  }

  public getCardSize() {
    return 1;
  }
}

// eslint-disable-next-line no-undef
customElements.define('dynamic-dashboard-dev', DynamicDashboard);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards: never;
  }
}

/*
// eslint-disable-next-line no-undef
window.customCards = window.customCards || [];

// eslint-disable-next-line no-undef
window.customCards.push({
  type: 'dynamic-dashboard',
  name: 'Dynamic Dashboard',
  preview: true,
  description: 'Dynamic Dashboard for Home Assistant'
});
*/
