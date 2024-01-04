'use client';

import { Price, ProductWithPrice } from '@/types';
import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price?.currency || 'INR',
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);

  return priceString;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {};

  let content = <div className="text-center">No Products available</div>;

  if (products?.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {' '}
                No prices available
              </div>
            );
          }

          return product.prices?.map((price) => (
            <Button
              key={price.id}
              onClick={() => handleCheckout(price)}
              disabled={isLoading || price.id === priceIdLoading}
              className="mb-4"
            >{`Subscribe for ${formatPrice(price)} a ${
              price.interval
            }`}</Button>
          ));
        })}
      </div>
    );
  }
  return (
    <Modal
      title="Only for premium users"
      description="Listen to the music you love with My Spotify Premium subscription."
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
