import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function BloodCard(props) {
  return (
    <Card
      sx={{
        display: "flex",
        // background: "linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%)",
        backgroundColor: "#d9d9d9",
        backgroundImage: "linear-gradient(90deg, #cfd9df 0%, #e2ebf0 100%)",

        width: "290px",
        height: "130px",
      }}
    >
      {/* <CardHeader
        style={{ fontSize: 50 }}
        // header="Name"
        title={props.bGroup}
      />

      <CardContent>{props.bUnit}</CardContent>
      </Card> */}
      <Box sx={{ flexDirection: "column" }}>
        <CardContent
          style={{ color: "black", fontSize: 25, marginTop: "-35px" }}
        >
          <h3>{props.bGroup}</h3>
          <p>
            {/* {props.data[props.bGroup] === undefined
              ? "Nil"
              : props.data[props.bGroup]} */}
            {props.data[props.bGroup] === undefined && <>Nil</>}
            {props.data[props.bGroup] !== undefined &&
              props.data[props.bGroup] === null && <>Nil</>}
            {props.data[props.bGroup] !== undefined &&
              props.data[props.bGroup] !== null && (
                <>{props.data[props.bGroup]}</>
              )}
            {/* {props.bUnit} */}
          </p>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, marginTop: 2, marginLeft: 13 }}
        image="https://media.istockphoto.com/vectors/drop-vector-id1081786788?k=20&m=1081786788&s=612x612&w=0&h=LbVZIIk-YIkPU2z3smmTa5XhniEkZqZd1i9vRhVk5TA="
        alt="Live from space album cover"
      />
    </Card>
  );
}
