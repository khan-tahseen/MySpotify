'use client';

import { Song } from '@/types';

interface MediaItemProps {
  data: Song;
  onClick?: (id: String) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  return <div className="media-item">this is media..</div>;
};

export default MediaItem;
