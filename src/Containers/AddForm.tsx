import { useState } from "react";
import { QuoteType } from "../types";
import { categories } from "../Constants/Constants";
import { Button, Form } from "react-bootstrap";
import axiosApi from "../axiosApi";
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader/Preloader";

const AddForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [quote, setQuote] = useState<QuoteType>({
    author: "",
    category: "",
    text: "",
    id: Date.now().toString(),
  });

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
      await axiosApi.post("quotes.json", quote);
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-50 mx-auto mt-3">
      <h2>Добавить новую цитату</h2>

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
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="select" className="mt-3">
            <Form.Label>Категория:</Form.Label>
            <Form.Select name="category" required onChange={onChange}>
              <option>Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-4" controlId="textArea">
            <Form.Label>Текст цитаты</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="text"
              onChange={onChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            Отправить
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddForm;
