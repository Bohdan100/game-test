import { useState } from 'react';
import Image from 'next/image';
import { CellProps, Column } from 'react-table';

import { TableCheckbox } from './Table/checkbox';
import { TableButton } from './Table/button';
import { MinusIcon } from 'components/icons/MinusIcon';
import s from './BuyersHistory/BuyersHistory.module.scss';
import { BanBuyerModal } from 'components/modals/BanBuyerModal';

export const getBuyersColumns = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = () => setIsOpen(!isOpen);

  const columns: Column<any>[] = [
    {
      Header: 'nullCheckbox',
      Cell: ({ row }) => {
        return <TableCheckbox />;
      },
    },
    {
      Header: 'user_name',
      accessor: (row) => (
        <div className={s.user}>
          <Image
            src={row.avatarURL}
            width={48}
            height={48}
            alt={row.userName}
          />
          <div>
            <p>{row.userName}</p>
            <p className={s.user_email}>{row.userEmail}</p>
          </div>
        </div>
      ),
    },
    {
      Header: 'signup_date',
      accessor: (row) => <span className={s.user_context}>{row.userDate}</span>,
    },
    {
      Header: 'purchases',
      accessor: (row) => (
        <div className={s.user_context}>
          <p>{row.purchases[0]}</p>
          <p>{row.purchases[1]}</p>
        </div>
      ),
    },
    {
      Header: 'null_minus',
      Cell: ({ row }) => {
        return (
          <>
            <button
              className={s.user_minusBtn}
              onClick={() => {
                //  current UserId - row.original.userId
                handleModal();
              }}
            >
              <span
                className={`${s.user_minusIconWrap} ${
                  row.original.banned === true ? s.user_minusActiveBtn : ''
                }`}
              >
                <MinusIcon />
              </span>
            </button>
            <BanBuyerModal
              isOpen={isOpen}
              closeModal={handleModal}
              userId={row.original.userId}
              redirectUrl={'#'}
            />
          </>
        );
      },
    },

    {
      Header: 'null_arrow',
      Cell: ({ row }) => {
        return <TableButton href={'#'} className={s.user_arrowBtn} />;
      },
    },
  ];

  return columns;
};
