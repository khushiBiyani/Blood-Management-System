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

export default function DonationHistoryTable() {
  // const { user } = useContext(Authcontext);
  const [dataToShow, setDataToShow] = useState([
    {
      bd_id: 0,
      bd_donorid: 0,
      bd_date: 0,
      d_btype: "",
      bd_quantity: "",
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.post("http://localhost:3001/history/donated");
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
          marginLeft: "400px",
          fontFamily: "Didot",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#e60000",
        }}
      >
        History
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead style={{ backgroundColor: "#eea29a" }}>
          Donor Details
        </TableHead> */}
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                Transaction Id
              </TableCell>
              {/* <TableCell className={classes.tableHeaderCell}>
                Donor Name
              </TableCell> */}
              <TableCell className={classes.tableHeaderCell}>
                Donor Id
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Date of Donation
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Units (ml)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => {
              const date = new Date(row.bd_date);
              return (
                <TableRow
                  key={row.bd_id}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                  <TableCell style={{ fontSize: 17, alignContent: Center }}>
                    {row.bd_id}
                  </TableCell>
                  <TableCell style={{ fontSize: 17, alignContent: Center }}>
                    {row.bd_donorid}
                  </TableCell>
                  {/* <TableCell style={{ fontSize: 17 }}>{row.d_name}</TableCell> */}
                  <TableCell
                    style={{
                      fontSize: 17,
                      alignContent: Center,
                      alignItems: Center,
                      textAlign: Center,
                      alignSelf: Center,
                    }}
                  >
                    {row.d_btype}
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {date.toLocaleDateString()}
                  </TableCell>

                  {/* <TableCell style={{ fontSize: 17 }}>
                    {row.d_disease}
                  </TableCell> */}
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
