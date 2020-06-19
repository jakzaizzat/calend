import moment from "moment";
import { uuid } from "uuidv4";

export function intervals(startString, endString, interval = 15) {
  const start = moment(startString, "YYYY-MM-DD hh:mm a");
  const end = moment(endString, "YYYY-MM-DD hh:mm a");

  // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
  // note that 59 will round up to 60, and moment.js handles that correctly
  start.minutes(Math.ceil(start.minutes() / interval) * interval);

  let results = [];

  const current = moment(start);

  while (current <= end) {
    results.push(current.format("YYYY-MM-DD HH:mm"));
    current.add(interval, "minutes");
  }

  return results.map((result) => {
    return {
      id: uuid(),
      value: result,
    };
  });
}
