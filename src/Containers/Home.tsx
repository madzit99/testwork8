import { useEffect, useState } from "react";
import { QuotesType } from "../types";
import axiosApi from "../axiosApi";
import QuotesList from "../Components/QuotesList";

const Home = () => {
  const [quotes, setQuotes] = useState<QuotesType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get("quotes.json");
        setQuotes(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    void fetchData();
  }, []);

  return (
    <div>
      {quotes ? (
      <QuotesList quotes={quotes} />) : (
        <h1>Нет цитат</h1>
      )}
    </div>
  );
};

export default Home;
