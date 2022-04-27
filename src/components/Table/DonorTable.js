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

// console.log(Users);

export default function DonorTable() {
  // const { user, setUser } = useContext(Authcontext);
  const [dataToShow, setDataToShow] = useState([
    {
      d_id: 0,
      d_age: 0,
      d_btype: "",
      d_address: "",
      d_phone: 0,
      d_gender: "",
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.post("http://localhost:3001/donors");
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
          marginLeft: "330px",
          fontFamily: "Didot",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#e60000",
        }}
      >
        Donor Details
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead style={{ backgroundColor: "#eea29a" }}>
          Donor Details
        </TableHead> */}
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Id</TableCell>
              {/* <TableCell className={classes.tableHeaderCell}>Name</TableCell> */}
              <TableCell className={classes.tableHeaderCell}>Age</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Gender</TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                // style={{ textAlign: "center" }}
              >
                Mobile
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => {
              const curr = new Date();
              const dob = new Date(row.d_dob);
              const rawAge = curr.getTime() - dob.getTime();
              const age = Math.ceil(rawAge / (1000 * 60 * 60 * 24 * 365));
              return (
                <TableRow key={row.d_name}>
                  <TableCell style={{ fontSize: 17, marginLeft: "2px" }}>
                    {row.d_id}
                  </TableCell>

                  <TableCell style={{ fontSize: 17, marginLeft: "5px" }}>
                    {age}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: 17,
                      alignContent: Center,
                      alignItems: Center,
                      textAlign: Center,
                      alignSelf: Center,
                      // padding: "5px",
                    }}
                  >
                    {row.d_btype}
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>{row.d_gender}</TableCell>
                  <TableCell style={{ fontSize: 17 }}>{row.d_phone}</TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {row.d_address}
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
