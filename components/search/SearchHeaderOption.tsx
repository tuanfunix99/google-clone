import React from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  Icon: any;
  selected: boolean;
}

const SearchHeaderOption = ({ title, Icon, selected }: Props) => {

  const router = useRouter();
  const map = new Map();
  map.set('Images', 'image');

  const onChooseOtion = () => {
    const type = title === 'All' ? null : map.get(title);
    window.location.replace(`/search?searchKey=${router.query.searchKey}${type ? '&searchType=' + type : ''}`);
  }

  return (
    <div
        onClick={onChooseOtion}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
