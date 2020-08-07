import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class BezettingRoute extends Route {
  @service headData;

  beforeModel() {
    this.headData.touchIcon = 'icon-occupancy';
  }

  model() {
    return fetch('/occupancy.php')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then((dataPoints) => {
        return dataPoints.sortBy('on').pop();
      });
  }
}
