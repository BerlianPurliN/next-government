import Card from "../components/ui/card";



const base_url = "http://jsonplaceholder.typicode.com/posts"

const Posts = async () => {
    const response = await fetch(base_url)  
    const post = await response.json()
return(
    <>
    <p>{base_url}</p><br />
    <h1>{post[5].id}</h1>
    <Card>
    <li>
        <p>Name</p>
    </li>
    <li>
        <p>Code</p>
    </li>
    <li>
        <p>PhoneCode</p>
    </li>
    <li>
        <p>Code</p>
    </li>
    </Card>
    </>
)
}

export default Posts;