import React from "react";

function Error() {
  return (
    <div className="error-message">
      <div className="error-text">
        <h3>Oops! Something went wrong.</h3>
        <p>We couldn't fetch the data. Please try again later.</p>
      </div>
    </div>
  );
}

export default Error;
