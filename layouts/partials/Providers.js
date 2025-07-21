"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Initialize PostHog
if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ph",
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

const Providers = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);

    // Track page views
    if (typeof window !== "undefined") {
      posthog.capture("$pageview");
    }
  }, [pathname]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default Providers;
