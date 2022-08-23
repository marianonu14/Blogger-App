import { useParams } from "react-router-dom";

const Note = () => {
    const { noteid } = useParams()
    
    return ( 
        <div>
            <h1>
                The Note {noteid}
            </h1>
        </div>
     );
}
 
export default Note;