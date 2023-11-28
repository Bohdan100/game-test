'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import { TopBuyers } from './TopBuyers';
import { BuyersHistory } from './BuyersHistory';

export const Buyers: FC = () => {
  const t = useTranslations('ProfilePage.Buyers');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <TopBuyers />
        <BuyersHistory allBuyersList={undefined} />
      </Section.Body>
    </Section>
  );
};
