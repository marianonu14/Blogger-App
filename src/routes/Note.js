import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Note = () => {
    const { noteid } = useParams()
    const [notes, setNotes] = useState([])

    const fetchNotes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/notes');
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
        <div className="flex flex-col h-full w-3/4 m-auto items-center">
            <h1 className="text-2xl md:text-3xl py-10 text-orange-800"><span className="font-bold">Title :</span> {title} | <span className="font-bold">Author :</span> {author} </h1>
            <p className="md:text-xl text-orange-600 mt-10">{note}</p>
        </div>
     );
}
 
export default Note;