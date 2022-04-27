import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { Image } from "@mantine/core";
import picture from "../../../src/bg.jpeg";
import axios from "axios";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [disease, setDisease] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  const handleDiseaseChange = (event) => {
    setDisease(event.target.value);
  };
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleBgroupChange = (event) => {
    setBgroup(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:3001/register/recipient",
      {
        r_name: name,
        r_address: address,
        r_email: email,
        r_phone: mobile.toString(),
        r_dob: dob.toString(),
        r_btype: bgroup,
        r_gender: gender,
        r_disease: disease,
        r_pwrd: pass,
      }
    );
    props.setWhatToShow("login");
    console.log(response);
  };
  return (
    <>
      <div style={{ width: "100px", marginLeft: "0" }}>
        <Image
          radius="md"
          src={picture}
          alt="Random unsplash image"
          width="400px"
          height="800px"
        />
      </div>
      <Box
        sx={(theme) => ({
          backgroundColor: "#ffffff",
          textAlign: "center",
          // padding: theme.spacing.m,
          borderRadius: "15px 50px",
          cursor: "pointer",
          height: "130%",
          width: "300px",

          position: "absolute",
          zIndex: 1,

          right: 420,
          border: "3px solid #7d0d0d",
          padding: "30px",
          top: 0,
        })}
      >
        <Title order={3} sx={{ height: "50px" }}>
          Register
        </Title>

        <TextInput
          placeholder="Name"
          sx={{ height: "75px", width: "300px", textAlign: "center" }}
          label="Name"
          size="sm"
          required
          value={name}
          onChange={handleNameChange}
        />
        <TextInput
          placeholder="Email"
          sx={{ height: "75px", width: "300px" }}
          label="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <TextInput
          placeholder="Password"
          sx={{ height: "75px", width: "300px" }}
          label="Password"
          required
          type="password"
          value={pass}
          onChange={handlePassChange}
        />
        <DatePicker
          placeholder="Pick date"
          label="Date of Birth"
          required
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <TextInput
          placeholder="Gender"
          sx={{ height: "75px", width: "300px" }}
          label="Gender"
          required
          value={gender}
          onChange={handleGenderChange}
        />

        <Select
          label="Blood Group"
          sx={{ height: "75px", width: "300px" }}
          placeholder="Pick one"
          value={bgroup}
          onChange={setBgroup}
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
        />

        <TextInput
          placeholder="Disease"
          sx={{ height: "75px", width: "300px" }}
          label="Disease"
          required
          value={disease}
          onChange={handleDiseaseChange}
        />
        <TextInput
          placeholder="Address"
          sx={{ height: "75px", width: "300px" }}
          label="Address"
          required
          value={address}
          onChange={handleAddressChange}
        />
        <TextInput
          placeholder="Mobile Number"
          sx={{ height: "75px", width: "300px" }}
          label="Mobile Number"
          required
          value={mobile}
          onChange={handleMobileChange}
        />
        <Button
          color="red"
          radius="md"
          size="xs"
          sx={{ marginTop: "15px" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Register
        </Button>
      </Box>
    </>
  );
}
