import { Calendar as AntdCalendar } from "antd";
import type { Dayjs } from "dayjs";

import { DateCell } from "./ui/date-cell";
import { Header } from "./ui/header";

const cellRender = (current: Dayjs) => <DateCell date={current} />

export const Calendar = () => {
    return (
        <AntdCalendar
            mode="month"
            cellRender={cellRender}
            headerRender={Header}
        />
    );
};
