import { fetchProductDetails } from "./utils";

type Props = {
  params: {
    token: string;
  };
};

const ProductDetails: React.FC<Props> = async ({ params: { token } }) => {
  const details = await fetchProductDetails(token);
  return <div>{JSON.stringify(details)}</div>;
};

export default ProductDetails;
