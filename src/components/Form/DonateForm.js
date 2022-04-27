import { useState, useContext } from "react";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import styles from "./Form.module.css";
import { Image } from "@mantine/core";
import { Repeat } from "@material-ui/icons";
import axios from "axios";
import { getCurrentDate } from "./GetCurrentDate";
import AuthContext from "../../context/Authcontext";

export default function Register() {
  const { user } = useContext(AuthContext);
  const [bloodGroup, setBloodGroup] = useState("");
  const [unit, setUnit] = useState(0);
  const [disease, setDisease] = useState("");
  const [email, setEmail] = useState(user.d_email);
  const [date, setDate] = useState(new Date());

  const handlebgroupChange = (event) => {
    setBloodGroup(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleDiseaseChange = (event) => {
    setDisease(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = async () => {
    // console.log(user);
    const response = await axios.post("http://localhost:3001/donate", {
      d_email: user.d_email,
      bd_date: date,
      bd_quantity: unit,
      bd_bgroup: bloodGroup,
      bd_disease: disease,
    });
    console.log(response);
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: "#ffffff",
          textAlign: "center",
          padding: theme.spacing.m,
          borderRadius: "15px 50px",
          cursor: "pointer",
          height: "320px",
          width: "300px",
          //   position: "fixed",
          bottom: 60,
          right: 550,
          border: "3px solid #7d0d0d",
          padding: "30px",
          // position: "fixed",
          marginTop: "110px",
          backgroundColor: "hsla(9, 100%, 64%, 0.5)",
        })}
      >
        <Title order={2} sx={{ height: "50px", color: "red" }}>
          Donate Blood
        </Title>
        {/* <TextInput
          placeholder="Email"
          sx={{ height: "75px", width: "300px" }}
          label="Email"
          required
          type="email"
          autofill
          value={email}
          onChange={handleEmailChange}
          // onChange={(e) => {
          //   setUnit(e.target.value);
          // }}
        /> */}
        {/* <Select
          label="Blood Group"
          sx={{ height: "75px", width: "300px" }}
          placeholder="Pick one"
          value={bloodGroup}
          onChange={setBloodGroup}
          data={[
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
          ]}
        /> */}
        <TextInput
          placeholder="Unit (ml)"
          sx={{ height: "75px", width: "300px" }}
          label="Unit (ml)"
          required
          type="number"
          value={unit}
          onChange={handleUnitChange}
        />
        <TextInput
          placeholder="Disease"
          sx={{ height: "75px", width: "300px" }}
          label="Disease (if any)"
          value={disease}
          onChange={handleDiseaseChange}
        />
        <TextInput
          placeholder="Date"
          sx={{ height: "75px", width: "300px" }}
          label="Date"
          autofill
          required
          value={getCurrentDate()}
          onChange={handleDateChange}
        />
        <Button
          color="red"
          radius="md"
          size="xs"
          sx={{ marginTop: "10px" }}
          onClick={handleClick}
        >
          Donate
        </Button>
      </Box>
    </>
  );
}
