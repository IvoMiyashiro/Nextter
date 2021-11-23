import { Spinner } from './Spinner';


export const LoadingPage = () => {
  return (
    <>
      <section>
        <Spinner color="white" size="32px" />
      </section>

      <style jsx>{`
      section {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100%;
      }
      `}</style>
    </>
  );
};
