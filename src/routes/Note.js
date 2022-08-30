import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Note = () => {
    const { noteid } = useParams()
    const [notes, setNotes] = useState([])

    const fetchNotes = async () => {
        try {
            const response = await fetch('https://blogger-backend-kappa.vercel.app/api/notes');
            const result = await response.json();
            
            const resultFilter = result.find(elem => elem.id === noteid);

            setNotes(resultFilter);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNotes();
    },[])
    
    const { title, author , note} = notes;
    return ( 
        <div className="w-3/4 mx-auto">
            <h1 className="text-2xl md:text-3xl py-10 text-orange-800"><span className="font-bold">Title :</span> {title} | <span className="font-bold">Author :</span> {author} </h1>
            <p className="md:text-xl text-orange-800 mt-1">{note}</p>
            <Link to="/allnotes">
                <button className="bg-orange-500 text-white p-3 my-10 rounded-md hover:bg-orange-900 duration-500 ease-in-out">Back to All Notes</button>
            </Link>
        </div>
     );
}
 
export default Note;