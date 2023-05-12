interface CustomChipProps {
  title: string;
  bgColor: string;
}

export const CustomChip = (props: CustomChipProps) => {
  const {bgColor, title} = props;

  return (
    <p
      className={`text-xs font-semibold text-white px-2 py-1 rounded-sm text-center ${bgColor}`}>
      {title}
    </p>
  );
};
