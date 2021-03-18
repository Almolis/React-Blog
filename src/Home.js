import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {error && <div> Failed to fetch data. </div>}
            {isLoading && <div> Loading ... </div>}
                                {/* here we define the props (arguments) */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    
            {/* the bellow line creates a filtered blog list of just one author*/} 
            {/*  <BlogList blogs={blogs.filter((blog)=> blog.author === "Jane")} title="Jane's Blogs" handleDelete={handleDelete}/>  */}
       
        </div>

    )
  
}

export default Home


  /* const [name, setName] = useState("Sandra")
    const [gender, setGender]  = useState("f")
    const handleClick = () => {
        setName("Nikola"); 
        setGender("m")
    } */

   /*  const handleClickAgain = (name, e) => {
        console.log(name + " you clicked the button!", e.target)
    } */
   /*  return (
        <div className="home">
            <h2>Homepage</h2> */
          /*   {/* we write the useState values here:}*/
            /* {<p>{name} is {gender} </p> }*/

           /* { when we write the function here, we do not use brackets in order to not call it automatically. When we use it without brackets like this, we only reference it. It is only called when we click the button.*/
           /* { <button onClick={handleClick}>Click me</button>}*/
           /* { in order to call a function that contains arguments after an event activation, we need to put it inside an anonymous function*/
         /*  {  <button onClick={(e)=> handleClickAgain("Sandra", e)}> Click me again! </button> }*/

   /*    </div>
    )  */