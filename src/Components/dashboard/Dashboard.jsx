'use client'
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 6, md: 9 }} columns={{ xs: 2, sm: 4, md: 6 }}>
          <Grid item xs={111} sm={114} md={114}  >
            <Item>xs=2</Item>
          </Grid>
      </Grid>
    </Box>
  );
}
