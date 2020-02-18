import React, { useState } from "react";

import { Text } from "app/components/Text/Text";
import { fetchText } from "api/text";

export const RegularFetch = () => {
  const [text, setText] = useState(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    fetchText(value)
      .then(response => response.json())
      .then(json => setText(json));
  };

  return (
    <div className="center">
      <h1>Regular Fetch</h1>
      <input onChange={handleChange} />
      <Text text={text} />
    </div>
  );
};
