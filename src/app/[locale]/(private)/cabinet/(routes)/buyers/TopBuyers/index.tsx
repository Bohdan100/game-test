'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { GetTopBuyer } from 'types/buyerTypes';

import { Container } from 'ui/components/Container';
import { TopList } from '../TopList';
import { ArtboardBackground } from 'components/backgrounds/ArtboardBackground';

import MarvinImg from 'assets/images/top-sellers/marvin.png';
import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';
import RalphImg from 'assets/images/top-sellers/ralph.png';
import WadeImg from 'assets/images/top-sellers/wade.png';

import s from './TopBuyers.module.scss';

interface TopBuyersProps {
  buyersData?: GetTopBuyer[] | undefined;
}

const exampleBuyers: GetTopBuyer[] = [
  {
    userName: 'Kristin Watson',
    avatarURL: MarvinImg,
    achievements: ['1', '2,140'],
    index: 'wer1e2f3',
  },
  {
    userName: 'Theresa Webb',
    avatarURL: KristinImg,
    achievements: ['2', '1,940'],
    index: 'kae5d8d9',
  },
  {
    userName: 'Guy Hawkins',
    avatarURL: ArthurImg,
    achievements: ['3', '1,320'],
    index: 'whs67d7d7',
  },
  {
    userName: 'Ralph Edwards',
    avatarURL: RalphImg,
    achievements: ['4', '1,170'],
    index: 'cfhyi51f0',
  },
  {
    userName: 'Wade Warren',
    avatarURL: WadeImg,
    achievements: ['5', '920'],
    index: 'ggwerhj123',
  },
];

const handleSwitchAllTime = exampleBuyers.sort((a, b) =>
  Number(a.achievements[1]) > Number(b.achievements[1]) ? -1 : 1
);
const handleSwitchThisYear = exampleBuyers.sort((a, b) =>
  Number(a.achievements[1]) > Number(b.achievements[1]) ? -1 : 1
);
const handleSwitchThisMonth = exampleBuyers.sort((a, b) =>
  Number(a.achievements[1]) > Number(b.achievements[1]) ? -1 : 1
);

export const TopBuyers: FC<TopBuyersProps> = ({ buyersData }) => {
  const [active, setActive] = useState('All Time');
  const [topBuyers, setTopBuyers] = useState(handleSwitchAllTime);
  const t = useTranslations('ProfilePage.Buyers');

  return (
    <section className={s.users}>
      <Container className={s.users_container}>
        <div className={s.users_content}>
          <div className={s.users_top}>
            <h2>{t('subtitle')}</h2>
            <div className={s.users_switcher}>
              <button
                className={`${active === 'All Time' ? s.active : ''}`}
                onClick={() => {
                  setActive('All Time');
                  setTopBuyers(handleSwitchAllTime);
                }}
              >
                {t('all_time')}
              </button>
              <button
                className={`${active === 'This Year' ? s.active : ''}`}
                onClick={() => {
                  setActive('This Year');
                  setTopBuyers(handleSwitchThisYear);
                }}
              >
                {t('this_year')}
              </button>
              <button
                className={`${active === 'This Month' ? s.active : ''}`}
                onClick={() => {
                  setActive('This Month');
                  setTopBuyers(handleSwitchThisMonth);
                }}
              >
                {t('this_month')}
              </button>
            </div>
          </div>
          <TopList
            users={buyersData ? buyersData : topBuyers}
            achive={t('bought')}
          />
        </div>
        <ArtboardBackground className={s.users_bg} />
      </Container>
    </section>
  );
};
