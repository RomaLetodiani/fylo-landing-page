import SectionWrapper from '../SectionWrapper';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TwoColumns from '../layout/TwoColumns';
import { textObj } from '../shared/consts';
import { useInput } from '../shared/hooks/UseInput';

const Hero = () => {
  const { hero } = textObj;
  const {
    value: emailValue,
    hasError: emailHasError,
    onChange: emailOnChange,
    onBlur: emailOnBlur,
  } = useInput(
    (value) => value.includes('@') && value.includes('.') && value.length > 4
  );
  return (
    <SectionWrapper>
      <TwoColumns
        textsDiv={
          <div className="flex flex-col text-center md:text-left gap-5 items-center md:items-start justify-center max-w-lg">
            <h1 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold">
              {hero.title}
            </h1>
            <p className="text-very-dark-blue font-semibold">{hero.desc}</p>
            <div className="flex flex-col md:flex-row md:items-center w-full gap-8 md:gap-5">
              <Input
                name="email"
                type="email"
                value={emailValue}
                onChange={emailOnChange}
                onBlur={emailOnBlur}
                hasError={emailHasError}
                placeholder={hero.input}
                errorMessage={hero.errorMessage}
              />
              <Button text={hero.button} />
            </div>
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
