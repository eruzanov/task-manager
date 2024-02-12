import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

import { useDateTime } from "shared/datetime/use-date-time";

export const DeadlineDatePicker: React.FC<DatePickerProps> = (props) => {
    const datetime = useDateTime();

    return (
        <DatePicker
            disabledDate={(current) =>
                current && current < datetime().startOf("day")
            }
            {...props}
        />
    );
};
