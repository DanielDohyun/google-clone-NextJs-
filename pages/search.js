import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  // console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

// if you include getserverside function => treats this page as a server side rendered page
export async function getServerSideProps(context) {
  const useDummyData = false;

  //pagination
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      )
        .then((res) => res.json())
        .catch((e) => console.log(e));

  //after server has rendered => pass the res to client
  return {
    props: {
      results: data,
    },
  };
}
