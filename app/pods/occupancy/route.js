import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class BezettingRoute extends Route {
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
        return dataPoints.sortBy('on').pop()['occupancy'];
      });
  }
}
