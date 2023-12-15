'use client';

import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

const Loading = () => { 
  return (
    <Box className="h-full flex justify-center items-center">
      <div className="text-2xl text-neutral-300">Loading...</div>
      <BounceLoader />
    </Box>
  );
};

export default Loading;
