import { HomeAssistant, LovelaceConfig } from 'custom-card-helpers';
import { SectionData } from './components/types';

export interface HassConfig extends LovelaceConfig {}

export interface Hass extends HomeAssistant {
  areas: Areas;
}

interface Areas {
  [key: string]: AreaData;
}

interface AreaData extends SectionData{
}