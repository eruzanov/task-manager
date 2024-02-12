import { useMemo } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

import { useStatuses } from "shared/api/statuses/use-satuses";
import { StatusTag } from "./status-tag";

export const SelectStatus: React.FC<SelectProps> = (props) => {
    const { statuses } = useStatuses();
    const selectOptions = useMemo(
        () =>
            statuses.map(({ id, title }) => ({
                value: id,
                label: title,
            })),
        [statuses]
    );

    return (
        <Select
            mode={props.mode}
            tagRender={StatusTag}
            options={selectOptions}
            {...props}
        />
    );
};
