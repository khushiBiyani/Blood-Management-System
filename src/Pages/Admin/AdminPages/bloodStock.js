import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import styles from "../AdminPages/bloodStock.module.css";
import { Grid } from "@mui/material";
import axios from "axios";

export default function BloodStock() {
  const groups = [
    {
      bGroup: "O+",
      bUnit: 250,
    },
    {
      bGroup: "O-",
      bUnit: 110,
    },
    {
      bGroup: "A+",
      bUnit: 200,
    },
    {
      bGroup: "A-",
      bUnit: 300,
    },
    {
      bGroup: "B+",
      bUnit: 600,
    },
    {
      bGroup: "B-",
      bUnit: 530,
    },
    {
      bGroup: "AB+",
      bUnit: 340,
    },
    {
      bGroup: "AB-",
      bUnit: 310,
    },
  ];
  const [data, setData] = useState(groups);

  const getData = async () => {
    const response = await axios.post("http://localhost:3001/bloodbank");
    console.log(response);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  // const [unitsOfBlood, setUnitsOfBlood] = useState([
  //   {
  //     bloodGroup: "",
  //     unit: 0,
  //   },
  // ]);
  return (
    <div className={styles.Card}>
      <Grid
        container
        // justify="center"
        spacing={0}
        sx={{
          marginLeft: "238px",
          // eslint-disable-next-line no-useless-computed-key
          ["@media (max-width:960px)"]: {
            // display: "none",
            marginLeft: "50px",
            // marginTop: "0px",
          },
          marginTop: "-20px",
          // marginRight: "30px",
          maxWidth: "80%",
        }}
      >
        {groups.map((group) => {
          return (
            <Grid item p={4} xs={12} md={4}>
              <Card bGroup={group.bGroup} bUnit={group.bUnit} data={data} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
