import styles from './styles';

interface IProps {
  layout: boolean,
  setValue: (value: boolean | ((prev: boolean) => boolean)) => void
}

export const FooterSection = ({ layout, setValue }: IProps) => {

  const handleLayout = ():void => {
    setValue((prev: boolean) => !prev);
  };
  

  return (
    <>
      <footer>
        <section>
          {
            layout
            &&
            <p>
            By signing up, you agree to the 
              <span> Terms of Service </span>
            and 
              <span> Privacy Policy</span>
            , including
              <span> Cookie Use.</span>
            </p>
          }
        </section>
        <section>
          <p>
            Already have an account?
          </p>
          <button onClick={handleLayout}>
            {
              layout
                ? 'Sign in'
                : 'Sign up'
            }
          </button>
        </section>
      </footer>

      <style jsx>{styles}</style>
    </>
  );
};
