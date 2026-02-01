'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ServiceCard({ service }) {
  const IconComponent = service.icon;     

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid #f0f0f0',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(26, 35, 126, 0.2)',
          borderColor: '#ff6f00',
        },
      }}
    >
      {/* Icon Header Area */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
          background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
          borderBottom: '2px solid #f0f0f0',
          transition: 'all 0.3s ease',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
            color: 'white',
            transition: 'all 0.3s ease',
          }}
        >
          <IconComponent sx={{ fontSize: 48 }} />
        </Box>
      </Box>

      {/* Card Header with Title and Description */}
      <CardHeader
        title={
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: '#1a237e',
            }}
          >
            {service.title}
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontSize: { xs: '0.9rem', md: '1rem' },
              mt: 1,
            }}
          >
            {service.description}
          </Typography>
        }
        sx={{ pb: 1 }}
      />

      {/* Content with Details */}
      <CardContent sx={{ flexGrow: 1, pt: 0 }}>
        <List dense sx={{ p: 0 }}>
          {service.details.map((detail, idx) => (
            <ListItem
              key={idx}
              disableGutters
              sx={{
                alignItems: 'flex-start',
                py: 0.8,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 28,
                  color: '#ff6f00',
                  mt: 0.3,
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={detail}
                primaryTypographyProps={{
                  variant: 'body2',
                  sx: {
                    color: '#555',
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          pt: 2,
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <Button
          size="small"
          fullWidth
          sx={{
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '0.95rem',
            py: 1,
            color: '#ff6f00',
            border: '1px solid #ff6f00',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#ff6f00',
              color: 'white',
            },
          }}
        >
          Mehr erfahren →
        </Button>
      </CardActions>
    </Card>
  );
}
