import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { QuoteType } from "../types";
import axiosApi from "../axiosApi";
import Preloader from "../Components/Preloader";
import { categories } from "../Constants/Constants";

const EditForm: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType>({
    id: "",
    category: "",
    author: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        if (id) {
          const response = await axiosApi.get(`quotes/${id}.json`);
          setQuote({ ...response.data, id: id });
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchQuote();
  }, [id]);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setQuote((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.put(`quotes/${quote.id}.json`, quote);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <h2>Редактировать цитату</h2>
      {loading ? (
        <Preloader />
      ) : (
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="author">
            <Form.Label>Автор:</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Введите автора"
              onChange={onChange}
              value={quote.author}
              required
            />
          </Form.Group>
          <Form.Group controlId="select" className="mt-3">
            <Form.Label>Категория:</Form.Label>
            <Form.Select
              name="category"
              required
              onChange={onChange}
              value={quote.category}
            >
              <option>Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-4" controlId="textArea">
            <Form.Label>Введите цитату</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="text"
              onChange={onChange}
              value={quote.text}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            Редактировать
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditForm;