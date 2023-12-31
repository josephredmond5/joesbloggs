import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
                setIsPending(false);
            })
        }, 1000);
    }, []);


    return (
    <div className="home">
        { isPending && <div>loading...</div> }
        {blogs && <BlogList blogs={blogs} title="all blogs"  /> }
    </div>
    );
}
   
export default Home;

  