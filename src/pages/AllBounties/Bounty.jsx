import { Grid, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { SingleBounty } from "../../components/Bounty/SingleBounty";
const Bounty = () => {
  const router = useRouter();

  return (
    <>
      <Typography
        mt={2}
        sx={{ fontSize: "3rem", display: "flex", justifyContent: "center" }}
      >
        Bounties
      </Typography>

      <Grid
        sx={{ paddingTop: "4rem" }}
        container
        spacing={2}
        gap={10}
        justifyContent="center"
        place-items="center"
      >
        {/* {arr.map(({ name, amount, description, image }) => {
          return (
            <>
            <div key={}>
            <SingleBounty name={name} amount={amount} description={description} image={image} />
            </div>
            </>
          );
        })} */}
        <SingleBounty
          name="Dao 1st/ bounty "
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
        <SingleBounty
          name="Dao 1st"
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
        <SingleBounty
          name="Dao 1st"
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
        <SingleBounty
          name="Dao 1st"
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
        <SingleBounty
          name="Dao 1st"
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
        <SingleBounty
          name="Dao 1st"
          amount="2000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed fuga molestias, officia ducimus excepturi cum nam perspiciatis nemo! Libero doloremque adipisci cum illum itaque sit, laudantium corporis minima quod."
          image=""
        />
      </Grid>
    </>
  );
};

export default Bounty;
