import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
    UnorderedListOutlined,
    ProjectOutlined,
    PlusOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
    { key: "/", label: "List of tasks", icon: <UnorderedListOutlined /> },
    { key: "/board", label: "Board", icon: <ProjectOutlined /> },
    { key: "/task", label: "Create Task", icon: <PlusOutlined /> },
];

export const NavMenu = () => {
    const navigate = useNavigate();
    const onClick = ({ key }: { key: string }) => navigate(key);

    return (
        <Menu theme="dark" mode="horizontal" onClick={onClick} items={items} />
    );
};
