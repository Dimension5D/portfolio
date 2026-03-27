export default function Blogs() {
    const blogs = [
        {
            title: "Learn HTML the Smart Way: Only What You Actually Need (90% Use Cases)",
            description: "If you’re starting with web development, you don’t need to memorize 100+ HTML tags. In reality, most websites rely on a small set of core elements. Master these, and you can build almost anything.",
            image: "/html.png",
            link: "#"
        },
        {
            title: "Tailwind CSS Made Simple: The Only Classes You Actually Need (Beginner Guide)",
            description: "Most real-world projects use a small, repeatable set of Tailwind utilities. Master these, and you can design almost any UI. This guide focuses on the most useful Tailwind classes mapped directly to CSS properties—so you always know what to use.",
            image: "/tailwind.png",
            link: "#"
        },
    ]
    return (
        <main className="flex flex-col items-center mt-[4rem]">
            {blogs.map((blog, index) => (
                <a href={blog.link} key={index}>
                    <section className="flex flex-col mt-[2rem] w-[22rem] md:flex-row md:w-[80vw] md: justify-between md:max-w-[55rem]">
                        <img src={blog.image} alt="" className="h-[15rem] object-cover border-2 w-full mb-[0.8rem] md:w-[35vw] md:w-[350px] md:mr-[2rem] object-cover"/>
                        <div className="w-full md:max-w-[30rem]">
                            <h2 className=" text-[1.4rem] mb-[0.4rem] md:text-[1.6rem]">{blog.title}</h2>
                            <p>{blog.description}</p>
                        </div>
                    </section>
                </a>
            ))}
        </main>
    );
}