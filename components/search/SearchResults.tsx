import React from "react";
import Parser from 'html-react-parser';

const SearchResults = ({ results }: { results: any }) => {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result: any) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="text-xl font-medium text-blue-800 truncate">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      {/* <PaginationButtons /> */}
    </div>
  );
};

export default SearchResults;
