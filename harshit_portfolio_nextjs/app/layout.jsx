import "../styles/globals.css";

export const metadata = {
  title: "Harshit Senani Portfolio",
  description:
    "Portfolio website of Harshit Senani – Web Developer, SEO Specialist & Performance Marketer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
