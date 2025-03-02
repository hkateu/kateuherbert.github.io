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
            Technical Writer
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
            I started technical writing as a part-time job to supplement my income, 
            with time I realized many people found value in the content I wrote and it
             also gave me an in-depth understanding of the software I use. 
            After years of writing I've grown fond of the profession and familiar with the tools required, 
            I now do this full-time because of its flexibility, good pay, and enthusiasm to learn and teach.
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
        </Grid>
        <Grid item md={3} xs={12} sx={{ padding: "10px" }}>
          <Skills />
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
              October 15th 2024
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              fs2.io
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://fs2.io/#/concurrency-primitives?id=channel"
                target="_blank"
              >
                Fs2 Channel documentation
              </a> <br/>
              <a href="https://github.com/typelevel/fs2/pull/3475">PR</a>
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
              August 29th 2024
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
                href="https://www.baeldung.com/scala/nscala-time-date-computation"
                target="_blank"
              >
                Better Date and Time Handling in Scala using nScala-Time
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
              May 23rd 2024
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
                href="https://rockthejvm.com/articles/websockets-in-scala-part-2-integrating-redis-and-postgresql"
                target="_blank"
              >
                WebSockets in Scala: Part 2 - Intergrating Redis and PostgreSQL
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
              May 16th 2024
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
                href="https://www.baeldung.com/scala/refined-types"
                target="_blank"
              >
                Refining Existing Types in Scala With Refined
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
              May 5th 2024
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
                href="https://www.baeldung.com/scala/ciris-configuration-loading"
                target="_blank"
              >
                Configuration Loading With Ciris
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
              February 19th 2024
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
                href="https://rockthejvm.com/articles/websockets-in-scala-part-1-http4s"
                target="_blank"
              >
                WebSockets in Scala: Part 1 - http4s
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
              January 29th 2024
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
                href="https://www.baeldung.com/scala/cats-data-validation"
                target="_blank"
              >
                Data Validation With Cats
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
              December 18th 2023
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
                href="https://rockthejvm.com/articles/udp-with-scala-and-fs2"
                target="_blank"
              >
                UDP with Scala and FS2 Explained
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
              December 5th 2023
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Slab",
                color: "black",
                fontSize: "13px",
              }}
            >
              Scala Matters
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", color: "black" }}>
              <a
                href="https://www.scalamatters.io/post/sealed-traits-vs-enums-for-adts"
                target="_blank"
              >
                Sealed Traits Vs Enums for ADTs 
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
                href="https://rockthejvm.com/articles/grpc-in-scala-with-fs2-and-scalapb"
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
                href="https://rockthejvm.com/articles/authentication-with-scala-and-http4s-oauth"
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
                href="https://rockthejvm.com/articles/authentication-with-scala-and-http4s-oauth-two-factor-authentication"
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
                href="https://rockthejvm.com/articles/authentication-with-scala-and-http4s"
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
                href="https://rockthejvm.com/articles/configuring-http4s-security-handling-cors-and-csrf"
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
