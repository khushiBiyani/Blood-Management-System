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
import AuthContext from "../../context/Authcontext";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 500,
    maxWidth: 750,
    margin: "auto",
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: "70%",
    marginLeft: "120px",
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
  const { user } = useContext(AuthContext);
  const [dataToShow, setDataToShow] = useState([
    {
      bt_transacid: 0,
      bt_date: 0,
      // bloodGroup: "",
      bt_quantity: 0,
      bt_status: "",
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.post("http://localhost:3001/requested", {
      id: user.r_id,
    });
    // console.log(response.data);
    setDataToShow(response.data);
  };

  useEffect(() => {
    updateData();
  }, []);
  return (
    <div>
      <h1
        style={{
          marginLeft: "390px",
          fontFamily: "Didot",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#e60000",
        }}
      >
        My Requests
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          {/* <TableHead style={{ backgroundColor: "#eea29a" }}>
          Donor Details
        </TableHead> */}
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ width: "150px" }}
              >
                Transaction Id
              </TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ width: "200px" }}
              >
                Date of Request
              </TableCell>
              {/* <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell> */}
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ width: "150px" }}
              >
                Units (ml)
              </TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ width: "150px" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => {
              const date = new Date(row.bt_date);

              return (
                <TableRow
                  key={row.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                  <TableCell
                    style={{
                      fontSize: 17,
                      display: "flex",
                      justifyContent: "space-around",
                      alignContent: "space-around",
                    }}
                  >
                    <div>{row.bt_transacid}</div>
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {date.toLocaleDateString()}
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {row.bt_quantity}
                  </TableCell>
                  <TableCell style={{ fontSize: 17 }}>
                    {row.bt_status}
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
