import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Skills = () => {
    return (
        // <Grid container spacing={4}
        //     justifyContent="center"
        //     sx={{
        //         textAlign: "left", marginTop: "5px",
        //         display: "flex",
        //         fontWeight: "10",
        //         padding: "20px"
        //     }}>
            <Grid item md={8} xs={12} >
                <div>
                    <Typography sx={{ fontFamily: "Roboto", fontSize: "13px", color: "purple", marginBottom: "10px" }}>
                        MY SKILLS
                        <hr/>
                    </Typography>
                </div>
                <div> 
                    <Typography sx={{ fontFamily: "Roboto", fontSize: "12px", color: "purple", marginBottom: "10px" }}>
                    Languages: 
                    </Typography>
                    <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                    Scala, Java, Python, SQL, NoSQL
                    </Typography>
                    <Typography sx={{ fontFamily: "Roboto", fontSize: "12px", color: "purple", marginBottom: "10px" }}>
                    Databases:
                    </Typography>
                    <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                    Postgresql, Mysql, Cassandra, Redis
                    </Typography>
                    <Typography sx={{ fontFamily: "Roboto", fontSize: "12px", color: "purple", marginBottom: "10px" }}>
                    Technologies/Frameworks: 
                    </Typography>
                    <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
                    Cats, Cats-Effect, Fs2, Doobie, Http4s, ScalaTest, Circe, Kittens, Fs2-gprc, Scala-cli
                    , Apache Spark, Apache Kafka, Apache Flink, Docker, Kubernetes, Github, Linux.
                    </Typography>
                </div>
            </Grid>
        // </Grid > 
    )
}

export default Skills