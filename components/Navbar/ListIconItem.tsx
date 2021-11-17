
import Link from 'next/link';
import { colors } from '../../styles/theme';

export const ListIconItem = ({icon: Icon, route}: any) => {

  return (
    <>
      <li>
        <Link href={route}>
          <a>
            <Icon
              size={'30px'}
              color={colors.title}
            />
          </a>
        </Link>
      </li>
    </>
  );
};
