import type { SelectProps } from "antd";
import { Tag } from "antd";

type TagRender = SelectProps["tagRender"];

import { useBoard } from "entities/board/use-board";

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
