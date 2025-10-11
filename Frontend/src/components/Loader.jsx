import React from "react";

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-500"></div>
    </div>
  );
}
