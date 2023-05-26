import {AppBar, Grid, Typography} from "@mui/material";
import './Nav.css';
import {Search} from "@mui/icons-material";
import {TextFields} from "../TextFields";

export const Nav = () => {
    return <>
        <AppBar className={'header'}
                sx={{boxShadow: 'none', bgcolor: '#FFFFFF', color: 'black'}}>
            <Grid container>
                <Grid item xs={4}>
                    <Typography
                        marginLeft={7}
                        variant={"h6"}
                        className='appTxt appBarText'>
                        MERN STORE
                    </Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'center'} gap={2} item xs={4}>
                    {['Shop', 'Most Wanted', 'New Arrival', 'Brands'].map((item) => <Typography
                        variant={'h7'}>{item.toUpperCase()}</Typography>)}
                </Grid>
                <Grid display={'flex'} justifyContent={'center'} item xs={4} flexWrap={'wrap'}>
                    {/*<div className={'search'}></div>*/}
                    <TextFields fields={[{lblText:"",placeholder:'Search Store'}]}/>

                </Grid>
            </Grid>


        </AppBar>
    </>
}