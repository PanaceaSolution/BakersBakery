import { Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const UserReviewCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%', 
        padding: theme.spacing(2), 
      }}
    >
      <Card
        sx={{
          width: '100%', 
          maxWidth: 737, 

          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e0e0e0',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          [theme.breakpoints.down('sm')]: {
            p: 2, 
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
              src="path/to/your/avatar.png" 
              alt="User Avatar"
              sx={{
                width: 80,
                height: 80,
                mt: isSmallScreen ? 0 : -2, 
                alignSelf: isSmallScreen ? 'flex-end' : 'auto',
              }}
            />
          </Box>

          <Typography variant="h6" component="p" sx={{ mb: 2, lineHeight: 1.5, flexGrow: 1,
            [theme.breakpoints.down('sm')]: {
              fontSize: '1rem', 
            }
          }}>
            Absolutely loved the custom birthday cake I ordered! The design matched my idea perfectly
            and tasted even better!
          </Typography>

          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', mb: 1,
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem', 
            }
          }}>
            Sabita Shrestha- Bhaktapur
          </Typography>

          <Rating name="read-only" value={4.5} precision={0.5} readOnly size={isSmallScreen ? 'medium' : 'large'} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserReviewCard;