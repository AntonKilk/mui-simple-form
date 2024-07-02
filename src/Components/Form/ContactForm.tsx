import { Paper } from "@mui/material";
import { contactData } from "../../Data/ContactData";

export const minWidth = 300;
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const defaultPreference = "Work From Home";

export default function ContactForm() {
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
      <form></form>
    </Paper>
  );
}
