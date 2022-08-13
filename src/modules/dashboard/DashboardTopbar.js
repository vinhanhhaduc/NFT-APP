import React, { useEffect, useState } from 'react';
import DashboardSearch from './parts/DashboardSearch';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import detectEthereumProvider from '@metamask/detect-provider';
import { toast } from 'react-toastify';
const useStyles = makeStyles({
  root: {
    background: 'primary',
    color: 'white',
    height: 48,
    padding: '0 30px',
    top: '24px',
    left: '24px',
    position: 'relative',
  },
});
const DashboardTopbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const classes = useStyles();
  return (
    <div className="">
      <div className="flex items-center justify-between pr-[72px] ">
        <DashboardSearch></DashboardSearch>
        <Button className={classes.root} variant="contained">
          {walletAddress
            ? walletAddress.slice(0, 7) + '...' + walletAddress.slice(34, 38)
            : 'Connect wallet'}
        </Button>
      </div>
    </div>
  );
};

export default DashboardTopbar;
