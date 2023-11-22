import YouTube from 'react-youtube';

interface VideoComponentProps {
  videoId: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoId }) => {
  return (
    <div className="w-full flex justify-center items-start video-container">
      <YouTube className="w-full aspect-video" videoId={videoId} />
    </div>
  );
};

export default VideoComponent;
