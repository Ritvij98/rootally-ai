import { Route, Switch, Redirect } from "react-router";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 " style={{position:"fixed",left:0,height:"100%", boxShadow: "0 8px 16px 0 #BDC9D7",}}>
            <Sidebar/>
          </div>
          <div className="col-10 offset-2 pl-4" style={{  background: "rgba(192, 214, 255, 0.281)"}}>
            <Header/>
            <br/>
            <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                     
                      <Redirect to="/dashboard" />
                    )
                }}
              />
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/patients" exact>
                <Patients />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
