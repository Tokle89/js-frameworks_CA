import useFetch from "../../hooks/useFetch";
import { StyledH1, ProductContainer } from "./index.styles";

const Home = () => {
  const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");

  let content;

  if (isError) {
    content = <p>Error</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = data.map((post) => <p key={post.id}>{post.title}</p>);
  }
  return (
    <main>
      <StyledH1>Home</StyledH1>
      <ProductContainer>{content}</ProductContainer>
    </main>
  );
};
export default Home;
