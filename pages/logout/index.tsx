import { useRouter } from 'next/router';
import { useContext } from 'react';

import { logOut } from '../../actions/auth';

import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import Logo from '../../components/Icons/Logo';
import { AppContext } from '../../context/AppContext';

import { colors } from '../../styles/theme';
import styles from './styles';

const Logout = () => {

  const { userDispatch } = useContext(AppContext);
  const router = useRouter();

  const handleLogOut = () => {
    logOut(userDispatch);
    router.push('/');
  };

  return (

    <>
      <div>
        <main>
          <section className="logo-container">
            <Logo width="56px" height="56px" color={colors.title} />
          </section>
          <section>
            <h2>Log out of Develotter?</h2>
            <p>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</p>
          </section>
          <section className="buttons-container">
            <section className="button-container">
              <PrimaryButton 
                onClick={() => {logOut(userDispatch); }}
                type="button"
                textColor={colors.background}
                buttonColor={colors.title}
              >
              Log out
              </PrimaryButton>
            </section>
            <section className="button-container">
              <PrimaryButton
                type="button"
                onClick={() => {router.back();}}
                style="outline"
                textColor={colors.title}
                buttonColor={colors.text}
              >
              Cancel
              </PrimaryButton>
            </section>
          </section>
        </main>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Logout;
