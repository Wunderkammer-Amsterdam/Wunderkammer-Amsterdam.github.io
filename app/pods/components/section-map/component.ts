import Component from '@glimmer/component';
import mapStyle from '../../../config/google-map-style/renault';

interface SectionMapArgs {}

export default class SectionMap extends Component<SectionMapArgs> {
  lat: number = 52.362;
  lng: number = 4.86325;
  zoom: number = 15;

  mapStyle = mapStyle;
}
