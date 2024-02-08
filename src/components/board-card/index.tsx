import { Card } from "antd";

interface BoardCardProps {
    id: string;
    title: string;
    content: string;
}

export const BoardCard: React.FC<BoardCardProps> = ({ id, title, content }) => (
    <Card
        title={title}
        extra={<a href={`/task/${id}`}>Edit</a>}
    >
        {content}
    </Card>
);
