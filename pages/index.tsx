import type { NextPage } from 'next';
import Header from '@components/Wave';

const Home: NextPage = () => (
  <>
    <div className="flex flex-col">
      <Header className="absolute" />
      <div className="my-16 mx-auto text-[5rem] z-10 italic text-black text-center">
        elijah sippel
      </div>
    </div>
    <main className="max-w-prose m-auto">
      more to come
    </main>
  </>
);

export default Home;
