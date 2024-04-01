import { html } from 'lit';
import { SectionData } from './types';
import { BaseRender } from './BaseRender.ts';

export class DashboardSection extends BaseRender<SectionData>{
  constructor(data: SectionData) {
    super(data);
  }
  public render() {
    return html`<p>Hi ${this.data} du</p>`;
  }
}