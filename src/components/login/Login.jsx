import {Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {TextFields} from "../TextFields";
import MyImage from "../../assets/images/pexels-amina-filkins-5409662.jpg";
import {Link} from "react-router-dom";

export const Login = () => {
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
                        <Typography
                            marginTop={3}
                            sx={{fontFamily: 'Poppins', fontWeight: '500'}}
                            variant={'h4'}>
                            Hi.. Welcome Back :)
                        </Typography>

                        <Button variant={"outlined"} sx={{
                            marginTop: '2vh',
                            borderRadius: '25px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            color: 'black',
                            borderColor: '#bdbaba',
                            width: '60%',
                            height: '5vh'
                        }}>
                            <img
                                style={{height: '15px', marginRight: '10px'}}
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png'}
                                alt={''}
                            />Login With Google</Button>
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
                            <TextFields fields={[{
                                lblText: "Email",
                                placeholder: "Enter Your Email"
                            }, {lblText: "Password", placeholder: "Enter Your Password"}]}/>


                            <Button variant={"contained"} sx={{
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
                            }}>Log in</Button>
                            <Typography sx={{fontFamily: 'Poppins', display: 'flex', marginLeft: '1vw'}}
                                        variant={'h7'}>Don't have an account?
                                <Link to={"/"}><span style={{
                                    color: 'green',
                                    marginLeft: '.5vw'
                                }}>Create an account</span></Link></Typography>
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