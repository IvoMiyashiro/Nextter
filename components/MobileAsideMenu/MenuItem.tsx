import { colors } from '../../styles/theme';
import styles from './styles';

export const MenuItem = ({
  icon: Icon,
  label
}: any) => {
  return (
    <>
      <li>
        <Icon
          width="20px"
          height="20px"
          color={colors.title}
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0"
        />
        <h4>{label}</h4>
      </li>

      <style jsx>{styles}</style>
    </>
  );
};
