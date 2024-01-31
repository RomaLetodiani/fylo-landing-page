import SectionWrapper from '../SectionWrapper';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TwoColumns from '../layout/TwoColumns';
import { GlobalObj } from '../shared/consts';
import { useInput } from '../shared/hooks/UseInput';

const Bottom = () => {
  const { bottom } = GlobalObj;
  const {
    value: emailValue,
    hasError: emailHasError,
    onChange: emailOnChange,
    onBlur: emailOnBlur,
  } = useInput(
    (value) => value.includes('@') && value.includes('.') && value.length > 4
  );
  return (
    <div className="bg-desaturated-blue md:py-10">
      <SectionWrapper>
        <TwoColumns
          direction="reverse"
          textsDiv={
            <div className="flex flex-col text-light-grayish-blue text-center w-full max-w-md md:text-left gap-5 items-center md:items-start justify-center">
              <h1 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold">
                {bottom.title}
              </h1>
              <p>{bottom.desc}</p>
            </div>
          }
          rightDiv={
            <div className="flex flex-col lg:flex-ro md:self-start flex-1 max-w-xl gap-5">
              <Input
                name="email"
                type="email"
                value={emailValue}
                onChange={emailOnChange}
                onBlur={emailOnBlur}
                hasError={emailHasError}
                errorMessage={bottom.errorMessage}
                placeholder={bottom.input}
              />
              <Button text={bottom.button} />
            </div>
          }
        />
      </SectionWrapper>
    </div>
  );
};

export default Bottom;
