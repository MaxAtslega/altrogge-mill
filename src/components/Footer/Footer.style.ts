import {styled} from "@mui/system";
import { Box } from "@mui/material"

export const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  background: "#7DBA67",

  "@media screen and (max-width: 850px)": {
    display: "block",
    textAlign: "center",
  },
})
