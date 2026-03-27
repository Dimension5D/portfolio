import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Work Portfolio",
  description: "This is the portfolio of shubham sharma, a full stack developer and bug bounty hunter. Here you can find his projects, blogs and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="box-border bg-gradient-to-bl from-[#FFECEC] to-[#FFFFFF] min-h-screen pt-[3rem] md:pt-[4rem] ">
        <nav className="flex items-center justify-center text-[1rem] h-[3.75rem] px-[2rem] md:px-[4rem] border-1 md:text-[1.25rem] md:justify-between">
          <div className="w-full md:w-[22.5rem]">
            <ul className="flex justify-between">
              <li><a href="/">Home</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/resume.pdf" download>Resume</a></li>
            </ul>
          </div>
          <div className="w-[14.37rem] hidden md:block">
            <ul className="flex justify-between">
              <li><a href="https://github.com/Dimension5D" target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/shubham-sharma3099/" target="_blank">LinkedIn</a></li>
              <li><a href="https://x.com/Dimension5D" target="_blank">X</a></li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
