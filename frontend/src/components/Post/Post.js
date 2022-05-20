import React, { useCallback, useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  PostSection,
  Container,
  PostFormContainer,
  PostFormCard,
  PostHeading,
  Form,
  CssTextField,
  Button,
  ErrorSubheading,
} from "./Post.elements";

const Post = function () {
  const navigate = useNavigate();
  const [successfulPOST, setSuccessfulPost] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    alias: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:8000/hero/heroes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      setSuccessfulPost(true);

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
      setError("Request failed!");
    }
  };

  if (successfulPOST === true) {
    return navigate("/");
  } else {
    return (
      <PostSection>
        <Container>
          <PostFormContainer>
            <Fade in timeout={2500}>
              <PostFormCard>
                <PostHeading>Post Hero</PostHeading>
                <Form onSubmit={handleSubmit}>
                  <CssTextField
                    label="Enter name"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange("name")}
                    InputProps={{
                      style: {
                        marginBottom: "1rem",
                      },
                    }}
                  />
                  <CssTextField
                    label="Enter alias"
                    variant="outlined"
                    value={values.alias}
                    onChange={handleChange("alias")}
                    InputProps={{
                      style: {
                        marginBottom: "1rem",
                      },
                    }}
                  />
                  <Button type="submit">Submit</Button>
                  {error && <ErrorSubheading>{error}</ErrorSubheading>}
                </Form>
              </PostFormCard>
            </Fade>
          </PostFormContainer>
        </Container>
      </PostSection>
    );
  }
};

export default Post;
