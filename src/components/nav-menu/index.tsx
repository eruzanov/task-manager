import { useMemo } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
    UnorderedListOutlined,
    ProjectOutlined,
    PlusOutlined,
} from "@ant-design/icons";

const items = [
    { key: "/", label: "Backlog", icon: <UnorderedListOutlined /> },
    { key: "/board", label: "Board", icon: <ProjectOutlined /> },
    { key: "/task", label: "Create Task", icon: <PlusOutlined /> },
];

export const NavMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onClick = ({ key }: { key: string }) => navigate(key);
    const current = useMemo(
        () => items.find(({ key }) => key === location.pathname) ?? { key: "" },
        [location.pathname]
    );

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            onClick={onClick}
            items={items}
            selectedKeys={[current.key]}
        />
    );
};
