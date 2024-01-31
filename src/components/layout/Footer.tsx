import { GlobalObj } from '../shared/consts';

const Footer = () => {
  const { footer } = GlobalObj;
  console.log('🚀 ~ Footer ~ footer:', footer);
  return <div>Footer</div>;
};

export default Footer;
