import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./qualifications.scss";

export function Qualifications() {
  const firstOpen = true;
  return (
    <div className={`view-qualifications`}>
      <Accordion expanded={firstOpen}>
        <AccordionSummary
          expandIcon={<span className="material-icons">expand_more</span>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span className="material-icons">functions</span> Masters in
            Mathematical Engineering - University of Bristol 2003
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <img
            src="/maths.jpg"
            height="300"
            alt="Engineering Mathematics"
            title="Engineering Mathematics"
          />
          <div className="accordion-details__text">
            <Typography variant="h5">
              <a
                href="http://www.bristol.ac.uk/engineering/departments/engineering-mathematics/courses/undergraduate/what-is-emat/"
                target="_blank"
                rel="noreferrer"
              >
                Engineering Mathematics{" "}
                <span className="material-icons">link</span>
              </a>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              What happened to the{" "}
              <a
                href="https://www.youtube.com/watch?v=j-zczJXSxnw"
                target="_blank"
                rel="noreferrer"
              >
                Tacoma Narrows Bridge
              </a>
              ...?
            </Typography>
            <Typography variant="body2" color="textSecondary">
              The art of applying maths to complex real-world problems;
              combining mathematical theory, practical engineering and
              scientific computing to address today’s technological challenges.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Non-linear Dynamics, Chaos Theory, Aerodynamics, Artificial
              Intelligence, Computational Analysis, all really fun stuff...
              <span className="material-icons">mood</span>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<span className="material-icons">expand_more</span>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="material-icons">language</span> Cambridge CELTA
            Teacher Training 2005
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <img src="/english.jpeg" height="300" alt="English" title="English" />
          <div className="accordion-details__text">
            <Typography>
              Teaching English as a foreign language is a great way to see the
              world. I completed my certification in Barcelona, Spain with a
              view to going all around the world. After 7 years, I was still in
              Barcelona, cos it was quite literally the best place to live ever!
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<span className="material-icons">expand_more</span>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <span className="material-icons">language</span> Fluent Spanish
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <img src="/spanish.jpg" height="300" alt="Spanish" title="Sp	anish" />
          <div className="accordion-details__text">
            <Typography>
              After living in Spain for 7 years, I can speak Spanish fluently
              and still practice where I can, just to keep my hand in..
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
