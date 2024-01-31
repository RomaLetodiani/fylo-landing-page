import logo from '../../assets/images/logo.svg';
import SectionWrapper from '../SectionWrapper';
import { GlobalObj } from '../shared/consts';

const Header = () => {
  const { header } = GlobalObj;
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center gap-5 sm:gap-10 font-raleWay py-8 sm:py-16">
        <div>
          <img
            className="min-w-[70px] w-[100px] sm:w-[150px]"
            src={logo}
            alt="Fylo-Logo"
          />
        </div>
        <div>
          <ul className="flex gap-5 sm:gap-10">
            {header.map((item, index) => (
              <li
                className="text-very-dark-blue text-xs sm:text-xl cursor-pointer hover:text-bright-blue"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Header;
