import { styled, StylesProvider } from "@chakra-ui/react";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import styles from "./Form.module.css";
import { Image } from "@mantine/core";
import AuthContext from "../../context/Authcontext";
import { useState, useContext } from "react";
import { getCurrentDate } from "./GetCurrentDate";
import axios from "axios";

export default function Register() {
  const { user } = useContext(AuthContext);
  const [bloodGroup, setBloodGroup] = useState("");
  const [email, setEmail] = useState(user.r_email);
  const [reason, setReason] = useState("");
  const [date, setDate] = useState(new Date());
  const [unit, setUnit] = useState("");
  const [disease, setDisease] = useState("");

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
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3001/request", {
      r_email: user.r_email,
      bt_date: date,
      bt_quantity: unit,
      btype: bloodGroup,
      disease: disease,
      reason: reason,
    });
    // const response = await axios.post("http://localhost:3001/recipients");

    console.log(response);
  };
  return (
    <>
      <div className={styles.form}>
        <Box
          sx={(theme) => ({
            backgroundColor: "#ffffff",
            textAlign: "center",
            padding: theme.spacing.m,
            borderRadius: "15px 50px",
            cursor: "pointer",
            height: "350px",
            width: "300px",
            //   position: "fixed",
            bottom: 60,
            right: 550,
            border: "3px solid #7d0d0d",
            padding: "30px",
            marginTop: "120px",
            backgroundColor: "hsla(9, 100%, 64%, 0.5)",
          })}
        >
          <Title
            order={2}
            sx={{ height: "40px", color: "red", marginTop: "-20px" }}
          >
            Request Blood
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
          /> */}
          {/* <Select
            label="Blood Group"
            sx={{ height: "75px", width: "300px" }}
            placeholder="Pick one"
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
            value={bloodGroup}
            onChange={(e) => {
              setBloodGroup(e);
            }}
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
            placeholder="Reason"
            sx={{ height: "75px", width: "300px" }}
            label="Reason"
            required
            value={reason}
            onChange={handleReasonChange}
          />
          {/* <TextInput
            placeholder="Age"
            sx={{ height: "75px", width: "300px" }}
            label="Age"
            required
          /> */}
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
            sx={{ marginTop: "8px" }}
            onClick={handleClick}
          >
            Request
          </Button>
        </Box>
      </div>
    </>
  );
}
