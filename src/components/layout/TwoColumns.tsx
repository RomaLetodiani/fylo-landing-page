import { ReactElement } from 'react';

type Props = {
  textsDiv: ReactElement;
  rightDiv: ReactElement;
  direction?: string;
};

const TwoColumns = ({ textsDiv, rightDiv, direction }: Props) => {
  return (
    <div
      className={`flex justify-between py-8 sm:py-16 gap-16 items-center ${
        direction === 'reverse' ? 'flex-col' : 'flex-col-reverse'
      } md:flex-row`}
    >
      {textsDiv}
      {rightDiv}
    </div>
  );
};

export default TwoColumns;
