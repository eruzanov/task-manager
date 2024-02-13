import { Layout, Divider } from "antd";

import { NavMenu } from "../../widgets/nav-menu";
import { CreateTask } from "widgets/create-task";

export const Header = () => {
    return (
        <Layout.Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            <NavMenu />
            <Divider type="vertical" />
            <CreateTask />
        </Layout.Header>
    );
};
