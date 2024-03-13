import useFetch from "../../hooks/useFetch";
import { Main } from "./index.styles";
import Card from "../../components/Card";

const Home = () => {
  const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");

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
      <h1>Home</h1>
      <div>{content}</div>
    </Main>
  );
};
export default Home;
