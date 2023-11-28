import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { BuyerIcon } from 'components/icons/BuyerIcon';
import { DashboardIcon } from 'components/icons/DashboardIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { TotalsIcon } from 'components/icons/TotalsIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { KeyIcon } from 'components/icons/KeyIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { ExitIcon } from 'components/icons/ExitIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <DashboardIcon />,
      title: 'dashboard',
      href: ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <TotalsIcon />,
      title: 'sections',
      href: ROUTES.PRIVATE.SECTIONS,
    },
    {
      icon: <StoreIcon />,
      title: 'sellers',
      href: ROUTES.PRIVATE.SELLER.SALES_OFFERS,
    },
    {
      icon: <BuyerIcon />,
      title: 'buyers',
      href: ROUTES.PRIVATE.BUYERS,
    },
    {
      icon: <PaymentIcon />,
      title: 'payment',
      href: ROUTES.PRIVATE.PAYMENT,
    },
    {
      icon: <TransparentAchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    {
      icon: <FlagIcon />,
      title: 'report',
      href: ROUTES.PRIVATE.SELLER.SALES_OFFERS_REQUEST_DETAILS,
    },
    { icon: <ExitIcon />, title: 'logout', href: ROUTES.AUTH.LOGIN },
  ],
};
