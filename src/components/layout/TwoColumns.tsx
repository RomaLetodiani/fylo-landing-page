import { ReactElement } from 'react';

type Props = { textsDiv: ReactElement; rightDiv: ReactElement };

const TwoColumns = ({ textsDiv, rightDiv }: Props) => {
  return (
    <div className="flex justify-between gap-10 items-center flex-col-reverse md:flex-row ">
      {textsDiv}
      {rightDiv}
    </div>
  );
};

export default TwoColumns;
