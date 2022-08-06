export default {
  github: 'https://github.com/Outerbridgeio/Outerbridge',
  docsRepositoryBase: 'https://github.com/Outerbridgeio/outerbridge-docs/blob/master',
  titleSuffix: ' – Outerbridge',
  logo: (
    <>
      <img src="/outerbridge_favicon_transparent.png" alt="Outerbridge Logo" height="auto" width={40}></img>
      <span className="ml-2 mr-2 font-extrabold hidden md:inline">Outerbridge</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        - Automate Web3 and Web2 applications
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Outerbridge - Automate Web3 and Web2 applications" />
      <meta name="og:description" content="Outerbridge - Automate Web3 and Web2 applications" />
      <meta name="og:title" content="Outerbridge - Automate Web3 and Web2 applications" />
      <meta name="og:image" content="https://www.outerbridge.io/outerbridge_brand.svg" />
      <meta name="apple-mobile-web-app-title" content="Outerbridge" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <></>,
}
