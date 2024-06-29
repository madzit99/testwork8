import { QuotesType } from "../types";
import Quote from "./Quote";

interface Props {
  quotes: QuotesType;
}

const QuotesList:React.FC<Props> = ({quotes}) => {

  return (
    <div>
      {
        Object.keys(quotes).map((key) => (
            <Quote key={key} text={quotes[key].text} author={quotes[key].author} category={quotes[key].category} />
        ))
      }
    </div>
  );
};

export default QuotesList;
