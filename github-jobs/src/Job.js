import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mt-2 mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <h5>
              <Badge variant="secondary" className="mr-2">
                {job.type}
              </Badge>

              <Badge variant="secondary">{job.location}</Badge>
            </h5>
            <h5 style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
            </h5>
          </div>
          <img
            className="d-none d-md-block"
            height="30"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        <Card.Text>
          <Button
            variant="info"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? "View" : "Hide"} Details
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4" style={{ fontSize: "15px" }}>
            <ReactMarkdown source={job.description}></ReactMarkdown>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
