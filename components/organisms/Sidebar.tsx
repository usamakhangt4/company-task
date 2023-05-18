import {ChefIcon, DownIcon, FutureIcon, HistoryIcon} from "@/assets/icons";
import {SearchField} from "../molecules/SearchField";
import {DeliveryCard} from "../molecules/DeliveryCard";
import {deliveries} from "@/jsonObjects/deliveries";

export const Sidebar = () => {
  return (
    <aside className="max-w-sm shadow-sidebar flex flex-col justify-between">
      <section>
        <section className="mx-4 py-3">
          <header className="flex justify-between items-center mb-2">
            <p className="text-8xl text-gray-dark font-semibold">Current</p>
            <p className="flex gap-1 items-end text-gray-dark text-3xl">
              Expected Time{" "}
              <span className="w-7 h-5 ">
                <DownIcon />
              </span>
            </p>
          </header>
          <SearchField />
        </section>
        <section>
          {deliveries.map(
            (
              {
                OverDue,
                amount,
                name,
                paymentMethod,
                timeRemaining,
                type,
                isVIP,
                isSelected,
                peopleCount,
                chipTitle,
                company,
              },
              index
            ) => (
              <DeliveryCard
                OverDue={OverDue}
                amount={amount}
                isVIP={isVIP}
                name={name}
                paymentMethod={paymentMethod}
                timeRemaining={timeRemaining}
                type={type}
                peopleCount={peopleCount}
                isSelected={isSelected}
                chipTitle={chipTitle}
                key={index + name}
                company={company}
              />
            )
          )}
        </section>
      </section>
      <section className="shadow-top">
        <section className="flex border-b">
          <section className="flex items-center flex-1 justify-between px-4 border-r py-[5.63px]">
            <div>
              <p className="text-base text-gray-light-text font-semibold">
                Collection
              </p>
              <p className="text-[16.5px] text-gray-dark">20 mins</p>
            </div>
            <span className="bg-white shadow-button h-[26px] w-[26px] px-1 py-1 rounded-full">
              <DownIcon />
            </span>
          </section>
          <section className="flex items-center flex-1 justify-between px-4 py-[5.63px]">
            <div>
              <p className="text-base text-gray-light-text font-semibold">
                Delivery
              </p>
              <p className="text-[16.5px] text-gray-dark">45 mins</p>
            </div>
            <span className="bg-white shadow-button h-[26px] w-[26px] px-1 py-1 rounded-full">
              <DownIcon />
            </span>
          </section>
        </section>
        <section className="flex justify-between py-2 pl-[14.5px] pr-[11.5px]">
          <p className="flex flex-col w-[79px] justify-center items-center gap-1 text-blue-light text-sm">
            <ChefIcon />
            Current
          </p>
          <p className="flex flex-col w-[79px] justify-center items-center gap-[6px] text-sm text-gray-light2">
            <FutureIcon />
            Future
          </p>
          <p className="flex flex-col w-[79px] justify-center items-center  gap-[5px] text-sm text-gray-light2">
            <HistoryIcon />
            History
          </p>
        </section>
      </section>
    </aside>
  );
};
