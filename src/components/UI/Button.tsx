type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="bg-bright-blue text-nowrap md:self-start h-full hover:opacity-90 text-white p-3 px-10 rounded-md">
      {text}
    </button>
  );
};

export default Button;
