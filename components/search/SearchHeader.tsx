import React, { useState } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "../User";
import SearchheaderOptions from "./SearchheaderOptions";

const SearchHeader = () => {
  const router = useRouter();

  const [key, setKey] = useState<string>(router.query.searchKey as string);

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (key.trim().length === 0) {
      return;
    }
    window.location.replace(`/search?searchKey=${key}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <img
          onClick={() => router.replace("/")}
          width="120"
          //   objectFit="contain"
          height="40"
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <form
          className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg"
          onSubmit={onSearchHandler}
        >
          <input
            type="text"
            defaultValue={key}
            // ref={searchInputRef}
            className="w-full focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKey(e.target.value)
            }
          />
          <XIcon
            onClick={() => setKey("")}
            className="text-gray-500 cursor-pointer h-7 sm:mr-3"
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button
            //   onClick={search}
            type="submit"
            hidden
          ></button>
        </form>
        <User
        //  className="ml-auto whitespace-nowrap"
        />
      </div>
      <SearchheaderOptions />
    </header>
  );
};

export default SearchHeader;
