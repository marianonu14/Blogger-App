import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllNotes = () => {
    const [notes,setNotes] = useState(null)

    const fetchNotes = async () => {
        try {
            const response = await fetch('http://localhost:5000/notes');
            const result = await response.json();
            setNotes(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNotes();
    },[])

    return ( 
        <div>
            {notes && 
            notes.map(elem => 
            <div key={elem.id} className='flex flex-col md:flex-row justify-between items-center gap-5 w-1/2 md:w-4/5 m-auto my-10 p-5 rounded bg-gray-700'>
                <p className="text-xl"><span className="text-orange-500">Title:</span> {elem.title}</p>
                <p className="text-xl"><span className="text-orange-500">Author:</span> {elem.author}</p>
                <Link to={`${elem.id}`}>
                    <button className="bg-gray-900 p-5 rounded-md">Read the Note</button>
                </Link>
            </div>) }
        </div>
     );
}
 
export default AllNotes;