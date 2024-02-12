import { Outlet } from "react-router-dom";
import { Layout, ConfigProvider, theme } from "antd";

import { AppHeader } from "components/app-header";
import { AppFooter } from "components/app-footer";

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
                <AppHeader />
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
                <AppFooter />
            </Layout>
        </ConfigProvider>
    );
};
