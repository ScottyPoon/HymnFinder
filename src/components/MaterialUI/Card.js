// MyCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";

const MyCard = ({ title, author, scripture_reference, link }) => {
  return (
    <Card
      sx={{
        minWidth: 645,
      }}
    >
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="text.secondary">{author}</Typography>
        <Typography color="text.secondary">{scripture_reference}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lyrics
        </Button>
      </CardActions>
    </Card>
  );
};

export default function OutlinedCard({
  title,
  author,
  scripture_reference,
  link,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {MyCard({ title, author, scripture_reference, link })}
      </Card>
    </Box>
  );
}
