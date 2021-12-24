import Head from "next/head";
import Header from "../components/Header";
import Response from "../components/Response";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      <Header />
    </div>
  );
}

export default Search;

// if you include getserverside function => treats this page as a server side rendered page
export async function getServerSideProps(context) {
  const useDummyData = true;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`
      ).then((res) => res.json());

  //after server has rendered => pass the res to client
  return {
    props: {
      results: data,
    },
  };
}
