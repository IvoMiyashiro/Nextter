import { MouseEventHandler, ReactChild } from 'react';
import Link from 'next/link';

import styles from './styles';

interface IProps {
  children: ReactChild
  type: 'button' | 'link'
  href?: string
  isDisabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const SecondaryButton = ({
  children,
  isDisabled,
  type,
  href,
  onClick,
}: IProps) => {
  return (
    <>
      {
        type === 'button'
          ? (
            <button
              className="button-secondary"
              disabled={isDisabled}
              onClick={onClick}
            >
              {children}
            </button>
          )
          : (
            <Link
              href={href as string}
            > 
              <a className="button-secondary">
                {children}
              </a>
            </Link>
          )
      }

      <style jsx>{styles}</style>
    </>
  );
};
