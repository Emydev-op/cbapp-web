import React from "react";

export default function LoginLayout({ children }) {
  return (
    <div className="bg-white absolute top-0 bottom-0 right-0 left-0 z-20">
      {children}
    </div>
  );
}
