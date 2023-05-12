import {
  CallIcon,
  ChatIcon,
  ClockIcon,
  DownIcon,
  HomeIcon,
  MasterCardIcon,
} from "@/assets/icons";
import {CustomChip} from "../atoms/CustomChip";
import {OrderCard} from "../molecules/OrderCard";
import {Orders} from "@/jsonObjects/Orders";

export const OrderDetails = () => (
  <section className="flex flex-col justify-between h-full">
    <section>
      <div className="mx-6 mt-4 flex justify-between">
        <p className="text-9xl text-gray-dark font-semibold">
          Johnny Appleseed
        </p>
        <div className="flex gap-8">
          <p className="flex items-center gap-3 text-5xl text-gray-dark">
            <CallIcon />
            Call
          </p>
          <p className="flex items-center gap-3 text-5xl text-gray-dark">
            <ChatIcon />
            Message
          </p>
        </div>
      </div>
      <div className="mx-6 mt-5 flex items-center gap-4">
        <HomeIcon />
        <p className="text-4xl text-gray-dark">
          Level 3, 2 Malop Street, Geelong
        </p>
      </div>
      <section className="px-6 py-3 mt-4 shadow-button">
        <div className="flex justify-between gap-4">
          <section className="flex gap-4 items-center ">
            <ClockIcon />
            <div className="flex gap-1">
              <p className="text-green-light">Expected in 26 mins</p>
              <p className="text-gray-dark">- 7:34pm</p>
            </div>
            <DownIcon />
          </section>
          <span className="border-r-2"></span>
          <section className="flex items-center gap-11">
            <div className="flex items-center gap-3">
              <CustomChip bgColor="bg-black" title="Uber" />
              <p className="text-gray-dark">On the way</p>
            </div>
            <p className="shadow-button px-5 py-3 rounded-full text-blue-dark2 text-4xl">
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
      <div className="py-2 px-3 shadow-button border inline-block">
        <MasterCardIcon />
      </div>
      <p className="ml-auto text-gray-dark text-opacity-60 text-lg">
        Total Paid
      </p>
      <p className="mr-6 text-gray-dark text-4xl font-semibold">$105.00</p>
    </section>
  </section>
);
