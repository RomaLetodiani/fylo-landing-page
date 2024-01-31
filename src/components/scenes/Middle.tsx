import SectionWrapper from '../SectionWrapper';
import TwoColumns from '../layout/TwoColumns';

const Middle = () => {
  return (
    <SectionWrapper>
      <TwoColumns textsDiv={<div></div>} rightDiv={<div></div>} />
    </SectionWrapper>
  );
};

export default Middle;
