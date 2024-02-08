import { Layout, ConfigProvider, theme } from "antd";
import { NavMenu } from "components/nav-menu";

const { Header, Content } = Layout;

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <ConfigProvider
            theme={{ components: { Layout: { headerPadding: "0 24px" } } }}
        >
            <Layout>
                <Header
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                    }}
                >
                    <NavMenu />
                </Header>
                <Content>
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: 280,
                            margin: 24,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};
