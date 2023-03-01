import { Grid } from "@mui/material";
import { ComponentType, ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopCharts from "./TopCharts";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container sx={{ minHeight: "99vh", position: "relative" }}>
      <Grid item xs={3} sx={{ position: "fixed", minWidth: "200px" }}>
        <Sidebar />
      </Grid>
      <Grid container item xs={10} sx={{ ml: 35 }}>
        <Grid item xs={7}>
          {children}
        </Grid>
        <Grid item xs={4}>
          <TopCharts />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
