import { StaticImageData } from 'next/image';

export interface GetTopBuyer {
  achievements: string[];
  avatarURL: string | StaticImageData;
  userName: string;
  index: string;
}

export interface GetTopBuyersData {
  getTopBuyers: GetTopBuyer[];
}

export interface GetBuyer {
  userId: number;
  userName: string;
  userEmail: string;
  userDate: string;
  avatarURL: string;
  purchases: string[];
  banned: boolean;
}
