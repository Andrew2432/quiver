import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

function convertTimeFromNow(time: string) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(relativeTime);

  return dayjs(time).utc(true).tz('Asia/Kolkata').fromNow();
}

export default convertTimeFromNow;
