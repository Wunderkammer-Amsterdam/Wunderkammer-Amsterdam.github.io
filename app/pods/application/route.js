import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service metrics;
  @service router;
  @service moment;
  @service intl;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  }

  beforeModel() {
    super.beforeModel(...arguments);

    this.intl.setLocale(['nl-nl']);
    this.moment.setLocale('nl');
  }
}
