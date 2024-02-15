import { Layout, ConfigProvider, theme } from "antd";
import { Outlet } from "react-router-dom";

import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import "./styles.css";

export const AppLayout = () => {
    const { token } = theme.useToken();
    return (
        <ConfigProvider
            theme={{
                token: { colorBorderSecondary: token.colorBorder },
                components: { Layout: { headerPadding: "0 24px" } },
            }}
        >
            <Layout style={{ minHeight: "100vh" }}>
                <Header />
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
                <Footer />
            </Layout>
        </ConfigProvider>
    );
};
