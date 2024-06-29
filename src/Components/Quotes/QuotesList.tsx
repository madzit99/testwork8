import { QuotesType } from "../../types";
import Quote from "./Quote";

interface Props {
  quotes: QuotesType;
  onDelete: (quoteId: string) => void;
}

const QuotesList: React.FC<Props> = ({ quotes, onDelete }) => {
  return (
    <div>
      {Object.keys(quotes).map((key) => (
        <Quote
          key={key}
          id={key}
          text={quotes[key].text}
          author={quotes[key].author}
          category={quotes[key].category}
          onDelete={() => onDelete(key)}
        />
      ))}
    </div>
  );
};

export default QuotesList;
