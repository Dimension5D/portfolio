
export default function Home() {
  return (
    <main className="flex justify-center items-center h-[28rem] md:h-[38rem]">
      <section className="flex flex-wrap md:flex-nowrap h-[22rem] w-[65rem] justify-between items-center md:flex-row">
        <div className="w-full text-center md:w-[34.6rem] md:text-left">
          <h1 className="p-[1.8] text-[9vw] font-[Times_New_Roman] md:text-left md:text-[3.6rem]">SHUBHAM SHARMA</h1>
          <h2 className="md:mb-[2.2rem] md:text-left">Full Stack Developer | Bug Bounty Hunter</h2>
          <p className="text-[1.2rem] p-[2rem] text-left lh-[2.6rem] md:text-[1.5rem] md:p-0">Full stack developer and bug bounty hunter focused on understanding how systems work — and where they fail.</p>
        </div>
        <div className="w-full px-[2rem] block md:hidden">
          <ul className="flex w-[9rem] justify-between">
            <li><a href="https://github.com/Dimension5D" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/shubham-sharma3099/" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/Dimension5D" target="_blank">X</a></li>
          </ul>
        </div>
        <img src="/photo.png" alt="shubham sharma smiling at the face of camera" className="w-[265px] h-[285px] md:w-[268px] md:h-[286px] m-auto mt-[2rem]"/>
      </section>
    </main>
  );
}
