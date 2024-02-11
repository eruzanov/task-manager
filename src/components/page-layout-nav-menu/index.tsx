import { useMemo } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
    UnorderedListOutlined,
    ProjectOutlined,
    CalendarOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
    { key: "/", label: "Backlog", icon: <UnorderedListOutlined /> },
    { key: "/board", label: "Board", icon: <ProjectOutlined /> },
    {
        key: "/calendar",
        label: "Calendar",
        icon: <CalendarOutlined />,
        disabled: true,
    },
];

export const PageLayoutNavMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onClick = ({ key }: { key: string }) => navigate(key);
    const current = useMemo(
        () => items.find((item) => item?.key === location.pathname),
        [location.pathname]
    );

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            onClick={onClick}
            items={items}
            selectedKeys={[current?.key as string]}
        />
    );
};
