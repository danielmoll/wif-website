import React from 'react';

export default function failureHandler(error) {
  return (
    <div>Error: {error.message}</div>
  );
}
