import React from 'react';

export default function handleFailure(failure) {
  return (
    <div>Error: {failure.message}</div>
  );
}
