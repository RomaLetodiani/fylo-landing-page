type Props = { name: string; desc: string; image: string; text: string };

const Testimonial = ({ name, desc, image, text }: Props) => {
  console.log(name, desc, image, text);
  return <div>Testimonial</div>;
};

export default Testimonial;
