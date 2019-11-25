import React from "react";
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Profile = ({credits,onButtonSubmit,errorState,helperText,times}) => {


    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.primary.dark,

        },
    }));
    const Spacing = () => {
        return(
            <div>
                <br/>
                <Divider/>
                <br/>
            </div>
        )
    };

        const classes = useStyles();

         const FormRow = () =>{
            return (

                <React.Fragment>
                    <Grid color={'primary.main'} item xs={4}>
                        <Paper className={classes.paper}>
                            <br/>
                            Name
                            <Spacing/>
                            Member ID
                            <Spacing/>
                            Address
                             <Spacing/>
                            Employer Name
                            <Spacing/>
                            Date of Birth
                            <Spacing/>
                            <span style={{color: 'brown'}}>Credits</span>
                            <Spacing/>
                            Times of Credits Use
                            <br/>
                            <br/>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <br/>
                            Todd
                            <Spacing/>
                            13579
                            <Spacing/>
                            2311, North Los Robles Avenue, Pasadena, California, USA.
                            <Spacing/>
                            Mr. Clark
                            <Spacing/>
                            7th May 1999
                            <Spacing/>
                            <span style={{color: 'brown'}}>$ {credits}</span>
                            <Spacing/>
                            {times}
                            <br/>
                            <br/>
                        </Paper>
                    </Grid>
                </React.Fragment>
            );
        };

    return(
        <div>
                <h1 className='header' style={{color: "beige"}}>Personal Details</h1>
            <div className={`custom_grid ${classes.root}`}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </div>
            <div className='custom_paper'>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={8}>
                                 <TextField error={errorState} helperText={helperText} id="standard-basic" label="Amount" style={{width: '160px'}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" style={{marginTop:'5px'}}
                                        onClick={onButtonSubmit}>
                                    Use Credits
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default Profile;