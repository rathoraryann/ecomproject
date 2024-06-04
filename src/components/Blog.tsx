import BlogCard from "./BlogCard";

const data = [
    {
        img: "/post__1.webp",
        title: "Healthy Food Healthy life",
        date: "Dec 19, 2023",
        comment: "9"
    },
    {
        img: "/post__2.webp",
        title: "Healthy Food Healthy life",
        date: "Dec 26, 2023",
        comment: "4"
    },
    {
        img: "/post__3.webp",
        title: "Healthy Food Healthy life",
        date: "Dec 31, 2023",
        comment: "5"
    }
];

const Blog=()=>{
    return (
        <div className="container pt-16">
            <h2 className="font-bond text-2xl">Latest News</h2>
            <p>Present posts in a best way to highlight intresting moments of your blog.</p>
            <div className="grid gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3">
            {data.map((el)=>(
                    <BlogCard key={el.date} img={el.img} title={el.title} date={el.date} comment={el.comment}/>
                ))}
            </div>
        </div>
    );
}

export default Blog;