import {ActionMenuIcon} from "@/assets/icons";

interface OrderCardProps {
  title: string;
  instructions: string;
  price: string;
  imageurl: string;
}
export const OrderCard = (props: OrderCardProps) => {
  const {imageurl, instructions, price, title} = props;
  return (
    <article className="flex gap-6 justify-between items-center border-t border-gray-100 odd:bg-gray-light3 px-5 py-2">
      <figure className="shadow-button w-[46px] h-[46px] rounded-sm2 p-1">
        <img src={imageurl} alt="" />
      </figure>
      <div className="mr-auto ">
        <p className="text-gray-dark text-4xl">{title}</p>
        <p className="text-gray-dark text-opacity-60 text-lg">{instructions}</p>
      </div>
      <p className="text-gray-dark text-4xl">{price}</p>
      <ActionMenuIcon />
    </article>
  );
};
