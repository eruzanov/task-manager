import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

import dayjs from "dayjs";
import { Typography, Button, Select, Flex } from "antd";

import { DEFAULT_DATE_FORMAT } from "shared/datetime/constants";

// @ts-expect-error don't exists method months()
const options = dayjs.months().map((label: string, i: number) => ({ value: i, label }));

export const Header: CalendarProps<Dayjs>["headerRender"] = ({
    value,
    onChange,
}) => {
    const setToday = () => onChange(dayjs());
    const onChangeMonth = (value: number) => onChange(dayjs().month(value));

    return (
        <Flex
            gap="small"
            align="center"
            justify="flex-end"
            style={{ padding: "12px 0" }}
        >
            <Typography.Text>
                {value.format(DEFAULT_DATE_FORMAT)}
            </Typography.Text>
            <Button onClick={setToday}>Today</Button>
            <Select
                style={{ width: 100 }}
                value={value.month()}
                onChange={onChangeMonth}
                options={options}
            />
        </Flex>
    );
};
