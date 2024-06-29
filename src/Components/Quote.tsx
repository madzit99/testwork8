import React from "react";
import { Link } from "react-router-dom";

interface Props {
    id:string;
  author: string;
  category: string;
  text: string;
  onDelete: () => void;
}

const Quote:React.FC<Props> = ({id, author, category, text, onDelete}) => {
  return (
    <div className="border border-primary p-3 mt-4 rounded">
      <p>{text}</p>
      <h5>{author}</h5>
      <p>Категория: {category}</p>
      <div className="d-flex gap-2">
        <Link to={`/quotes/${id}/edit`} className="btn btn-primary">Редактировать</Link>
        <button className="btn btn-danger" onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
};

export default Quote;
