import moment from "moment";
export function intervals(startString, endString, interval = 15) {
  const start = moment(startString, "YYYY-MM-DD hh:mm a");
  const end = moment(endString, "YYYY-MM-DD hh:mm a");

  // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
  // note that 59 will round up to 60, and moment.js handles that correctly
  start.minutes(Math.ceil(start.minutes() / interval) * interval);

  let result = [];

  const current = moment(start);

  while (current <= end) {
    result.push(current.format("YYYY-MM-DD HH:mm"));
    current.add(interval, "minutes");
  }

  return result;
}
