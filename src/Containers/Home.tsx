import { useEffect, useState } from "react";
import { QuotesType } from "../types";
import axiosApi from "../axiosApi";
import QuotesList from "../Components/QuotesList";
import { useParams } from "react-router-dom";

const Home = () => {
  const [quotes, setQuotes] = useState<QuotesType | null>(null);

  const { category } = useParams();

  const fetchData = async () => {
    try {
      if (category) {
        const response =
          await axiosApi.get(`quotes.json?orderBy="category"&equalTo="${category}"
        `);
        setQuotes(response.data);
      } else {
        const response = await axiosApi.get("quotes.json");
        setQuotes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [category]);

  return (
    <div>{quotes ? <QuotesList quotes={quotes} /> : <h1>Нет цитат</h1>}</div>
  );
};

export default Home;
