import Route from '@ember/routing/route';
import data from '../data/talks';

export default class MainRoute extends Route {
  model () {
    const date = Object.keys(data).sort().reverse()[0];
    return {
      meetup: data[date],
      dates: Object.keys(data).sort().reverse(),
      currentDate: date
    }
  }
}
