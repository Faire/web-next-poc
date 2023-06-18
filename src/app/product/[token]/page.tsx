type Props = {
  params: {
    token: string;
  };
};

const ProductDetails: React.FC<Props> = ({ params: { token } }) => {
  return <div>{token}</div>;
};

export default ProductDetails;
