import { useFetchDevits } from '../hooks/useFetchDevits';
import { colors } from '../styles/theme';
import { Devit } from './Devit';
import { CreateDevitHome } from './Forms/CreateDevitHome';
import { TopBar } from './TopBar';

export const Timeline = () => {

  const {devitState} = useFetchDevits();

  return (
    <>
      <main>
        <TopBar />
        <section>
          <CreateDevitHome />
          { 
            devitState.length !== 0
          &&
          devitState.map(devit => {
            return <Devit key={devit.id} devit={devit}/>;
          })
          }
        </section>
      </main>

      <style jsx>{`
        main {
          border-right: 1px solid ${colors.gray};
          border-left: 1px solid ${colors.gray};
        }
      `}</style>
    </>
  );
};
