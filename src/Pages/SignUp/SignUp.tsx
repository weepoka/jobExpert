/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import logo from "../../assets/brandLogo/logo.png";
import google from "../../assets/brandLogo/google.png";
import facebook from "../../assets/brandLogo/facebook.png";
import appstore from "../../assets/brandLogo/appstore (1).png";
import googlestore from "../../assets/brandLogo/appstore (2).png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ mt: 10, mb: 10 }}>
        <Box
          sx={{
            fontSize: "16px",
            width: "50%",
            mx: "auto",
            textAlign: "center",
            mt: 5,
          }}
        >
          <p>
            Job Expert বাংলাদেশের প্রথম এবং সর্ববৃহৎ Virtual Exam Center (VEC)
            বিসিএস প্রিলিমিনারি এবং অন্যান্য MCQ পরীক্ষার প্রস্তুতির জন্য হাজারো
            পরীক্ষার্থীর সাথে চূড়ান্ত পরীক্ষার আগেই LIVE মডেল টেস্ট দিয়ে নিজের
            অবস্থান যাচাই করে নিন।
          </p>
        </Box>
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
            <Box sx={{ width: "200px", mb: 3 }}>
              <img src={logo} alt="" />
            </Box>
            <Typography component="h1" variant="h5" sx={{ fontSize: "16px" }}>
              ই-মেইল অথবা ফোন নাম্বার দিয়ে রেজিস্ট্রেশন করুন
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="নাম লিখুন"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ই-মেইল অথবা ফোন নাম্বার লিখুন"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="পাসওয়ার্ড লিখুন"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="পূনরায় পাসওয়ার্ড লিখুন"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              {/* submit button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  pt: 1.5,
                  backgroundColor: "#26A4DE",
                  "&:hover": {
                    backgroundColor: "#26A4DE",
                  },
                  fontSize: "16px",
                }}
              >
                রেজিস্ট্রেশন করুন
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 5,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  width: "200px",

                  border: "1px solid  #808080",
                }}
              ></Box>
              <Box sx={{ mx: 2 }}>OR</Box>
              <Box sx={{ flex: 1, border: "1px solid  #808080" }}></Box>
            </Box>
          </Box>

          {/* google and facebook login button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                flex: 1,
                mt: 3,
                mb: 2,
                p: 1.5,
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <img src={google} alt="" />
              </Box>
            </Button>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                mt: 3,
                mb: 2,
                p: 1.5,
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <img src={facebook} alt="" />
              </Box>
            </Button>
          </Box>

          {/* group logo png */}

          <Box sx={{ width: "80%", my: 5, mx: "auto" }}>
            <img src={logo} alt="" className="mx-auto mt-16" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
              <img src={appstore} alt="" className="w-40" />
              <img src={googlestore} alt="" className="w-40" />
            </div>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
