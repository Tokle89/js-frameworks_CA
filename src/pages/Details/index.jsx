import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import url from "../../constants/url";
import Product from "../../components/DetailedCard";
import RenderPageTitle from "../../components/PageTitle";
import Loader from "../../components/Loader";
import ScreenMsg from "../../components/ScreenMsg";

const Details = () => {
  RenderPageTitle({ title: "E-com | Product Details" });
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(url + `/${id}`);
  let content;
  if (isError) {
    content = <ScreenMsg msg="An error has occurred, please try again later" />;
  } else if (isLoading) {
    content = <Loader></Loader>;
  } else {
    content = <Product product={data} />;
  }

  return <main>{content}</main>;
};

export default Details;
