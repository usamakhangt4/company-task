import {ChefIcon, DownIcon, FutureIcon, HistoryIcon} from "@/assets/icons";
import {SearchField} from "../molecules/SearchField";
import {OrderCard} from "../molecules/OrderCard";
import {deliveries} from "@/jsonObjects/deliveries";

export const Sidebar = () => {
  return (
    <aside className="max-w-sm shadow-sidebar flex flex-col justify-between">
      <section>
        <section className="mx-4 py-3">
          <header className="flex justify-between items-center mb-2">
            <p className="text-8xl text-gray-dark font-semibold">Current</p>
            <p className="flex gap-3 items-baseline text-gray-dark text-3xl">
              Expected Time <DownIcon />
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
              },
              index
            ) => (
              <OrderCard
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
              />
            )
          )}
        </section>
      </section>
      <section className="shadow-top">
        <section className="flex border-b-2">
          <section className="flex items-center flex-1 justify-between px-4 border-r-2 py-3">
            <div>
              <p className="text-base text-gray-light-text font-semibold">
                Collection
              </p>
              <p className="text-3xl text-gray-dark">20 mins</p>
            </div>
            <span className="bg-white shadow-button px-2 py-3 rounded-full">
              <DownIcon />
            </span>
          </section>
          <section className="flex items-center flex-1 justify-between px-4 py-3">
            <div>
              <p className="text-base text-gray-light-text font-semibold">
                Delivery
              </p>
              <p className="text-3xl text-gray-dark">45 mins</p>
            </div>
            <span className="bg-white shadow-button px-2 py-3 rounded-full">
              <DownIcon />
            </span>
          </section>
        </section>
        <section className="flex justify-between py-2 px-4">
          <p className="flex flex-col justify-center items-center gap-1 text-blue-light text-sm">
            <ChefIcon />
            Current
          </p>
          <p className="flex flex-col justify-center items-center gap-1 text-sm text-gray-light2">
            <FutureIcon />
            Future
          </p>
          <p className="flex flex-col justify-center items-center gap-1 text-sm text-gray-light2">
            <HistoryIcon />
            History
          </p>
        </section>
      </section>
    </aside>
  );
};
