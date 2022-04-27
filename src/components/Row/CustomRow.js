import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mantine/core";
import axios from "axios";

export default function CustomRow(props) {
  const handleAccept = async () => {
    // Accept Request
    const response = await axios.post("http://localhost:3001/approve", {
      status: 1,
      bt_transacid: props.row.bt_transacid,
    });
    console.log(response);
    props.updateData();
  };

  const handleReject = async () => {
    const response = await axios.post("http://localhost:3001/approve", {
      status: -1,
      bt_transacid: props.row.bt_transacid,
    });
    console.log(response);
    props.updateData();
  };
  let status = props.row.bt_status;
  // console.log(status);
  console.log(props);
  const disabled = props.row.bt_status === 0 ? false : true;
  // const disabled = false;

  const date = new Date(props.row.bt_date);
  return (
    <TableRow
      key={props.row.bt_transacid}
      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/* <TableCell component="th" scope="props.row">
  {props.row.name}
</TableCell> */}
      <TableCell style={{ fontSize: 17 }}>{props.row.bt_transacid}</TableCell>
      {/* <TableCell style={{ fontSize: 17 }}>{props.row.name}</TableCell> */}
      <TableCell style={{ fontSize: 17 }}>
        {date.toLocaleDateString()}
      </TableCell>
      <TableCell style={{ fontSize: 17 }}>{props.row.r_btype}</TableCell>

      <TableCell style={{ fontSize: 17 }}>{props.row.r_disease}</TableCell>
      <TableCell style={{ fontSize: 17 }}>{props.row.bt_quantity}</TableCell>
      {/* <TableCell style={{ fontSize: 17 }}>{props.row.bt_status}</TableCell> */}
      <TableCell
        className={props.classes.status}
        style={{
          fontSize: 17,
          backgroundColor:
            (props.row.status === "Active" && "green") ||
            (props.row.status === "Pending" && "blue") ||
            (props.row.status === "Blocked" && "red"),
        }}
      >
        {status === -1 && <>Rejected</>}
        {status === 0 && <>Pending</>}
        {status === 1 && <>Accepted</>}
        {status === 2 && <>Delivered</>}
      </TableCell>
      <TableCell style={{ fontSize: 17 }}>
        {" "}
        <Button
          color="green"
          size="xs"
          disabled={disabled}
          onClick={handleAccept}
        >
          Accept
        </Button>{" "}
        <Button
          color="red"
          size="xs"
          disabled={disabled}
          onClick={handleReject}
        >
          Reject
        </Button>
      </TableCell>
    </TableRow>
  );
}
