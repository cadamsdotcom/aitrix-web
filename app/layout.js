import config from "@config/config.json";
import theme from "@config/theme.json";
import TwSizeIndicator from "@layouts/components/TwSizeIndicator";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import Providers from "@layouts/partials/Providers";
import "../styles/style.scss";

export const metadata = {
  title: "AI Trix Consulting",
  description: "AI Trix Website - based on Bigspring Lite Nextjs Template",
};

export default function RootLayout({ children }) {
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={config.site.apple_touch_icon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={config.site.favicon_32x32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={config.site.favicon_16x16}
        />
        <link rel="manifest" href={config.site.manifest} />
        {/* theme meta */}
        <meta name="theme-name" content="andromeda-light-nextjs" />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />

        {/* theme meta */}
        <meta name="theme-name" content="andromeda-light-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
