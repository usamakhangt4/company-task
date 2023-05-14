interface CustomChipProps {
  title: string;
  bgColor: string;
  titleColor?: string;
}

export const CustomChip = (props: CustomChipProps) => {
  const {bgColor, title, titleColor = "text-white"} = props;

  return (
    <p
      className={`text-xs font-semibold  px-2 py-0 rounded-sm1 text-center min-w-[43px] ${bgColor} ${titleColor}`}>
      {title}
    </p>
  );
};
