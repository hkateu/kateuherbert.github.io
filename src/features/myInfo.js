import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const MyInfo = () => {
    return (
        <div>
            <Grid container spacing={4}
                justifyContent="center"
                sx={{
                    textAlign: "left", marginTop: "80px",
                    display: "flex",
                    fontWeight: "10",
                    padding: "20px"
                }}>
                <Grid item md={8} xs={12} >
                    <Typography variant="h4" component="h2" sx={{ fontFamily: "Righteous", fontSize: "40px", padding: "0px" }}>
                        Kateu Herbert
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ fontFamily: "DM Serif Display", fontSize: "37px" }}>
                        Scala Engineer
                    </Typography>
                </Grid>
                <Grid item md={5} xs={12} sx={{ padding: "10px" }}>
                    <Typography sx={{ fontFamily: "Dosis", fontSize: "25px" }}>
                        I am passionate software developer, coming from a statistics backgronund,
                        i have experience with running alot of data science tasks and creating  models
                        using machine learning, because of this Scala was a natural choice and has since
                        become my new found love.
                        <br />
                        <br />
                        I am now working at a small startup called Xonal helping build the
                        furture of audio streaming in Africa, this has taught me alot about product developement,
                        team work, and building a business. Alot of my work reflects my journey from data science to
                        backend development.

                    </Typography>
                </Grid>
                <Grid item md={3} xs={12} sx={{ padding: "10px" }}>
                    <div>
                        <Typography sx={{ fontFamily: "Roboto", fontSize: "11px", color: "purple" }}>
                            MY TIMELINE
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            March 2021
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Co-Founder, CTO
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Xonal
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            Feb 2020
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Learnt Scala
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Self Taught
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            August 2021 - September 2022
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Business Intelligence Analyst
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            National Water and Sewerage Corporation
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            January 2019
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Learnt React
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Self Taught
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            January 2017 - August 2021
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Data Analyst
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            National Water and Sewerage Corporation
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            November 2015
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Learnt Data Science
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Udemy
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            November 2015
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            PHP Web Developer
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Freelancer
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px", marginTop: "20px" }}>
                            August 2011
                        </Typography>
                        <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                            Bachelors in Economics and Statistics
                        </Typography>
                        <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                            Kyambogo University
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default MyInfo
