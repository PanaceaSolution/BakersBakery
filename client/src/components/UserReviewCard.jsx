import { Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    text: 'Absolutely loved the custom birthday cake I ordered! The design matched my idea perfectly and tasted even better!',
    name: 'Sabita Shrestha - Bhaktapur',
    rating: 4.5,
    avatar: 'path/to/avatar1.png',
  },
  {
    id: 2,
    text: 'Great service and on-time delivery. The cake was super moist and fresh!',
    name: 'Ramesh Khatri - Kathmandu',
    rating: 5,
    avatar: 'path/to/avatar2.png',
  },
  {
    id: 3,
    text: 'Ordered for an anniversary. Presentation and taste were both top-notch!',
    name: 'Mina Gurung - Lalitpur',
    rating: 4,
    avatar: 'path/to/avatar3.png',
  },
];

const UserReviewCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', padding: theme.spacing(2) }}>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides
        slidesPerView={1.05}
        spaceBetween={-80}   
        navigation
        pagination={{ clickable: true }}
        loop
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
              slide.style.transform = 'scale(1) translateY(0)';
              slide.style.zIndex = 10;
            } else {
              slide.style.transform = 'scale(0.9) translateY(20px)';
              slide.style.zIndex = 1;
            }
          });
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card
              sx={{
                maxWidth: 737,
                margin: '0 auto',
                borderRadius: '16px',
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e0e0e0',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s ease, z-index 0.4s ease',
                [theme.breakpoints.down('sm')]: {
                  p: 2,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 2,
                    flexDirection: isSmallScreen ? 'column' : 'row',
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 60,
                      color: '#C62828',
                      mr: isSmallScreen ? 0 : 2,
                      mb: isSmallScreen ? 1 : 0,
                      transform: 'rotate(180deg)',
                    }}
                  />
                  <Avatar
                    src={review.avatar}
                    alt="User Avatar"
                    sx={{
                      width: 80,
                      height: 80,
                      mt: isSmallScreen ? 0 : -2,
                      alignSelf: isSmallScreen ? 'flex-end' : 'auto',
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    lineHeight: 1.5,
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1rem',
                    },
                  }}
                >
                  {review.text}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '0.9rem',
                    },
                  }}
                >
                  {review.name}
                </Typography>

                <Rating
                  name="read-only"
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  size={isSmallScreen ? 'medium' : 'large'}
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default UserReviewCard;
