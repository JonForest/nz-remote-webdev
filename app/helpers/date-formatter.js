import { helper } from '@ember/component/helper';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function dateFormatter([isoDate]/*, hash*/) {
  const workingDate = new Date(isoDate);
  if (workingDate.toString() == 'Invalid Date') {
    throw new Error(`Invalid date string passed: ${isoDate}`);
  }

  const options = { hour12: true, hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dtFormat = new Intl.DateTimeFormat('en-NZ', options);
  return `${dtFormat.format(workingDate)}`
}

export default helper(dateFormatter);
