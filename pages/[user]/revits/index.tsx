import { AsideLeftMenu } from '../../../components/AsideLeftMenu';
import { AsideRightMenu } from '../../../components/AsideRightMenu';
import { DevelotterLayout } from '../../../components/DevelotterLayout';
import { MainSection } from '../../../components/Forms/CreateDevitForm/MainSection';

export const UserRevits = () => {
  return (
    <div>
      <DevelotterLayout>
        <AsideLeftMenu />
        <div></div>
        <AsideRightMenu />
      </DevelotterLayout>
    </div>
  );
};

export default UserRevits;
