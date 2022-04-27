import { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import { FormatUnderlined } from "@material-ui/icons";
import Authcontext from "../../context/Authcontext";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: "90%",
  },
  tableHeaderCell: {
    // textDecoration: "underline",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#204060",
    color: "white",
    // alignItems: Center,
  },
}));

// const Donations = [];
// Donations[1] = {
//   id: 1,
//   age: 30,
//   bloodGroup: "O+",
//   unit: 300,
//   status: "approved",
// };
// console.log(Users);

export default function DonorDonationTable() {
  const { user } = useContext(Authcontext);
  const [dataToShow, setDataToShow] = useState([
    {
      bd_id: 0,
      d_id: 0,
      d_age: 0,
      d_btype: "",
      bd_date: 0,
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.post("http://localhost:3001/history/donated", {
      d_email: user.email,
    });
    console.log(response);
    setDataToShow(response.data);
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div>
      <h1
        style={{
          marginLeft: "350px",
          fontFamily: "Didot",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#e60000",
        }}
      >
        My Donations
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead style={{ backgroundColor: "#eea29a" }}>
          Donor Details
        </TableHead> */}
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Id</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Date of Donation
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Unit (ml)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => {
              const date = new Date(row.bd_date);

              return (
                <TableRow
                  key={row.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                  <TableCell style={{ fontSize: 17 }}>{row.bd_id}</TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {date.toLocaleDateString()}
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>{row.d_btype}</TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {row.bd_quantity}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

{
  /* <CustomRowComponent row={row} updateData={updateData}/> */
}
