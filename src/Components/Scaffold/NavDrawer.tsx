import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactTable from "../Table/ContactTable";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "rgba(120, 120, 120, 0.2)",
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
  },
};

export default function NavDrawer() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Anton's styling training
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{ sx: simpleStyles.drawerPaper, elevation: 9 }}
        >
          <Toolbar />
          <div>
            <List>
              {[
                { text: "Contact Form", route: "/form" },
                { text: "Card Grid", route: "/grid" },
                { text: "Table", route: "/table" },
                { text: "Data Grid", route: "/datagrid" },
              ].map((nav) => (
                <ListItem key={nav.text}>
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <Routes>
            <Route path={"/form"} element={<ContactForm />}></Route>
            <Route path={"/grid"} element={<ContactCardGrid />}></Route>
            <Route path={"/table"} element={<ContactTable />}></Route>
            <Route path={"/data"} element={<ContactDataGrid />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
