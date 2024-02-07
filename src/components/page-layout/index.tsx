import { Layout } from "antd";
import { NavMenu } from "../nav-menu";

const { Header, Content } = Layout;

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
    <Layout>
        <Header>
            <NavMenu />
        </Header>
        <Content>{children}</Content>
    </Layout>
);
