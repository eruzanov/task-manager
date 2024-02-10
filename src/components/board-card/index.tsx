import { Link } from "react-router-dom";
import { Card } from "antd";

interface BoardCardProps {
    id: string;
    title: string;
    content: string;
}

export const BoardCard: React.FC<BoardCardProps> = ({ id, title, content }) => (
    <Card title={<Link to={`/task/${id}`}>{title}</Link>}>{content}</Card>
);
