'use client';

import Box from '@mui/material/Box';

const VideoPlayer: React.FC = () => {
  return (
    <Box 
      id="video-demo-player-container"
      sx={{ 
        position: 'relative', 
        width: '100%',                   
        height: 'auto',
        borderRadius: '24px',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '24px',
          overflow: 'hidden',
          zIndex: 2,
          boxShadow: '0 8px 15px rgba(0,0,0,0.08)'
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/Pg2RqwAw6-A?rel=0&modestbranding=1"
          title="Zen Analytics Intro Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '24px'
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
