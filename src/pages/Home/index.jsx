import useFetch from "../../hooks/useFetch";
import { Main } from "./index.styles";
import Card from "../../components/Card";
import url from "../../constants/url";
import RenderPageTitle from "../../components/PageTitle";
import Loader from "../../components/Loader";
import ScreenMsg from "../../components/ScreenMsg";

const Home = () => {
  RenderPageTitle({ title: "E-com | Home" });
  const { data, isLoading, isError } = useFetch(url);

  let content;

  if (isError) {
    content = <ScreenMsg msg="An error has occurred, please try again later" />;
  } else if (isLoading) {
    content = <Loader></Loader>;
  } else {
    content = data.map((post) => <Card data={post} key={post.id}></Card>);
  }
  return (
    <Main>
      <h1>Shopping made easy</h1>
      <h2>Products:</h2>
      <div>{content}</div>
    </Main>
  );
};
export default Home;
