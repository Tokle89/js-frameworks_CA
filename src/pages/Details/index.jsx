import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import url from "../../constants/url";
import Product from "../../components/DetailedCard";

const Details = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(url + `/${id}`);
  let content;
  if (isError) {
    content = <p>Error</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = <Product product={data} />;
  }

  return <main>{content}</main>;
};

export default Details;
