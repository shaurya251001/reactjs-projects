import React from "react";

export default function useFetchJobs(params, page) {
  return {
    jobs: [],
    error: false,
    loading: false,
  };
}
