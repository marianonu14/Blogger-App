import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllNotes = () => {
    const [notes,setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/notes');
            const result = await response.json();
            setNotes(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNotes();
    },[notes])

    const deleteNote = async (e) => {
        try {       
            await fetch(`http://localhost:5000/api/notes/${e.target.value}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            })
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            {notes.length === 0 && <p className="text-center text-2xl">No Notes Added</p>}
            {notes && 
            notes.map(elem => 
            <div key={elem.id} className='flex flex-col md:flex-row justify-between items-center gap-5 w-3/4 md:w-4/5 m-auto my-10 p-5 rounded bg-gray-700'>
                <p className="text-xl"><span className="text-orange-500">Title:</span> {elem.title}</p>
                <p className="text-xl"><span className="text-orange-500">Author:</span> {elem.author}</p>
                <div className="flex gap-5">
                    <button 
                    className="bg-red-600 p-5 rounded-md text-white"
                    onClick={deleteNote}
                    value={elem.id}>
                        Delete Note
                    </button>
                    <Link to={`${elem.id}`}>
                        <button className="bg-gray-900 p-5 rounded-md">Read the Note</button>
                    </Link>
                </div>
            </div>) }
        </div>
     );
}
 
export default AllNotes;