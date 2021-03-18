import { Link } from "react-router-dom"

                //instead of writing "props" in the argument section, and then defining the props in constants, I can destructure the props object here directly: 
const BlogList = ({blogs, title}) => {
  /*   const blogs = props.blogs;
    const title = props.title;  */
    return (
        <div className="blog-list"> 
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList