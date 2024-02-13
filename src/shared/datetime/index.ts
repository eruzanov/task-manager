import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

export const DEFAULT_DATE_FORMAT = "DD MMM YYYY";
