import { Layout, ConfigProvider } from "antd";
import { NavMenu } from "components/nav-menu";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{ components: { Layout: { headerPadding: "0 24px" } } }}
        >
            <Layout>
                <Layout.Header
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                    }}
                >
                    <NavMenu />
                </Layout.Header>
                <Layout.Content>
                    <div style={{ margin: 24 }}>{children}</div>
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    );
};
