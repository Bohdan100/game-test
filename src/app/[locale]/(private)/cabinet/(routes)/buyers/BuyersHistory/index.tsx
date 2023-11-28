import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { GetBuyer } from 'types/buyerTypes';

import { IPaymentForm, Form } from '../Form';
import { Table } from '../Table';
import { getBuyersColumns } from '../getBuyersColumns';
import s from './BuyersHistory.module.scss';

import MarvinImg from 'assets/images/top-sellers/marvin.png';
import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';
import RalphImg from 'assets/images/top-sellers/ralph.png';
import WadeImg from 'assets/images/top-sellers/wade.png';

const exampleAllBuyers = [
  {
    userId: 1,
    userName: 'Kristin Watson',
    userEmail: 'elflord@mac.com',
    userDate: '31/05/20, 14:20',
    avatarURL: MarvinImg,
    purchases: ['36', '6900.00'],
    banned: false,
  },
  {
    userId: 2,
    userName: 'Kathryn Murphy',
    userEmail: 'smallpaul@me.com',
    userDate: '31/05/19, 15:20',
    avatarURL: KristinImg,
    purchases: ['25', '4400.00'],
    banned: false,
  },
  {
    userId: 3,
    userName: 'Esther Howard',
    userEmail: 'mfburgo@live.com',
    userDate: '03/10/21, 11:00',
    avatarURL: ArthurImg,
    purchases: ['8', '74.00'],
    banned: true,
  },
  {
    userId: 4,
    userName: 'Floyd Miles',
    userEmail: 'mccurley@yahoo.ca',
    userDate: '22/07/22, 19:00',
    avatarURL: RalphImg,
    purchases: ['36', '360.00'],
    banned: false,
  },
  {
    userId: 5,
    userName: 'Jenny Wilson',
    userEmail: 'jginspace@mac.com',
    userDate: '20/09/21, 09:30',
    avatarURL: WadeImg,
    purchases: ['17', '360.00'],
    banned: true,
  },
];

interface BuyersHistoryProps {
  allBuyersList: GetBuyer[] | undefined;
}

export const BuyersHistory: FC<BuyersHistoryProps> = ({ allBuyersList }) => {
  const t = useTranslations('ProfilePage.Buyers');

  const [filteredBuyers, setFilteredBuyers] = useState(exampleAllBuyers);

  const handleSearch = ({ transaction_code }: IPaymentForm) => {
    let searchBuyers = exampleAllBuyers;
    if (transaction_code) {
      searchBuyers = exampleAllBuyers?.filter(
        (buyer) =>
          buyer.userName
            ?.toLowerCase()
            .includes(transaction_code?.toLowerCase().trim())
      );
    }

    setFilteredBuyers(searchBuyers);
  };

  return (
    <div className={s.wrap}>
      <Form onSearch={handleSearch} />
      <Table
        data={filteredBuyers}
        columns={getBuyersColumns()}
        translateFn={t}
      />
    </div>
  );
};
