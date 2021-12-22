import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* aligns items on vertical-axis */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
        </div>

        <Avatar url="https://earthsky.org/upl/2013/09/sunrise-red-sea-Graham-Telford-e1489764712368.jpg" />
      </header>
    </div>
  );
}
