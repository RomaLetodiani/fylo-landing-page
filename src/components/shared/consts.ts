import testimonialAvatar from '../../assets/images/avatar-testimonial.png';
import hero from '../../assets/images/illustration-1.svg';
import middle from '../../assets/images/illustration-2.svg';
import topBanner from '../../assets/images/bg-curve-desktop.svg';
import topBannerMobile from '../../assets/images/bg-curve-mobile.svg';
// socials
import facebook from '../../assets/images/Socials/icon-facebook.svg';
import instagram from '../../assets/images/Socials/icon-instagram.svg';
import twitter from '../../assets/images/Socials/icon-twitter.svg';

import logo from '../../assets/images/logo.svg';
export const GlobalObj = {
  logo,
  header: ['Features', 'Team', 'Sign In'],
  hero: {
    title: 'All your files in one secure location, accessible anywhere.',
    desc: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.',
    button: 'Get Started',
    input: 'Enter your email...',
    errorMessage: 'Please check your email',
    image: hero,
  },
  middle: {
    title: 'Stay productive, wherever you are',
    desc: [
      'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.',
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!',
    ],
    button: 'See how Fylo works',
    testimonial: {
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Kyle Burton',
      desc: 'Founder & CEO, Huddle',
      image: testimonialAvatar,
    },
    topBanner,
    topBannerMobile,
    image: middle,
  },
  bottom: {
    title: 'Get early access today',
    desc: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.',
    input: 'email@example.com',
    button: 'Get Started For Free',
    errorMessage: 'Please check your email',
  },
  footer: {
    left: [
      {
        text: 'Phone: +1-543-123-4567',
        icon: 'phone',
      },
      {
        text: 'example@example.com',
        icon: 'email',
      },
    ],
    middle: [
      ['About Us', 'Jobs', 'Press', 'Blog'],
      ['Contact Us', 'Terms', 'Privacy'],
    ],
  },
  socials: [
    {
      id: 1,
      icon: facebook,
      alt: 'Facebook',
      link: 'https://www.facebook.com/LetodianiRoma/',
    },
    {
      id: 2,
      icon: twitter,
      alt: 'Twitter',
      link: 'https://twitter.com/l3todianiroma',
    },
    {
      id: 3,
      icon: instagram,
      alt: 'Instagram',
      link: 'https://www.instagram.com/roma.letodiani',
    },
  ],
};
