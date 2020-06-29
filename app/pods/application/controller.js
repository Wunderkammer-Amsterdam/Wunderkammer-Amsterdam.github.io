import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  previousSection(event) {
    //event.preventDefault();
  }

  @action
  nextSection(event) {
    //event.preventDefault();
  }
}
