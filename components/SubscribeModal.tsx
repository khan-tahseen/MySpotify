'use client';

import Modal from './Modal';

const SubscribeModal = () => {
  let content = <div className="text-center">No Products available</div>;
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
