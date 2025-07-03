import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  TextArea,
} from "@radix-ui/themes";
import React from "react";

function Form() {
  return (
    <Container size="1" mt="9">
      <Heading>Resume Generator</Heading>
      <Text>Create your new Resume using AI and get more work done!</Text>

      <Box mt="6">
        <Text size="1" mb="2">
          Contact Information
        </Text>
        <TextArea placeholder="Name, Age, Bio" />
      </Box>
      <Box mt="6">
        <Text size="1" mb="2">
          Technical Skills
        </Text>
        <TextArea placeholder="Programming language, Framework and Library, etc" />
      </Box>
      <Box mt="6">
        <Text size="1" mb="2">
          Professional Experience
        </Text>
        <TextArea placeholder="Job Title, company name, responsibilities, achivements" />
      </Box>
      <Box mt="6">
        <Text size="1" mb="2">
          Projects
        </Text>
        <TextArea placeholder="Technology used, what you learn, etc" />
      </Box>
      <Box mt="6">
        <Text size="1" mb="2">
          Education
        </Text>
        <TextArea placeholder="Certifications, skills, etc" />
      </Box>
      <Button mt="5" style={{ maxWidth: "100%", width: "100%" }}>
        Create Resume
      </Button>
    </Container>
  );
}

export default Form;
