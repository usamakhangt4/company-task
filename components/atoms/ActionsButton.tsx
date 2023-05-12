import {HamburgerIcon} from "@/assets/icons";

export const ActionsButton = () => {
  return (
    <button className="flex items-center gap-4 rounded-xl shadow-button py-1 px-3 text-gray-dark text-4xl">
      Actions <HamburgerIcon />
    </button>
  );
};
