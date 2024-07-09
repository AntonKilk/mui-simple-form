import {
  Autocomplete,
  FilledTextFieldProps,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  OutlinedTextFieldProps,
  Paper,
  Select,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { JSX } from "react/jsx-runtime";

export const minWidth = 300;
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const defaultPreference = "Work From Home";

export default function ContactForm(props: any) {
  const today = new Date();
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      role: "",
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row>
            <TextField id="name" label="Name" name="name" variant="outlined" />
            <Autocomplete
              options={roles}
              renderInput={(params) => {
                return <TextField name="role" {...params} />;
              }}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Select
              id="skill-select"
              renderValue={(select: string[]) => select.join(", ")}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                {...props}
                label="Date"
                inputFormat="MM/DD/YYYY" //depends on date lib
                renderInput={(
                  params: JSX.IntrinsicAttributes & {
                    variant?: TextFieldVariants | undefined;
                  } & Omit<
                      | FilledTextFieldProps
                      | OutlinedTextFieldProps
                      | StandardTextFieldProps,
                      "variant"
                    >
                ) => {
                  return <TextField {...params} sx={{ minWidth: minWidth }} />;
                }}
              />
            </LocalizationProvider>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
