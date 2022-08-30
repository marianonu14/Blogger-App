import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center md:text-6xl">Welcome to the Blogger App</h1>
            <Link to="allnotes"> <button className="bg-gray-900 rounded-md px-8 py-5 m-10 md:text-xl hover:text-gray-900 hover:bg-orange-500 duration-500 ease-in-out">Start Here</button> </Link>
        </div>
     );
}
 
export default Home;