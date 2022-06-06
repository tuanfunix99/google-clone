import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useState } from "react";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [key, setKey] = useState("");

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (key.trim().length === 0) {
      return;
    }
    window.location.replace(`/search?searchKey=${key}`);
  };

  return (
    <Fragment>
      <Head>
        <title>Google v3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <form
        className="flex flex-col items-center mt-40"
        onSubmit={onSearchHandler}
      >
        <img
          width="300"
          // objectFit="cover"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            // ref={searchInputRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKey(e.target.value)
            }
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button
            // onClick={search}
            className="btn"
          >
            Google Search
          </button>
          <button
            // onClick={randomSearch}
            className="btn"
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </Fragment>
  );
};

export default Home;
