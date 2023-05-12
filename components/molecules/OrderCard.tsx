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
    <article className="flex gap-6 justify-between odd:bg-gray-light3 px-6 py-3">
      <figure className="shadow-button w-11 h-11">
        <img src={imageurl} alt="" />
      </figure>
      <div className="mr-auto ">
        <p className="text-gray-dark text-4xl">{title}</p>
        <p className="text-gray-dark text-opacity-60">{instructions}</p>
      </div>
      <p className="text-gray-dark text-4xl">{price}</p>
      <ActionMenuIcon />
    </article>
  );
};
