'use client';

import { Song } from '@/types';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  return <div className="liked-content">Liked Content</div>;
};

export default LikedContent;
