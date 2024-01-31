import SectionWrapper from '../SectionWrapper';
import { GlobalObj } from '../shared/consts';
import { EmailIcon, PhoneIcon } from '../shared/icons';

const Footer = () => {
  const { footer, socials, logo } = GlobalObj;
  return (
    <div className="bg-very-dark-blue py-20 text-light-grayish-blue">
      <SectionWrapper>
        <img className="invert brightness-0 mb-10" src={logo} alt="logo" />
        <div className="flex flex-wrap gap-20 justify-between">
          <ul className="flex flex-col gap-3">
            {footer.left.map((item, index) => (
              <li className="flex items-center gap-3" key={index}>
                {item.icon === 'phone' ? <PhoneIcon /> : <EmailIcon />}
                {item.text}
              </li>
            ))}
          </ul>
          {footer.middle.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <ul className="flex flex-col gap-5">
                {item.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex gap-3">
            {socials.map((item, index) => (
              <a key={index}>
                <div className="cursor-pointer border border-white rounded-full p-3">
                  <img
                    className="invert brightness-0"
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
