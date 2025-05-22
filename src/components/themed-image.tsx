"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemedImage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const src = theme === "dark" ? process.env.NEXT_PUBLIC_BASE_PATH + "/Sona_Dark.png" : process.env.NEXT_PUBLIC_BASE_PATH + "/Sona_Light.png";


  return (
    <Image
      src={src}
      alt="Me!"
      width={400}
      height={100}
      priority
      unoptimized
    />
  );
}
