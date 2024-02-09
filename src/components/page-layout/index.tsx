import { Layout, ConfigProvider, Button, Flex } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { NavMenu } from "components/nav-menu";

const GITHUB_LINK = "https://github.com/eruzanov/task-manager";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
    <ConfigProvider
        theme={{ components: { Layout: { headerPadding: "0 24px" } } }}
    >
        <Layout style={{ minHeight: "100vh" }}>
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
            <Layout.Content style={{ margin: 24 }}>{children}</Layout.Content>
            <Layout.Footer>
                <Flex align="center" justify="center">
                    <Button
                        type="link"
                        href={GITHUB_LINK}
                        icon={<GithubOutlined />}
                        size="large"
                    >
                        Github
                    </Button>
                </Flex>
            </Layout.Footer>
        </Layout>
    </ConfigProvider>
);
