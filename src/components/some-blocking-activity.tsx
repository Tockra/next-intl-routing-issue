"use client";

import { useEffect, useState } from "react";

export default function SomeBlockingStuff({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isLoading) {
      setLoading(true); 
      console.log("Started")
      timer = setTimeout(() => {
        setLoading(false); 
        console.log("Ended")
      }, 10000); 
    }
    return () => clearTimeout(timer); 
  }, []);

  if(isLoading) {
    return;
  }

  return (
    <div>
      {children}
    </div>
  );
}
