import Link from 'next/link';

import { colors } from '../../../styles/theme';
import styles from './styles';

interface IProps {
  icon: any
  label: string
  href: string
}

export const MenuItem = ({
  icon: Icon,
  label,
  href
}: IProps) => {
  return (
    <>
      <li>
        <Link href={href} passHref>
          <Icon
            width="26px"
            color={colors.title}
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
          />
        </Link>
        <h4>{label}</h4>
      </li>

      <style jsx>{styles}</style>
    </>
  );
};
