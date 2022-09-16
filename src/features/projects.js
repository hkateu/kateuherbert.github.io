import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Projects = () => {
    return (
        <Grid container spacing={4}
            justifyContent="center"
            sx={{
                textAlign: "left", marginTop: "5px",
                display: "flex",
                fontWeight: "10",
                padding: "20px"
            }}>
            <Grid item md={8} xs={12} >
                <div>
                    <Typography sx={{ fontFamily: "Roboto", fontSize: "11px", color: "purple", marginBottom: "10px" }}>
                        MY SKILLS
                    </Typography>
                </div>
                <div>
                    <Typography sx={{ fontFamily: "Roboto Slab", color: "black", fontSize: "13px" }}>
                        Software Development
                        <br />
                        Machine Learning
                        <br />
                        Data Science
                        <br />
                        Business Intelligence
                    </Typography>
                </div>
            </Grid>
        </Grid >
    )
}

export default Projects