interface InputProps {
  type: string;
  placeholder: string;
}

export const InputField = (props: InputProps) => {
  const {placeholder = "", type = "text"} = props;

  return (
    <input
      type={type}
      name="search"
      placeholder={placeholder}
      className="bg-gray-light w-full focus:outline-none focus:ring-0 placeholder-gray-light-text text-5xl"
    />
  );
};
