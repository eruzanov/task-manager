import { Link } from "react-router-dom";
import { Card } from "antd";

interface BoardCardProps {
    id: string;
    title: string;
    content: string;
}

export const BoardCard: React.FC<BoardCardProps> = ({ id, title, content }) => (
    <Card title={title} extra={<Link to={`/task/${id}`}>Edit</Link>}>
        {content}
    </Card>
);
