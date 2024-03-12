import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, isLoading, isError } = useFetch("https://jsonplaceholder.typicode.com/posts");

  let content;

  if (isError) {
    content = <p>Error</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  return (
    <main>
      <h1>Home</h1>
      <div>{content}</div>
    </main>
  );
};
export default Home;
