import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

export const useDateTime = () => {
    return dayjs;
};
