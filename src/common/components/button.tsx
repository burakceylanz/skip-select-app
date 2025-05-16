type ButtonProps = {
  text: string;
  theme?: "light" | "dark";
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ text, theme = "light", icon }) => {
  const baseClasses =
    "text-[12px] flex items-center gap-1 justify-center cursor-pointer px-[1.25rem] py-3 w-full font-normal leading-[1.2] uppercase rounded-full border-[0.0625rem]";

  const themeClasses =
    theme === "dark"
      ? "text-primary border-[#8b867f]"
      : "text-secondary bg-primary";

  return (
    <button className={`${baseClasses} ${themeClasses}`}>
      <span className="select-none inline-flex relative justify-center items-center">
        {text}
      </span>
      {icon && icon}
    </button>
  );
};

export default Button;
