
export default function Home() {
  return (
    <main className="flex justify-center items-center h-[38rem]">
      <section className="flex h-[22rem] w-[65rem] justify-between items-center">
        <div className="w-[34.6rem]">
          <h1 className="text-[3.6rem] font-[Times_New_Roman]">SHUBHAM SHARMA</h1>
          <h2 className="mb-[2.2rem]">Full Stack Developer | Bug Bounty Hunter</h2>
          <p className="text-[1.5rem] lh-[2.6rem]">Full stack developer and bug bounty hunter focused on understanding how systems work — and where they fail.</p>
        </div>
        <img src="/photo.png" alt="shubham sharma smiling at the face of camera" className="w-[268px] h-[286px]"/>
      </section>
    </main>
  );
}
