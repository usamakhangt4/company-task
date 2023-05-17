import {
  CallIcon,
  ChatIcon,
  ClockIcon,
  DownIcon,
  HomeIcon,
  MasterCardIcon,
} from "@/assets/icons";
import {OrderCard} from "../molecules/OrderCard";
import {Orders} from "@/jsonObjects/Orders";
import {UberIcon} from "@/assets/companiesIcons";

export const OrderDetails = () => (
  <section className="flex flex-col justify-between h-full">
    <section>
      <div className="mx-6 mt-4 flex justify-between">
        <p className="text-9xl text-gray-dark font-semibold">
          Johnny Appleseed
        </p>
        <div className="flex gap-8">
          <p className="flex items-center gap-4 text-5xl text-gray-dark">
            <CallIcon />
            Call
          </p>
          <p className="flex items-center gap-[13px] text-5xl text-gray-dark">
            <ChatIcon />
            Message
          </p>
        </div>
      </div>
      <div className="mx-[22px] mt-5 flex items-center gap-4">
        <HomeIcon />
        <p className="text-4xl text-gray-dark">
          Level 3, 2 Malop Street, Geelong
        </p>
      </div>
      <section className="pr-5 pl-[22px] mt-4 shadow-delivery-card-header relative z-10">
        <div className="flex justify-between gap-4">
          <section className="flex gap-4 items-center py-2">
            <ClockIcon />
            <div className="flex w-60">
              <p className="text-green-light">Expected in 26 mins</p>
              <p className="text-gray-dark ml-[5px]">- 7:34pm</p>
            </div>
            <span className="w-8 h-6 ">
              <DownIcon />
            </span>
          </section>
          <span className="border-r"></span>
          <section className="flex items-center justify-between w-60 py-2">
            <div className="flex items-center gap-3">
              <UberIcon />
              <p className="text-gray-dark">On the way</p>
            </div>
            <p className="grid place-items-center shadow-button w-20 h-9 rounded-full text-blue-dark2 text-4xl font-semibold">
              Track
            </p>
          </section>
        </div>
      </section>
      <section className=" ">
        {Orders.map((order, index) => {
          const {imageurl, instructions, price, title} = order;
          return (
            <OrderCard
              imageurl={imageurl}
              instructions={instructions}
              price={price}
              title={title}
              key={index}
            />
          );
        })}
      </section>
    </section>
    <section className="px-6 py-4 shadow-top flex justify-between gap-9 items-center">
      <div className="grid place-items-center w-custom-46 h-8 shadow-button border ">
        <MasterCardIcon />
      </div>
      <p className="ml-auto text-gray-dark text-opacity-60 text-lg">
        Total Paid
      </p>
      <p className="mr-6 text-gray-dark text-4xl font-semibold">$105.00</p>
    </section>
  </section>
);
