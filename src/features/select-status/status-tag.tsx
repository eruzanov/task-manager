import type { SelectProps } from "antd";
import { Tag } from "antd";

import { useBoard } from "entities/board/use-board";

type TagRender = SelectProps["tagRender"];

export const StatusTag: TagRender = ({ label, value, onClose }) => {
    const { COLORS } = useBoard();
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            color={COLORS[value]}
            onMouseDown={onPreventMouseDown}
            closable
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {label}
        </Tag>
    );
};
