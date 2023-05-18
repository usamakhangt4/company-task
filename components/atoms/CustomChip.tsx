interface CustomChipProps {
  title: string;
  bgColor: string;
  titleColor?: string;
}

export const CustomChip = (props: CustomChipProps) => {
  const {bgColor, title, titleColor = "text-white"} = props;

  return (
    <div
      className={`text-xs font-normal grid place-items-center px-2 h-5 rounded-sm1 text-center min-w-[43px] ${bgColor} ${titleColor}`}>
      <p className="leading-4">{title}</p>
    </div>
  );
};
