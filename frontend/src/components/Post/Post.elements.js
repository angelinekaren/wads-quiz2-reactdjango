import styled from "styled-components";
import { TextField } from "@mui/material";

export const PostSection = styled.div`
  background: #fff;
  padding: 130px 0 0 0;
  color: #000;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const PostFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const PostFormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostHeading = styled.h1`
  margin-bottom: 30px;
  margin-right: 1rem;
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: #2bc66a;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2bc66a",
      borderRadius: "40px",
      borderWidth: "medium",
    },

    "&:hover fieldset": {
      borderColor: "#2bc66a",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
      borderWidth: "medium",
    },
  },
});

export const Button = styled.button`
  border-radius: 40px;
  background: #2bc66a;
  padding: 12px 80px;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    transition: all 0.25 ease-in-out;
    background: transparent;
    border-style: solid;
    border-width: medium;
    border-color: #2bc66a;
    color: #000;
  }
`;

export const ErrorSubheading = styled.p`
  color: red;
  font-size: 15px;
`;
