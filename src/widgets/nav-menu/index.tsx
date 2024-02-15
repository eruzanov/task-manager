import {
    UnorderedListOutlined,
    ProjectOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const items: MenuProps["items"] = [
    { key: "/backlog", label: "Backlog", icon: <UnorderedListOutlined /> },
    { key: "/", label: "Board", icon: <ProjectOutlined /> },
    { key: "/calendar", label: "Calendar", icon: <CalendarOutlined /> },
];

export const NavMenu = () => {
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
