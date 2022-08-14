import { VscGithubInverted } from 'react-icons/vsc';
import { IoMdMail } from 'react-icons/io';
import { SiLinkedin } from 'react-icons/si';
import { motion } from 'framer-motion';
import Icon from '@components/Icon';

const linkClasses = 'inline-flex gap-1 pb-2 text-light-2 hover:text-accent transition-colors';

export default function Socials() {
  return (
    <motion.div className="mt-2 ml-2 flex flex-col sm:flex-row gap-4 text-sm sm:text-base font-mono tracking-tight">
      <motion.a
        initial={{ translateY: '0rem' }}
        whileHover={{ translateY: '-0.3rem' }}
        className={linkClasses}
        href="https://github.com/ecuber"
        target="_blank"
        rel="noreferrer"
      >
        <Icon><VscGithubInverted /></Icon>
        {' ecuber'}
      </motion.a>
      <motion.a
        initial={{ translateY: '0rem' }}
        whileHover={{ translateY: '-0.3rem' }}
        className={linkClasses}
        href="mailto:esippel@umass.edu"
        target="_blank"
        rel="noreferrer"
      >
        <Icon><IoMdMail /></Icon>
        {' esippel@umass.edu'}
      </motion.a>
      <motion.a
        initial={{ translateY: '0rem' }}
        whileHover={{ translateY: '-0.3rem' }}
        className={linkClasses}
        href="https://linkedin.com/in/elijah-sippel"
        target="_blank"
        rel="noreferrer"
      >
        <Icon><SiLinkedin /></Icon>
        {' elijah-sippel'}
      </motion.a>
    </motion.div>
  );
}
