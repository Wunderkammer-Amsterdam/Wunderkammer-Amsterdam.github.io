import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service router;
  @service homeNav;

  @action
  sectionInserted(element) {
    this.homeNav.onSectionsReady(element);
  }

  @action
  previousSection(event) {
    //event.preventDefault();
  }

  @action
  nextSection(event) {
    //event.preventDefault();
  }
}
