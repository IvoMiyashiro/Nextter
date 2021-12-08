import { MouseEventHandler, ReactChild } from 'react';
import Link from 'next/link';

import { fonts } from '../../styles/theme';

interface IProps {
  children: ReactChild
  type?: 'button' | 'link'
  style?: 'normal' | 'outline'
  textColor: string
  buttonColor: string
  href?: string
  isDisabled?: boolean
  buttonType?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const PrimaryButton = ({
  children,
  isDisabled,
  type = 'button',
  href,
  textColor,
  buttonColor,
  style = 'normal',
  onClick,
  buttonType = 'submit'
}: IProps) => {

  return (
    <>
      {
        type === 'button'
        && 
        <button
          className={`button-${style}`}
          disabled={isDisabled}
          onClick={onClick}
          type={buttonType}
        >
          {children}
        </button>
      }
      {
        type === 'link'
        &&
        <Link
          href={href as string}
        > 
          <a className={`button-${style}`}>
            {children}
          </a>
        </Link>
      }

      <style jsx>{`  
        button {
          align-items: center;
          border-radius: 9999px;
          display: flex;
          font-family: ${fonts.base};
          font-size: 1rem;
          height: 100%;
          justify-content: center;
          padding: 0 1em; 
          width: 100%;
        }

        .button-normal {
          background: ${buttonColor};
          border: 2px solid transparent;
          color: ${textColor};  
        }

        .button-outline {
          background: transparent;
          border: 2px solid ${buttonColor};
          color: ${textColor};  
        }

        button:disabled {
          opacity: 0.6;
        }
      `}
      </style>
    </>
  );
};
