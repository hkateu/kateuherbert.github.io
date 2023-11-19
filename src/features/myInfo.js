import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Skills from "./skills";
import Education from "./education";

const MyInfo = () => {
  return (
    <div>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          textAlign: "left",
          marginTop: "80px",
          display: "flex",
          fontWeight: "10",
          padding: "20px",
        }}
      >
        <Grid item md={8} xs={12}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontFamily: "Righteous", fontSize: "40px", padding: "0px" }}
          >
            Kateu Herbert
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontFamily: "DM Serif Display", fontSize: "37px" }}
          >
            Scala Backend Engineer
          </Typography>
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            <a href="mailto:hkateu@gmail.com" target="_blank">
              <img src="email.png" alt="email" width={35} height={35} />
            </a>
            <a href="https://twitter.com/kateuherbert" target="_blank">
              <img src="x.png" alt="x" width={35} height={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/herbert-kateu/"
              target="_blank"
            >
              <img src="linkedin.png" alt="linkedin" width={35} height={35} />
            </a>
            <a href="https://github.com/hkateu" target="_blank">
              <img src="github.png" alt="github" width={35} height={35} />
            </a>
          </Typography>
        </Grid>
        <Grid item md={5} xs={12} sx={{ padding: "10px" }}>
          <Typography sx={{ fontFamily: "Dosis", fontSize: "25px" }}>
            I am a motivated backend developer capable of testing, maintenance,
            feature development and deployment of software systems with a keen
            interest in functional programming, microservices architecture,
            distributed systems, community development and opensource.
          </Typography>
          <Typography sx={{ fontFamily: "Dosis", fontSize: "25px" }}>
            I started my career as a statistician, transitioned to data science,
            and finally fell in love with Scala while learning Apache Spark.
            I've since been committed to the language and am happy that I
            contribute to the community as best as I can.
          </Typography>
          <br />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "13px",
              color: "purple",
              marginBottom: "10px",
              marginTop: "15px",
            }}
          >
            WORK EXPERIENCE
            <hr />
          </Typography>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              March 2023 - Present
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Rock The Jvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              Technical Writer
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              January 2023 - Present
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Baeldung
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              Technical Writer
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              August 2021 - September 2022
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              National Water and Sewerage Corporation
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              Business Intelligence Analyst
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              August 2017 - August 2021
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              National Water and Sewerage Corporation
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              Data Analyst
            </Typography>
          </div>
          <br />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "13px",
              color: "purple",
              marginBottom: "10px",
              marginTop: "15px",
            }}
          >
            PROJECTS
            <hr />
          </Typography>
          <div>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              XONAL
            </Typography>
            <Typography
              sx={{ fontFamily: "Work Sans", color: "gray", fontSize: "12px" }}
            >
              <a href="https://www.xonal.live" target="_blank">
                https://www.xonal.live
              </a>
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              A radio streaming application that focuses on improved
              interactions with talk show hosts and guests
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              Stack: Scala, React.Js, Material Design, Typelevel libraries.
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <ul>
                <li>
                  Built with React.Js and Material Design for a responsive
                  design
                </li>
                <li>
                  Backend i built in Scala using Typelevel libraries like Cats,
                  Cats-Effect and Circe
                </li>
                <li>Intergrated Postgresql with Doobie</li>
                <li>
                  Built backend in Tagless Final style for easy extensibilty
                </li>
                <li>Deployment done with Docker</li>
              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid item md={3} xs={12} sx={{ padding: "10px" }}>
          <Skills />
          <Education />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          textAlign: "left",
          display: "flex",
          fontWeight: "10",
          padding: "20px",
        }}
      >
        <Grid item md={8} xs={12} sx={{ padding: "10px" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "13px",
              color: "purple",
              marginBottom: "10px",
            }}
          >
            ARTICLES
            <hr />
          </Typography>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              November 5th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Baeldung
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://www.baeldung.com/scala/yaml-scala-3"
                target="_blank"
              >
                Handling YAML in Scala 3.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              October 2nd 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              RockTheJvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://blog.rockthejvm.com/grpc-in-scala-with-fs2-scalapb/"
                target="_blank"
              >
                gRPC in Scala with Fs2 and ScalaPB.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              September 4th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Baeldung
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://www.baeldung.com/scala/spark-dataframe-get-first-n-rows"
                target="_blank"
              >
                Get the First N Rows of a Spark Dataframe.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              September 4th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Baeldung
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://www.baeldung.com/scala/spark-joining-dataframes"
                target="_blank"
              >
                Joining Two DataFrames in Scala Spark.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              July 27th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              RockTheJvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://blog.rockthejvm.com/oauth-authentication-scala-http4s/"
                target="_blank"
              >
                OAuth Authentication in Scala with Http4s.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              July 27th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              RockTheJvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://blog.rockthejvm.com/otp-authentication-scala-http4s/"
                target="_blank"
              >
                Two-Factor Authentication in Scala with Http4s.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              June 28th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Baeldung
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://www.baeldung.com/scala/filter-none-from-map"
                target="_blank"
              >
                Filter "None" Values From a Map.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              June 6th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              RockTheJvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://blog.rockthejvm.com/scala-http4s-authentication/"
                target="_blank"
              >
                HTTP Authentication with Scala and Http4s.
              </a>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: "gray",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              March 30th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              RockTheJvm
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://blog.rockthejvm.com/security-in-http4s/"
                target="_blank"
              >
                Configuring Http4s Security: CORS and CSRF.
              </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyInfo;
