import { useEffect, useState } from "react";
import { QuotesType } from "../types";
import axiosApi from "../axiosApi";
import QuotesList from "../Components/QuotesList";
import { useParams } from "react-router-dom";
import Preloader from "../Components/Preloader";

const Home = () => {
  const [quotes, setQuotes] = useState<QuotesType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { category } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [category]);

  const onDelete = async (quoteId: string) => {
    await axiosApi.delete("quotes/" + quoteId + ".json");
    await fetchData();
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {quotes && Object.keys(quotes).length > 0 ? (
            <QuotesList onDelete={onDelete} quotes={quotes} />
          ) : (
            <h1>Нет цитат</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
