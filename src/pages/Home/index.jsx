import useFetch from "../../hooks/useFetch";
import { Main } from "./index.styles";
import Card from "../../components/Card";
import url from "../../constants/url";

const Home = () => {
  const { data, isLoading, isError } = useFetch(url);

  let content;

  if (isError) {
    content = <p>Error</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
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
