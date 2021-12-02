import { Component, MouseEventHandler } from 'react';

interface IProps {
  icon: any
  width: string
  height: string
  color: string
  defaultColor: string
  backgroundColor: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const HoverableButton = ({
  icon: Icon,
  width,
  height,
  color,
  defaultColor,
  backgroundColor,
  onClick
}: IProps) => {
  return (
    <>
      <button onClick={onClick} type="button">
        <Icon
          width={width}
          heigth={height}
          stroke="currentColor"
          stroke-width="0"
          fill="currentColor"
        />
      </button>

      <style jsx>{`
        button {
          background: transparent;
          color: ${defaultColor};
          border-radius: 50%;
          padding: 0.4em;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button:hover {
          background-color: ${backgroundColor};
          color: ${color};
        }
      `}
      </style>
    </>
  );
};
