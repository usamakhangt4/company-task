import {AtmCardIcon, CashIcon, UsersIcon, VIPIcon} from "@/assets/icons";
import {CustomChip} from "../atoms/CustomChip";

interface DeliveryCardProps {
  name: string;
  timeRemaining: number;
  OverDue: boolean;
  paymentMethod: string | "cash" | "card";
  amount: string;
  type: string | "delivery" | "table" | "pickup";
  isVIP: boolean;
  peopleCount: string;
  chipTitle: string;
  isSelected: boolean;
  company: JSX.Element;
}
export const DeliveryCard = (props: DeliveryCardProps) => {
  const {
    OverDue,
    amount,
    name,
    paymentMethod,
    timeRemaining,
    type,
    isVIP,
    isSelected,
    peopleCount = 0,
    chipTitle,
    company,
  } = props;

  return (
    <section
      className={`${
        OverDue ? "bg-gray-light1" : isSelected ? "bg-blue-dark2" : ""
      } py-[10.5px] px-[18px] border-t last:border-b flex flex-col justify-between w-sidebar-max h-20`}>
      <section className="flex justify-between items-center gap-3">
        <p
          className={`flex-1 flex items-center justify-start gap-3 text-5xl ${
            isSelected && "text-white"
          }`}>
          {name} {isVIP && <VIPIcon />}
        </p>
        <p className="flex items-center justify-start gap-2">
          {type === "table" && (
            <>
              <UsersIcon /> <span>{peopleCount}</span>
            </>
          )}
        </p>
        <p
          className={`flex items-center justify-start gap-2 ${
            isSelected && "text-white"
          }`}>
          {paymentMethod === "cash" ? (
            <CashIcon />
          ) : (
            <span
              className={`${isSelected ? "text-white" : "text-gray-light5"}`}>
              <AtmCardIcon />
            </span>
          )}{" "}
          {amount}
        </p>
      </section>
      <section className="flex items-center justify-between font-semibold text-3xl">
        <p
          className={`${
            OverDue
              ? "text-red-dark"
              : timeRemaining < 5
              ? "text-orange-dark"
              : "text-gray-dark"
          } ${isSelected && "text-white"}`}>
          {OverDue ? "Overdue " : "Due in "}
          {timeRemaining} mins
        </p>
        <div className="flex items-center justify-between gap-2">
          <CustomChip
            bgColor={
              type === "table"
                ? "bg-orange-dark"
                : type === "delivery"
                ? "bg-green-dark"
                : "bg-blue-dark"
            }
            title={chipTitle}
          />
          <span>{company}</span>
        </div>
      </section>
    </section>
  );
};
