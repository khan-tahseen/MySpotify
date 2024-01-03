'use client';

import { ProductWithPrice } from '@/types';
import Modal from './Modal';

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  let content = <div className="text-center">No Products available</div>;

  if (products?.length) {
    content = (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
