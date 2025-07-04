import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeInput } from "../redux/actions/resumeActions";

function Forms() {
  // add hook
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.resume.inputs);

  // function to update and get the input from textarea (2 way binding)
  const updateInputs = (key, value) => {
    dispatch(
      updateResumeInput({
        [key]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    // mencegah browser untuk refresh setelah button diclick
    e.preventDefault();
    console.log("inputs: ", e);
  };

  return (
    <Container size="1" mt="9">
      <Heading>Resume Generator</Heading>
      <Text>Create your new Resume using AI and get more work done!</Text>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Box mt="6">
          <Text size="1" mb="2">
            Contact Information
          </Text>
          <TextArea
            placeholder="Name, Age, Bio"
            value={inputs.contactInformation}
            onChange={(e) => updateInputs("contactInformation", e.target.value)}
            required
          />
        </Box>
        <Box mt="6">
          <Text size="1" mb="2">
            Technical Skills
          </Text>
          <TextArea
            placeholder="Programming language, Framework and Library, etc"
            value={inputs.technicalSkills}
            onChange={(e) => updateInputs("technicalSkills", e.target.value)}
            required
          />
        </Box>
        <Box mt="6">
          <Text size="1" mb="2">
            Professional Experience
          </Text>
          <TextArea
            placeholder="Job Title, company name, responsibilities, achivements"
            value={inputs.professionalExperience}
            onChange={(e) =>
              updateInputs("professionalExperience", e.target.value)
            }
            required
          />
        </Box>
        <Box mt="6">
          <Text size="1" mb="2">
            Projects
          </Text>
          <TextArea
            placeholder="Technology used, what you learn, etc"
            value={inputs.projects}
            onChange={(e) => updateInputs("projects", e.target.value)}
            required
          />
        </Box>
        <Box mt="6">
          <Text size="1" mb="2">
            Education
          </Text>
          <TextArea
            placeholder="Certifications, skills, etc"
            value={inputs.education}
            onChange={(e) => updateInputs("education", e.target.value)}
            required
          />
        </Box>
        <Button
          type="submit"
          mt="5"
          style={{ maxWidth: "100%", width: "100%" }}
          onClick={(e) => handleSubmit(e)}
        >
          Create Resume
        </Button>
      </form>
    </Container>
  );
}

export default Forms;
