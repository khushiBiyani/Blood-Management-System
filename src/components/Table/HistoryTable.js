import { useEffect, useState } from "react";
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

const Donors = [];
Donors[1] = {
  donorId: 2,
  date: "30/03/2022",
  bloodGroup: "O+",
  disease: "None",
  unit: 300,
  // requestDate:
};
// console.log(Users);

export default function BloodRequestTable() {
  const [dataToShow, setDataToShow] = useState([
    {
      donorId: 0,
      date: "",
      bloodGroup: "",
      disease: "",
      unit: 0,
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.get("");
    setDataToShow(response);
  };

  // useEffect(()=>{
  //   updateData();
  // },[])
  return (
    <div>
      <h1
        style={{
          marginLeft: "300px",
          fontFamily: "Didot",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#e60000",
        }}
      >
        Donation History
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead style={{ backgroundColor: "#eea29a" }}>
          Donor Details
        </TableHead> */}
          <TableHead>
            <TableRow>
              {/* <TableCell className={classes.tableHeaderCell}>Id</TableCell> */}
              <TableCell className={classes.tableHeaderCell}>
                Donor Id
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Date of Donation
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Disease</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Unit (ml)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Donors.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                {/* <TableCell style={{ fontSize: 17, alignContent: Center }}>
                  {row.id}
                </TableCell> */}
                <TableCell style={{ fontSize: 17 }}>{row.donorId}</TableCell>
                <TableCell style={{ fontSize: 17 }}>{row.date}</TableCell>
                <TableCell
                  style={{
                    fontSize: 17,
                    alignContent: Center,
                    alignItems: Center,
                    textAlign: Center,
                    alignSelf: Center,
                  }}
                >
                  {row.bloodGroup}
                </TableCell>
                <TableCell style={{ fontSize: 17 }}>{row.disease}</TableCell>
                <TableCell style={{ fontSize: 17 }}>{row.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

{
  /* <CustomRowComponent row={row} updateData={updateData}/> */
}
