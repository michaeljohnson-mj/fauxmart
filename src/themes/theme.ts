import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import shape from "./shape";
import shadow from "./shadows";
import typography from "./typography";
import muiComponents from "./mui-components";

const theme = createTheme({
  palette,
  shape,
  shadows: shadow,
  typography,
  components: muiComponents,
});

export default theme;
