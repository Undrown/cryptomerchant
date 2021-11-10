import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Logo from "./components/Logo/Logo";
import SideMenu from "./components/SideMenu/SideMenu";
import PartnershipPage from "./components/PartnershipPage/PartnershipPage";

function App() {
  return (
    <div className="App">
        <Grid container>
            <Grid container item xs={12}>
                <Grid item xs={3} style={{
                    margin: "25px 10px"
                }}>
                    <Logo/>
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            <Grid item xs={3}>
                <SideMenu/>
            </Grid>
            <Grid item xs={9}>
                <PartnershipPage/>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
