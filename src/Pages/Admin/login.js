import { TextInput } from "@mantine/core";
import { useState } from "react";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { Image } from "@mantine/core";
import axios from "axios";
import picture from "../../../src/bg.jpeg";
import { useAlert } from "react-alert";

export default function Login(props) {
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3001/login/admin", {
      id: email,
      pass: password,
    });
    var { status } = response.data;
    console.log(status);
    if (status === "-1") {
      alert.show("Invalid Credentials!");

      console.log("wrong credentials");
    } else {
      // When login request is successful
      props.setWhatToShow("login");
      props.setLoggedIn(1);
    }
  };
  return (
    <>
      <div style={{ width: "100px", marginLeft: "0" }}>
        <Image
          radius="md"
          src={picture}
          alt="Random unsplash image"
          width="400px"
          height="575px"
        />
      </div>
      <Box
        sx={(theme) => ({
          backgroundColor: "#ffffff",
          textAlign: "center",
          padding: theme.spacing.m,
          borderRadius: "15px 50px",
          cursor: "pointer",
          height: "280px",
          width: "300px",
          position: "fixed",
          bottom: 300,
          right: 420,
          top: 120,
          border: "3px solid #7d0d0d",
          padding: "30px",
        })}
      >
        <Title order={3} sx={{ height: "50px" }}>
          Login
        </Title>
        <TextInput
          placeholder="Email"
          sx={{ height: "75px", width: "300px" }}
          label="Email"
          required
          value={email}
          onChange={updateEmail}
        />
        <TextInput
          placeholder="Password"
          sx={{ height: "75px", width: "300px" }}
          label="Password"
          required
          type="password"
          value={password}
          onChange={updatePassword}
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
          Login
        </Button>
        {/* <link href="#">
          Dont have an Account
          <link href="#" onClick={}>
            sign up
          </link>
        </link> */}
      </Box>
    </>
  );
}
