import Route from '@ember/routing/route';
import data from '../data/talks';

export default class MainRoute extends Route {
  model () {
    return data['2020-04-09'];
  }
}
