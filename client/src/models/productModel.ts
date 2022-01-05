export default interface productModel {
  _id?: string;
  name: string;
  image: Array<string>;
  price: number;
  sold: number;
  inStock: number;
  discount: number;
  desc: string;
  numReviews: number;
  category?: string;
  brand?: string;
  review: Array<Type>;
}
interface Type {
  rateStar?: number;
  comment?: string;
  user?: string;
}