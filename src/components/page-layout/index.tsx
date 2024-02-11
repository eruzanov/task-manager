import { Layout, ConfigProvider } from "antd";

import { PageLayoutHeader } from "components/page-layout-header";
import { PageLayoutFooter } from "components/page-layout-footer";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
    <ConfigProvider
        theme={{ components: { Layout: { headerPadding: "0 24px" } } }}
    >
        <Layout style={{ minHeight: "100vh" }}>
            <PageLayoutHeader />
            <Layout.Content style={{ margin: 24 }}>{children}</Layout.Content>
            <PageLayoutFooter />
        </Layout>
    </ConfigProvider>
);
