import {SearchIcon} from "@/assets/icons";
import {InputField} from "../atoms/Input";

export const SearchField = () => {
  return (
    <article className="flex gap-2 bg-gray-light rounded-xl p-2 py-1 items-center">
      <SearchIcon />
      <InputField type="search" placeholder="Search" />
    </article>
  );
};
