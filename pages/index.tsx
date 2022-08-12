import type { NextPage } from 'next';
import Header from '@components/Header';
import { VscGithubInverted } from 'react-icons/vsc';
import { IoMdMail } from 'react-icons/io';
import { SiLinkedin } from 'react-icons/si';
import Icon from '@components/Icon';

const Home: NextPage = () => (
  <div className="flex flex-col text-sans">
    <div className="w-[100vw] h-[105vh] flex items-center justify-center bg-primary">
      <div className="flex flex-col mt-[-10vh] xl:ml-[-20rem] relative">
        <Header />
        <div className="text-[3rem] xs:text-[4rem] sm:text-[6rem] transition font-sans">
          <span className="text-secondary font-extralight mr-2">elijah</span>
          <span className="text-light font-semibold font-display ">sippel</span>
        </div>
        <div className="text-light-2 flex flex-col sm:flex-row gap-4 font-mono tracking-tight">
          <a className="inline-flex gap-1" href="https://github.com/ecuber" target="_blank" rel="noreferrer">
            <Icon><VscGithubInverted /></Icon>
            {' ecuber'}
          </a>
          <a className="inline-flex gap-1" href="mailto:esippel@umass.edu" target="_blank" rel="noreferrer">
            <Icon><IoMdMail /></Icon>
            {' esippel@umass.edu'}
          </a>
          <a className="inline-flex gap-1" href="https://linkedin.com/in/elijah-sippel" target="_blank" rel="noreferrer">
            <Icon><SiLinkedin /></Icon>
            {' elijah-sippel'}
          </a>
        </div>
      </div>
    </div>
    <main className="w-full grow px-3 pt-12 sm:px-0 bg-white pb-48">
      <div className="max-w-prose m-auto flex flex-col gap-3">
        <h4>Hello!</h4>
        <p>
          I&apos;m Elijah, an undergraduate computer science student at UMass Amherst 🧑🏽‍💻🐒.
          I&apos;m most into web development—frontend is my forte, but I&apos;ve also been messing
          with full stack technologies for a while now. TypeScript will always have my
          heart ❤️
        </p>
        <p>
          My last internship was at RelationalAI where I created a data-informed, interactive
          diagram component for a user training website written with TS, Next.js, and TailwindCSS 🌊
        </p>
        <p>
          In addition to CS, I&apos;m passionate about using technology for education. Whether
          it&apos;s making calculus visualizations or visualizing rudimentary machine learning
          concepts, I love creating tools that help students learn more effectively.
        </p>
        <p>
          Lots more coming to this website soon.
        </p>
      </div>
    </main>
  </div>
);

export default Home;
