import VideoModal from './video-modal';

const VideoBox = () => {
	return (
		<>
			<h2 className='heading2'>OUR MOTIVE</h2>
			<div
				className='container-fluid card'
				style={{
					background: 'url(video/video.mp4)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<video controls autoPlay muted loop>
					<source src='video/video.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</>
	);
};

export default VideoBox;
