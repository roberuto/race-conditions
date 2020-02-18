import React, { useState, Suspense } from "react";

import { SuspenseText } from "app/components/SuspenseText/SuspenseText";
import { ErrorBoundary } from "app/components/ErrorBoundary/ErrorBoundary";
import { suspenseFetchText } from "api/text";

import { WrappedResource } from "api/text.types";

export const SuspenseFetch = () => {
  const [resource, setResource] = useState<WrappedResource | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setResource(suspenseFetchText(value));
  };

  return (
    <div className="center">
      <h1>Suspense Fetch</h1>
      <input onChange={handleChange} />
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading...</h1>}>
          <SuspenseText resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
