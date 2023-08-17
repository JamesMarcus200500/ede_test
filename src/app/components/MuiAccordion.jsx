import { ExpandCircleDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const MuiAccordion = ({ faq: data, expended, setExpended }) => {
  const handleExpend = (isExpend, panel) => {
    setExpended(isExpend ? panel : false);
  };

  return (
    <Accordion
      sx={{
        padding: 1,
        borderRadius: "20px",
        // "&:not(:last-child)": { marginBottom: 2 },
        // "&:last-child": { boxShadow: 2 },
        "&:hover": { boxShadow: 5 },
      }}
      onChange={(e, isExpend) => handleExpend(isExpend, data.id)}
      expanded={expended === data.id}
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDown sx={{ color: "#7896FF" }} />}
      >
        {data.question}
      </AccordionSummary>
      <hr />
      <AccordionDetails>{data.content}</AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordion;
