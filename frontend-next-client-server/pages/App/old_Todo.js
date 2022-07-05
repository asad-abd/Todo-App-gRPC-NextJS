import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const theme = createTheme();

export default function App() {
  const [longUrl, setLongUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [expiry, setExpiry] = useState("30");
  const [emptyError, setEmptyError] = useState(false);
  const [customLengthError, setCustomLengthError] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    // if (longUrl.length === 0) {
    //   setEmptyError(true);
    // } else if (custom.length !== 6 && custom.length !== 0) {
    //   setCustomLengthError(true);
    // } else {
    //   if (customLengthError === true) setCustomLengthError(false);
    //   if (emptyError === true) setEmptyError(false);
    //   console.log(expiry);
    //   //http://ec2-52-66-88-54.ap-south-1.compute.amazonaws.com:3001/shorten
    //   axios
    //     .put("http://UrlShort-263832923.ap-south-1.elb.amazonaws.com/api/shorten", {
    //       longUrl: longUrl,
    //       expiry: expiry,
    //       customUrl: custom,
    //     })
    //     .then(function (response) {
    //       if (response?.err) {
    //         alert(response?.err);
    //       } else {
    //         alert("Successful");
    //         setShortUrl(response.data);
    //       }
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //       }
    //     });
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <HttpOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            URL Shortener
          </Typography>

          <Box
            component="form"
            onSubmit={handleAddTodo}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={emptyError}
              margin="normal"
              required
              fullWidth
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              label="Enter the URL to shorten"
              autoFocus
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Short URL Expiry (in days from now)
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </NativeSelect>
            </FormControl>
            <TextField
              margin="normal"
              error={customLengthError}
              fullWidth
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              inputProps={{ maxLength: 6 }}
              label="Custom Url (only 6 character long from [a-z, A-Z, 0-9]"
              autoFocus
            />
            {shortUrl !== "" && (
              <a href={shortUrl} target="__blank">
                {shortUrl}
              </a>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generate Short URL
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}