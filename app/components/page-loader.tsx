"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    const timeout = window.setTimeout(() => {
      document.documentElement.classList.remove("is-loading");
      setVisible(false);
    }, 2350);

    return () => {
      window.clearTimeout(timeout);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  return <div className="site-loader" role="status" aria-label="Loading NA200 Enterprises">
    <div className="site-loader-logo">
      <Image src="/images/na200/logo-no-line-hd.webp" alt="NA200 Enterprises" width={320} height={160} priority sizes="(max-width: 520px) 72vw, 320px" />
    </div>
  </div>;
}
