import { QuoteIcon } from './shared/icons';

type Props = { name: string; desc: string; image: string; text: string };

const Testimonial = ({ name, desc, image, text }: Props) => {
  return (
    <div className="flex text-left flex-col gap-3 max-w-md bg-white p-10 rounded-lg shadow-lg">
      <QuoteIcon />
      <p className="font-medium">{text}</p>
      <div className="flex items-center">
        <img className="rounded-full w-12" src={image} alt="profile image" />
        <div className="ml-5">
          <h5 className="text-very-dark-blue font-bold text-xl">{name}</h5>
          <p className="text-very-dark-blue text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
