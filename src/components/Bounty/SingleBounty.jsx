import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";
import { ArrowRight } from "../../icons/arrow-right";
import { useRouter } from "next/router";
import { Bookmark } from "../../icons/bookmark";
import { Search } from "../../icons/search";
export const SingleBounty = ({ name, description, image, amount }) => {
  const router = useRouter();

  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={name} />
          <CardContent>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {amount}$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          {/* <div f>
            <Save />
          </div> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              padding: "1rem",
            }}
          >
            <Box
              onClick={() => {
                router.push("/Collab/Collab");
              }}
              sx={{ padding: "0.5rem" }}
            >
              {/* Find Collabrators */}
              <Search />
            </Box>
            <Box sx={{ padding: "0.5rem" }}>
              {/*  Bookmark  */}
              <Bookmark />
            </Box>
            <Box
              onClick={() => router.push("/AllBounties/Detailpage")}
              sx={{ padding: "0.5rem" }}
            >
              {/* Detail page */}
              <ArrowRight />
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};
