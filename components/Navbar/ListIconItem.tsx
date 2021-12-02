
import Link from 'next/link';
import { colors } from '../../styles/theme';

export const ListIconItem = ({icon: Icon, route, fill, strokeWidth = 0}: any) => {

  return (
    <>
      <li>
        <Link href={route}>
          <a>
            <Icon
              height="28px"
              width="28px"
              color={colors.title}
              stroke="currentColor"
              stroke-width={strokeWidth}
              fill={fill}
            />
          </a>
        </Link>
      </li>
    </>
  );
};
