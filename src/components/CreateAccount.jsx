import {Button, Checkbox, Container, Divider, FormControlLabel, Grid, Stack, Typography} from "@mui/material";
import {TextFields} from "./TextFields";
import MyImage from "../assets/images/pexels-gabriela-guerino-1839904.jpg";
import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";

export const CreateAccount = () => {
    let [count,setCount] = useState(0);
    let navigate = useNavigate();
    return <>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            bgcolor: 'white',
            height: '100vh',
            width: '100vw',
            padding: '0!important'
        }} maxWidth={false}>
            <Grid container sx={{height: '100vh', width: '100%'}}>
                <Grid justifyContent={'center'} alignItems={'center'} width={'100%'} display={'flex'} item xs={6}
                      sx={{height: '100vh', bgcolor: '#FFFFFF'}}>
                    <Stack width={'100%'} alignItems={"center"} gap={2}>
                        <Typography marginTop={3} sx={{fontFamily: 'Poppins', fontWeight: '500'}} variant={'h4'}>Create
                            your account</Typography>
                        <Typography marginTop={-1} color={'#5a5757'} sx={{fontFamily: 'Poppins', fontWeight: '300'}}
                                    variant={'h6'}>Let's get started with your 30 day free trial</Typography>
                        <Button variant={"outlined"} sx={{
                            marginTop: '2vh',
                            borderRadius: '25px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            color: 'black',
                            borderColor: '#bdbaba',
                            width: '60%',
                            height: '5vh'
                        }}><img style={{height: '15px', marginRight: '10px'}}
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png'}
                                alt={''}/>Login With Google</Button>
                        <Container sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            width: '80%',
                            marginTop: '2vh'
                        }}>
                            <Divider sx={{width: '35%',}}/>
                            <Typography color={'#5a5757'} sx={{fontFamily: 'Poppins', fontWeight: '300'}}
                                        variant={'h6'}>Or</Typography>
                            <Divider sx={{width: '35%'}}/>
                        </Container>
                        <Stack marginBottom={1} sx={{gap: '20px', width: '65%', marginTop: '2vh'}}>
                            <TextFields fields={[{lblText: "Name", placeholder: "Enter Your Name"}, {
                                lblText: "Email",
                                placeholder: "Enter Your Email"
                            }, {lblText: "Password", placeholder: "Enter Your Password"}]}/>
                            <FormControlLabel sx={{alignSelf: 'start', marginLeft: '1vw'}} control={<Checkbox/>}
                                              label="I agree to all terms, Privacy Policy and Fees"/>

                            <Button variant={"contained"} onClick={(e)=>{navigate('/login');}} sx={{
                                alignSelf: 'center',
                                marginTop: '2vh',
                                borderRadius: '25px',
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                borderColor: '#bdbaba',
                                width: '95%',
                                height: '5vh',
                                bgcolor: '#222222',
                                color: 'white'
                            }}>Sign Up</Button>
                            <Typography sx={{fontFamily: 'Poppins', display: 'flex', marginLeft: '1vw'}}
                                        variant={'h7'}>Already have an account?
                                <Link to={"/login"}><span style={{color: 'green', marginLeft: '.5vw'}}>Log in</span></Link></Typography>
                        </Stack>

                    </Stack>
                </Grid>
                <Grid alignItems={'center'} justifyContent={'center'} display={'flex'} item xs={6}
                      sx={{height: '100vh', bgcolor: 'white'}}>
                    <Container sx={{
                        borderTopLeftRadius: '30px',
                        borderBottomRightRadius: '30px',
                        height: '90%',
                        width: '70%',
                        background: `url(${MyImage})center`,
                        backgroundSize: 'cover'
                    }}>

                    </Container>
                </Grid>
            </Grid>
        </Container>
    </>
}