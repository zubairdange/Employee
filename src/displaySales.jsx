import React, { useState, useEffect } from "react";

export const DisplaySales = ({ Person, Location }) => {
  const [PersonLocal, setPersonLocal] = useState("");
  const [LocalLocation, setLocalLocation] = useState("");
  useEffect(() => {
    setPersonLocal(Person);
    setLocalLocation(Location);
  }, [Person, Location]);

  return (
    <div>
      The person Name {PersonLocal} and The Location is {LocalLocation};
    </div>
  );
};
