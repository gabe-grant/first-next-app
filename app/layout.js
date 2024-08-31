import './globals.css'

// the layout.js is a wrapper of one or more pages in NextJS
// It is required to have at least one root layout.js file in NextJS
// You can have nested ones in the folders that apply specifically to the route/page

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// the RootLayout uses the standard React children prop, which can be used by every component
// NextJS requires you to use the html and body tags to set up you overall skeleton of the project/website
// wheres the head tag? it can be populated in a different way, by exporting the metadata (reserved name) constant, should contain and object

// children will be the content of the current page that is active, being injected!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}