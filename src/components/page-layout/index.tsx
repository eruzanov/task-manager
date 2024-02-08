import { Layout, theme } from "antd";
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
        <Layout>
            <Header>
                <NavMenu />
            </Header>
            <Content style={{ padding: "0 48px" }}>
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
    );
};
