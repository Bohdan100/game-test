'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { RedButton, SecondaryButton } from 'ui/components/Button';
import { Modal } from 'ui/components/Modal';
import s from './DeleteProductModal.module.scss';

interface DeleteProductModalProps {
  isOpen: boolean;
  closeModal: () => void;
  userId: number;
  redirectUrl?: string;
}

export const BanBuyerModal: FC<DeleteProductModalProps> = ({
  isOpen,
  closeModal,
  userId,
  redirectUrl,
}) => {
  const t = useTranslations('ProfilePage.Buyers.Modal');
  const router = useRouter();

  const handleBanBuyer = () => {
    // http-request for baned
    closeModal();
    // router.refresh();
    // redirectUrl && router.push(redirectUrl);
  };

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModal} className={s.modal}>
        <Modal.Header>
          <h4>{t('title')}</h4>
        </Modal.Header>
        <Modal.Content>
          <p>{t('text')}</p>
        </Modal.Content>
        <Modal.Footer>
          <div className={s.modal_btns}>
            <SecondaryButton onClick={closeModal}>
              {t('cancel')}
            </SecondaryButton>
            <RedButton onClick={handleBanBuyer}>{t('delete')}</RedButton>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
