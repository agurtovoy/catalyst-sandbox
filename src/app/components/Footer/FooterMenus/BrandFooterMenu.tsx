import { getBrands } from '@client';

import { BaseFooterMenu } from './BaseFooterMenu';

export const BrandFooterMenu = async () => {
  const brands = await getBrands();

  if (brands.length === 0) {
    return null;
  }

  return <BaseFooterMenu items={brands} title="Brands" />;
};
