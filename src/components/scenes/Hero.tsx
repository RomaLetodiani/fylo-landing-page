import SectionWrapper from '../SectionWrapper';
import TwoColumns from '../layout/TwoColumns';
import { textObj } from '../shared/consts';

const Hero = () => {
  const { hero } = textObj;
  console.log('🚀 ~ Hero ~ hero:', hero);
  return (
    <SectionWrapper>
      <TwoColumns
        textsDiv={
          <div className="flex justify-center items-center">
            <h1>{hero.title}</h1>
          </div>
        }
        rightDiv={
          <div>
            <img src={hero.image} alt="hero" />
          </div>
        }
      />
    </SectionWrapper>
  );
};

export default Hero;
