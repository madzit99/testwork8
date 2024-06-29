import React from "react";

interface Props {
  author: string;
  category: string;
  text: string;
}

const Quote:React.FC<Props> = ({author, category, text}) => {
  return (
    <div className="border border-primary p-3 mt-4 rounded">
      <p>{text}</p>
      <h5>{author}</h5>
      <p>Категория: {category}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-primary">Редактировать</button>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </div>
  );
};

export default Quote;
