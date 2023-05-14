export const Tabs = () => {
  const activeTabClasses =
    "bg-white rounded-lg px-5 text-gray-dark shadow-button font-normal";
  const inactiveTabClasses = "text-gray-medium-dark font-semibold opacity-75";
  return (
    <section className="flex rounded-xl bg-gray-light pl-1 pr-6 gap-6 py-1 ">
      <p className={activeTabClasses}>All Orders</p>
      <p className={inactiveTabClasses}>Pickup</p>
      <p className={inactiveTabClasses}>Delivery</p>
      <p className={inactiveTabClasses}>Dine-in</p>
    </section>
  );
};
