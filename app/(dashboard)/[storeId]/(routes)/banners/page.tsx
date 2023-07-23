import { format } from 'date-fns';
import prismadb from '@/lib/prismadb';

import { BannerClient } from './components/client';
import { BannerColumn } from './components/columns';

const BannersPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const banners = await prismadb.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedBanners: BannerColumn[] = banners.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BannerClient data={formattedBanners} />
      </div>
    </div>
  );
};

export default BannersPage;
