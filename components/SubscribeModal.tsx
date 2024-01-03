'use client';

import Modal from './Modal';

const SubscribeModal = () => {
  return (
    <Modal
      title="Only for premium users"
      description="Listen to the music you love with My Spotify Premium subscription."
      isOpen
      onChange={() => {}}
    >
      Subscription
    </Modal>
  );
};

export default SubscribeModal;
