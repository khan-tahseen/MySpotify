import { Song } from '@/types';
import MediaItem from './MediaItem';
import LikeButton from './LikeButton';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
import Slider from './Slider';

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill;
  const IconColor = true ? 'text-black' : 'text-green-500';
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className={`${IconColor}`} />
        </div>
      </div>
      <div className="hidden h-full w-full md:flex items-center justify-center max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          onClick={() => {}}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} className={`${IconColor}`} />
        </div>
        <AiFillStepForward
          size={30}
          onCilck={() => {}}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon className="cursor-pointer" size={24} onClick={() => {}} />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
