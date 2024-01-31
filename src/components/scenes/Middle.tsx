import SectionWrapper from '../SectionWrapper';
import Testimonial from '../Testimonial';
import TwoColumns from '../layout/TwoColumns';
import { GlobalObj } from '../shared/consts';
import useMediaQuery from '../shared/hooks/UseMediaQuery';
import { ArrowIcon } from '../shared/icons';

const Middle = () => {
  const { middle } = GlobalObj;
  const isAboveMd = useMediaQuery('(min-width: 768px)');
  return (
    <div className="bg-light-grayish-blue relative w-full mt-32 pb-10">
      <span className="absolute bg-red -top-4 w-full left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isAboveMd ? (
          <img className="w-full" src={middle.topBanner} alt="banner" />
        ) : (
          <img className="w-full" src={middle.topBannerMobile} alt="banner" />
        )}
      </span>
      <SectionWrapper>
        <TwoColumns
          textsDiv={
            <div className="flex flex-col text-center w-full max-w-xl md:text-left gap-5 items-center md:items-start justify-center">
              <h1 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold">
                {middle.title}
              </h1>
              <div className="flex flex-col text-left gap-3">
                <p className="text-light-gray md:text-very-dark-blue ">
                  {middle.desc[0]}
                </p>
                <p className="text-light-gray md:text-very-dark-blue ">
                  {middle.desc[1]}
                </p>
              </div>
              <button className="bg-transparent flex items-center gap-2 pb-2 h-full hover:opacity-90 text-moderate-cyan border-b-2 border-moderate-cyan">
                {middle.button}
                <span>
                  <ArrowIcon />
                </span>
              </button>
              <Testimonial {...middle.testimonial} />
            </div>
          }
          rightDiv={
            <div className="max-w-[500px]">
              <img
                className="w-full h-full"
                src={middle.image}
                alt="Illustration"
              />
            </div>
          }
        />
      </SectionWrapper>
    </div>
  );
};

export default Middle;
