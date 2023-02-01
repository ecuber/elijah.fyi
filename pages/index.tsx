import type { NextPage } from 'next';
import TransitionWipe from '@components/TransitionWipe';
import Wave from '@components/Wave';
import Socials from '@components/Socials';
import Moon from '@components/Moon';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Home: NextPage = () => (
  <div className="flex flex-col text-sans">
    <div className="w-[100vw] h-[105vh] flex items-center justify-center bg-primary">
      <TransitionWipe />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        href="#start"
        className="absolute mx-auto bottom-10 text-light-2 animate-bounce hover:text-accent transition duration-300"
      >
        <HiChevronDoubleDown />
      </motion.a>
      <div className="flex flex-col mt-[-10vh] relative">
        <Moon />
        <div className="text-[3.5rem] xs:text-[4rem] sm:text-[6rem] transition font-sans z-[1]">
          <span className="text-secondary font-extralight mr-2">elijah</span>
          <span className="text-light font-semibold font-display ">sippel</span>
        </div>
        <Socials />
      </div>
    </div>
    <div className="w-full overflow-x-clip h-[133px]">
      <Wave />
    </div>
    <main className="w-full grow px-3 pt-12 sm:px-0 bg-dark-2 text-light pb-48">
      <div className="max-w-prose m-auto flex flex-col gap-3">
        <h3 id="start">Hello!</h3>
        <p>
          I&apos;m Elijah, an undergraduate computer science and math student at UMass Amherst.
          Frontend web development is my forte, but I&apos;ve also been messing
          with full stack technologies for a while now. Live, laugh, love TypeScript :)
        </p>
        <p>
          My last internship was at RelationalAI where I created a data-informed, interactive
          diagram component for a user training website written with TS, Next.js, and TailwindCSS.
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
