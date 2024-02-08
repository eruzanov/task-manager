import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
    { key: "/", label: "List of tasks" },
    { key: "/board", label: "Board" },
    { key: "/task", label: "Create Task" },
];

export const NavMenu = () => {
    const navigate = useNavigate();
    const onClick = ({ key }: { key: string }) => navigate(key);

    return (
        <Menu theme="dark" mode="horizontal" onClick={onClick} items={items} />
    );
};
