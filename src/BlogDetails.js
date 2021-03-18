import {useParams} from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    // this hook takes the parameters from the route (searchbar)
    const { id } = useParams() 

    const {data: blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id)
    
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && <div>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                            <div> {blog.body} </div>
                
                    </div>}
        </div>
    )
}

export default BlogDetails