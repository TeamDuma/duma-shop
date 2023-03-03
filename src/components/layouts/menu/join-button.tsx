import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import ProfileIcon from '@/components/icons/profile-icon';

export default function JoinButton() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }
  return (
    <div className="flex items-center " onClick={handleJoin}>
      <ProfileIcon />
      <p className="text-green cursor-pointer font-bold transition duration-200 hover:text-accent focus:text-accent ">
        {t('join-button')}
      </p>
    </div>
  );
}
