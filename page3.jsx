"use client";
import React from "react";

function MainComponent() {
  useEffect(() => {
    window.location.href = "/account/signin";
  }, []);

  return null;
}

export default MainComponent;