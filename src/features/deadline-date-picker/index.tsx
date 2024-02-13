import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";

export const DeadlineDatePicker: React.FC<DatePickerProps> = (props) => (
    <DatePicker
        disabledDate={(current) => current && current < dayjs().startOf("day")}
        {...props}
    />
);
