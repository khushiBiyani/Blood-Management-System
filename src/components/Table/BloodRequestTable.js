import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomTableRow from "../../components/Row/CustomRow";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import Authcontext from "../../context/Authcontext";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 800,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    width: "70vw",
  },
  tableHeaderCell: {
    // textDecoration: "underline",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#204060",
    color: "white",
    // alignItems: Center,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.70rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "2px 8px",
    display: "inline-block",
    marginTop: "15px",
    marginLeft: "2px",
  },
}));

export default function BloodRequestTable() {
  const [dataToShow, setDataToShow] = useState([
    {
      id: 0,
      name: "",
      age: 0,
      bloodGroup: "",
      reason: "",
      unit: 0,
      status: "",
      stockAvailability: "",
    },
  ]);
  const classes = useStyles();

  const updateData = async () => {
    const response = await axios.post("http://localhost:3001/history/request");

    console.log(response.data);
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
        Blood Requests
      </h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                Transaction Id
              </TableCell>
              {/* <TableCell className={classes.tableHeaderCell}>Name</TableCell> */}
              <TableCell className={classes.tableHeaderCell}>
                Date of Request
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Blood Group
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Disease</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Units (ml)
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
              <TableCell className={classes.tableHeaderCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToShow.map((row) => (
              <CustomTableRow
                row={row}
                classes={classes}
                updateData={updateData}
              />
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
