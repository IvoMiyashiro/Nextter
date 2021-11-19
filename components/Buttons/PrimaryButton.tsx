import { ReactChild } from 'react';
import styles from './styles';

interface IProps {
  children?: ReactChild
  isDisabled: boolean,
}

export const PrimaryButton = ({children, isDisabled}: IProps) => {
  return (
    <>
      <button disabled={isDisabled}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  );
};
