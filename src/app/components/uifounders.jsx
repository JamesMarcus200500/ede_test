import { Container, Grid, Stack, Typography } from "@mui/material";
import AvatarUi from "../components/AvatarUi";

export default function UiFounders() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
      }}
    >
      <Grid
        container
        sx={{
          paddingTop: "81px",
          minHeight: "569px",
          paddingBottom: "130px",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
          >
            Founders
          </Typography>
        </Grid>

        <Grid container item spacing={10}>
          <Grid item xs={4}>
            <AvatarUi />
            <Typography
              variant="h5"
              component="h5"
              sx={{ fontFamily: "Raleway", fontWeight: 600 }}
            >
              Mr. Ben Johnson
            </Typography>
            <Typography
              sx={{ color: "#454545", fontFamily: "Raleway", fontSize: "18px" }}
            >
              Founder
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <AvatarUi />
            <Typography
              variant="h5"
              component="h5"
              sx={{ fontFamily: "Raleway", fontWeight: 600 }}
            >
              Mr. Khon Tarry
            </Typography>
            <Typography
              sx={{ color: "#454545", fontFamily: "Raleway", fontSize: "18px" }}
            >
              Mr. Bohn Bas
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <AvatarUi />
            <Typography
              variant="h5"
              component="h5"
              sx={{ fontFamily: "Raleway", fontWeight: 600 }}
            >
              Mr. Ben Johnson
            </Typography>
            <Typography
              sx={{ color: "#454545", fontFamily: "Raleway", fontSize: "18px" }}
            >
              Director
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
