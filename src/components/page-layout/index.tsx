import { Outlet } from "react-router-dom";
import { Layout, ConfigProvider, theme } from "antd";

import { PageLayoutHeader } from "components/page-layout-header";
import { PageLayoutFooter } from "components/page-layout-footer";

export const PageLayout = () => {
    const { token } = theme.useToken();
    return (
        <ConfigProvider
            theme={{
                token: { colorBorderSecondary: token.colorBorder },
                components: { Layout: { headerPadding: "0 24px" } },
            }}
        >
            <Layout style={{ minHeight: "100vh" }}>
                <PageLayoutHeader />
                <Layout.Content style={{ margin: 24 }}>
                    <Outlet />
                </Layout.Content>
                <PageLayoutFooter />
            </Layout>
        </ConfigProvider>
    );
};
