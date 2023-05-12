import {BackIcon} from "@/assets/icons";
import {ActionsButton} from "../atoms/ActionsButton";
import {Tabs} from "../molecules/Tabs";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-4 shadow-nav">
      <section className="flex justify-between gap-3 items-center">
        <BackIcon />
        <h1 className="font-arial-rounded text-gray-dark text-7xl font-bold">
          Next Order
        </h1>
      </section>
      <Tabs />
      <ActionsButton />
    </nav>
  );
};
