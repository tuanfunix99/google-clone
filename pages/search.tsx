import React, { Fragment } from "react";
import { GetServerSidePropsContext } from "next";
import SearchHeader from "../components/search/SearchHeader";
import SearchResults from "../components/search/SearchResults";
import { useRouter } from "next/router";
import ImageResults from "../components/search/ImageResults";

type PropsType<T> = T extends Promise<{ props: infer Props }> ? Props : never;

const Search = ({ results }: PropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const searchType = router.query.searchType;

  return (
    <Fragment>
      <SearchHeader />
      {results && !searchType && <SearchResults results={results} />}
      {results && searchType && <ImageResults results={results} />}
    </Fragment>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const searchType = context.query.searchType;
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.searchKey as string}${
      searchType ? `&searchType=${searchType}` : ""
    }`
  );
  const data = await res.json();
  return {
    props: {
      results: data.error ? null : data,
    },
  };
};

export default Search;
