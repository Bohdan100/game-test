'use client';
import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AchiveIcon } from 'components/icons/AchiveIcon';
import { GetTopBuyer } from 'types/buyerTypes';

import s from './TopList.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';
import { animationService } from 'utils/services/animation-service';

interface TopBuyersListProps {
  users: GetTopBuyer[] | undefined;
  achive: string;
}

export const TopList: FC<TopBuyersListProps> = ({ users, achive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div className={s.block} ref={ref}>
      {users?.map((user, index) => {
        const isFirst = user.achievements[0] === '1';

        return (
          <motion.div
            {...animationService.scaleOut({ index, controls: mainControls })}
            className={`${s.user} ${isFirst ? s.user_first : ''}`.trim()}
            key={user.index}
          >
            <Link className={s.user_image} href="">
              <Image
                src={user.avatarURL}
                width={80}
                height={80}
                alt={user.userName}
              />
              <span className={s.user_place}>#{user.achievements[0]}</span>
            </Link>
            <Link className={s.user_name} href="">
              {user.userName}
            </Link>
            <div className={s.user_achive}>
              <AchiveIcon />
              <span>
                {user.achievements[1]} {achive}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
