'use server';

import { cookies } from 'next/headers';

import { getCart } from '~/client/queries/get-cart';

export const getCartId = async () => {
  const cookieStore = await cookies();

  // eslint-disable-next-line no-console
  console.log('-- server action: getCartId', cookieStore.get('cartId'));
  (await cookies()).set({
    name: 'cartId',
    value: 'xxxxx',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
  });

  return cookieStore.get('cartId')?.value;
};

export const getCartData = async () => {
  const cartId = await getCartId();

  if (cartId) {
    return await getCart(cartId);
  }
};

export const getCurrencyCodeData = async () => {
  const cookieStore = await cookies();

  return cookieStore.get('currencyCode')?.value || 'CAD';
};
