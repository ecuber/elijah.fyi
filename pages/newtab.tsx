import type { NextPage } from 'next';
import Moon from '@components/Moon';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [moment, setMoment] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setMoment(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = `${moment.getHours()}:${moment.getMinutes()}:${moment.getSeconds()}`;
  return (
    <div className="flex flex-col text-sans">
      <div className="w-[100vw] h-[105vh] flex items-center justify-center bg-primary">
        <div className="flex flex-col mt-[-10vh] relative">
          <Moon />
          <div className="text-[3.5rem] xs:text-[4rem] sm:text-[6rem] transition font-sans z-[1]">
            <span className="text-secondary font-extralight mr-2">elijah</span>
            <span className="text-light font-semibold font-display ">sippel</span>
          </div>
          <div className="font-mono text-light-2 ml-2">
            the current time is
            {' '}
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
