'use client';

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  useTheme, 
  IconButton, 
  useMediaQuery,
  Modal,
  Fade,
  Backdrop
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

// Sample carousel items - replace with your actual content
const carouselItems = [
  {
    id: 1,
    title: 'Advanced Analytics Dashboard',
    description: 'Comprehensive visibility into all your analytics tracking with intuitive visualization tools.',
    image: '/images/carousel/1.png',
  },
  {
    id: 2,
    title: 'Detailed Performance Reports',
    description: 'Generate insightful reports to optimize your website performance and user engagement.',
    image: '/images/carousel/2.png',
  },
  {
    id: 3,
    title: 'Real-time Monitoring',
    description: 'Track analytics events as they happen with our powerful real-time monitoring system.',
    image: '/images/carousel/3.png',
  },
  {
    id: 4,
    title: 'Cross-platform Integration',
    description: 'Seamlessly integrate with all your existing analytics platforms for unified insights.',
    image: '/images/carousel/4.png',
  }
];

const Carousel: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number>(0);
  const transitionEffect = 'translate'; // Always use slide effect
  
  // Responsive settings
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  
  // Number of items to show based on screen size
  const itemsToShow = isDesktop ? 3 : isTablet ? 2 : 1;
  
  // Calculate the maximum index based on items to show
  const maxIndex = carouselItems.length - itemsToShow;

  // Auto-advance the carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    if (index <= maxIndex) {
      setActiveIndex(index);
    }
  };
  
  // Image zoom handling
  const handleImageClick = (imageUrl: string, index: number) => {
    setZoomedImage(imageUrl);
    setZoomedImageIndex(index);
    setIsAutoPlaying(false);
  };
  
  const handleCloseZoom = () => {
    setZoomedImage(null);
    setIsAutoPlaying(true);
  };
  
  const handleZoomedPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    setZoomedImage(carouselItems[zoomedImageIndex === 0 ? carouselItems.length - 1 : zoomedImageIndex - 1].image);
  };
  
  const handleZoomedNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedImageIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setZoomedImage(carouselItems[zoomedImageIndex === carouselItems.length - 1 ? 0 : zoomedImageIndex + 1].image);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
      id="carousel"
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Analytics in Action
        </Typography>
        
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            mb: 4,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Content */}
          <Box
            sx={{
              display: 'flex',
              transition: transitionEffect === 'translate' ? 'transform 0.5s ease' : 'opacity 0.5s ease',
              transform: transitionEffect === 'translate' ? `translateX(-${(activeIndex * 100) / itemsToShow}%)` : 'none',
            }}
          >
            {carouselItems.map((item, index) => (
              <Fade 
                key={item.id} 
                in={transitionEffect === 'fade' ? index >= activeIndex && index < activeIndex + itemsToShow : true}
                timeout={500}
              >
                <Box
                  sx={{
                    minWidth: `${100 / itemsToShow}%`,
                    padding: 1,
                  }}
                >
                  <Box
                    onClick={() => handleImageClick(item.image, index)}
                    sx={{
                      position: 'relative',
                      paddingTop: '62.5%', // 16:10 aspect ratio (800/1280 = 0.625 or 62.5%)
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      bgcolor: 'background.paper',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        '& .zoom-icon': {
                          opacity: 1,
                        },
                        '& img': {
                          filter: 'brightness(1.05)',
                        },
                      },
                    }}
                  >
                    {/* Image background */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                    
                    {/* Zoom Icon Overlay */}
                    <Box
                      className="zoom-icon"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'rgba(255,255,255,0.8)',
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 2,
                      }}
                    >
                      <ZoomInIcon sx={{ color: theme.palette.text.primary }} />
                    </Box>
                    
                    {/* Content overlay - temporarily hidden */}
                    {false && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: { xs: 2, sm: 3 },
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                          color: 'white',
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          sx={{ 
                            mb: 0.5, 
                            fontWeight: 600,
                            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' }
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{
                            display: { xs: 'none', sm: 'block' },
                            fontSize: { sm: '0.8rem', md: '0.9rem' }
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Fade>
            ))}
          </Box>
          
          {/* Navigation buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': {
                bgcolor: 'white',
              },
              zIndex: 1,
            }}
            aria-label="previous slide"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': {
                bgcolor: 'white',
              },
              zIndex: 1,
            }}
            aria-label="next slide"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
          
          {/* Dots navigation */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 16,
              left: 0,
              right: 0,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  p: 0.5,
                  color: index === activeIndex ? theme.palette.primary.main : 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: index === activeIndex ? theme.palette.primary.main : 'white',
                  },
                }}
                aria-label={`go to slide ${index + 1}`}
              >
                <FiberManualRecordIcon sx={{ fontSize: '0.8rem' }} />
              </IconButton>
            ))}
          </Box>
        </Box>
        
        {/* Image Zoom Modal */}
        <Modal
          open={zoomedImage !== null}
          onClose={handleCloseZoom}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Fade in={zoomedImage !== null}>
            <Box 
              onClick={handleCloseZoom}
              sx={{
                position: 'relative',
                width: '90%',
                maxWidth: '90vw',
                height: '90%',
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 0,
                outline: 'none',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Close button */}
              <IconButton
                onClick={handleCloseZoom}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  bgcolor: 'rgba(255,255,255,0.8)',
                  zIndex: 2,
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              
              {/* Navigation buttons */}
              <IconButton
                onClick={handleZoomedPrev}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.8)',
                  zIndex: 2,
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              
              <IconButton
                onClick={handleZoomedNext}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.8)',
                  zIndex: 2,
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
              
              {/* Zoomed image */}
              {zoomedImage && (
                <Box
                  component="img"
                  src={zoomedImage}
                  alt="Enlarged view"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              )}
              
              {/* Image counter */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  p: 2,
                  bgcolor: 'rgba(0,0,0,0.4)',
                  color: 'white',
                  borderTopLeftRadius: 8,
                }}
              >
                <Typography variant="caption">
                  {`${zoomedImageIndex + 1} / ${carouselItems.length}`}
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
};

export default Carousel;
