import { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Updated Grid in MUI v7
import { loginStyles } from "./Login.style";
import ImageAssets from "../../assets";
import Alert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickLogin = () => {
    console.log("Handle Login Click");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Section */}
      <Grid size={{ xs: 12, md: 7, lg: 7 }} sx={loginStyles.leftSection}>
        <Box sx={loginStyles.loginFormHolder}>
          <Box sx={loginStyles.titleHolder}>
            <Typography variant="h4" component="h2">
              Login
            </Typography>
          </Box>

          <Box sx={loginStyles.formHolder}>
            <Alert severity="info">
              <Typography component={"span"}>Use</Typography>{" "}
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                mor_2314
              </Typography>{" "}
              <Typography component={"span"}>with password</Typography>{" "}
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                83r5^_
              </Typography>
            </Alert>

            <TextField
              id="username"
              label="Username"
              variant="outlined"
              placeholder="Enter your username"
              required
              fullWidth
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="Enter your password"
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button variant="contained" onClick={handleClickLogin} fullWidth>
              Login
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* Right Section - Login Form */}
      <Grid
        size={{ xs: 12, md: 5, lg: 5 }}
        sx={loginStyles.rightSectionContainer}
      >
        <Box sx={loginStyles.rightSection}>
          <Box
            component="img"
            src={ImageAssets.ic_login_logo}
            sx={loginStyles.loginLogo}
          />
          <Box
            component="img"
            src={ImageAssets.ic_login_banner}
            sx={loginStyles.logoBanner}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
