import { colors } from '../../../../styles/theme';
import { HoverableButton } from '../../../Buttons/HoverableButton';
import ArrowLeft from '../../../Icons/ArrowLeft';

export const PrevButton = ({handleStep}: any) => {
  return (
    <>
      <div>
        <HoverableButton
          icon={ArrowLeft}
          width="24px"
          height="24px"
          color={colors.title}
          backgroundColor={colors.rgbaTitle}
          defaultColor={colors.title}
          onClick={handleStep}
        />
      </div>

      <style jsx>{`
        div {
          position: absolute;
          left: 12px;
        }
      `}</style>
    </>
  );
};
