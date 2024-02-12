import { Divider, Tag } from "antd";

interface ColumnTitle {
    color: string;
    title: string;
}

export const ColumnTitle: React.FC<ColumnTitle> = ({ color, title }) => (
    <Divider orientation="left" orientationMargin="0">
        <Tag color={color}>{title}</Tag>
    </Divider>
);
