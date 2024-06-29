export interface QuoteType {
  author: string;
  category: string;
  text: string;
  id: string;
}

export interface QuotesType {
    [Id:string]: QuoteType;
}