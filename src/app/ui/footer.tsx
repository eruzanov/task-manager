import { GithubOutlined } from "@ant-design/icons";
import { Layout, Button, Flex } from "antd";

const GITHUB_LINK = "https://github.com/eruzanov/task-manager";

export const Footer = () => {
    return (
        <Layout.Footer>
            <Flex align="center" justify="center">
                <Button
                    type="link"
                    href={GITHUB_LINK}
                    target="_blank"
                    icon={<GithubOutlined />}
                    size="large"
                >
                    Github
                </Button>
            </Flex>
        </Layout.Footer>
    );
};
