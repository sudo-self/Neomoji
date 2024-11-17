export default function Head() {
  return (
    <>
      {/* General Meta Tags */}
      <title>NeoMoji 🌌</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="NeoMoji, emoji matrix, emoji database, fun emojis, emoji sharing, emoji copy, emoji collection, emoticons, online fun, matrix display, icons, social media"
      />
      <meta name="description" content="Discover the ultimate Matrix-themed emoji database. NeoMoji has arrived." />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="NeoMoji 🌌" />
      <meta property="og:site_name" content="NeoMoji" />
      <meta property="og:url" content="https://NeoMoji.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Discover the ultimate Matrix-themed emoji database. NeoMoji has arrived." />
      <meta property="og:image" content="https://NeoMoji.vercel.app/assets/image.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="NeoMoji.vercel.app" />
      <meta property="twitter:url" content="https://NeoMoji.vercel.app/" />
      <meta name="twitter:title" content="NeoMoji 🌌" />
      <meta name="twitter:description" content="Discover the ultimate Matrix-themed emoji database. NeoMoji has arrived." />
      <meta name="twitter:image" content="https://NeoMoji.vercel.app/assets/image.png" />

      {/* Icons and PWA */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://NeoMoji.vercel.app/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://NeoMoji.vercel.app/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://NeoMoji.vercel.app/favicon-16x16.png"
      />
      <link rel="manifest" href="https://NeoMoji.vercel.app/site.webmanifest" />
      <link
        rel="mask-icon"
        href="https://NeoMoji.vercel.app/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
    </>
  );
}
