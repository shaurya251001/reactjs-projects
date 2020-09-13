import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <Container className="my-4">
      <h3 className="mb-4">GitHub Jobs</h3>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error..Try refreshing</h1>}
      <h1>
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </h1>
    </Container>
  );
}

export default App;
