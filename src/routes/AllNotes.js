import { Link } from "react-router-dom";


const AllNotes = () => {


    return ( 
        <div>
            <h1 className="text-center text-6xl mb-20">Nota</h1>
            <h2 className="text-center">
                <Link to='Note-1'><button className="bg-gray-900 p-5 rounded-md">Accede a la Nota</button></Link>
            </h2>
        </div>
     );
}
 
export default AllNotes;