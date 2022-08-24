import { useState } from "react"

const NewNote = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [note, setNote] = useState('');
    const [message, setMessage] = useState(false);

    const inputContainerClass = 'flex flex-col gap-2'
    const inputClass = 'bg-gray-200 rounded border border-black p-2 text-lg'

    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validationForm();
        
        if(validate){
            const newNote = { title, author, note }   
            sendData(newNote);
        } else {
            setMessage(true);
            setTimeout(() => {setMessage(false)}, 2500);
            return;
        }
    }

    const validationForm = () => {
        if(!title.trim()){
            return false;
        }
        if(!author.trim()){
            return false;
        } 
        if(!note.trim()){
            return false;
        } return true;  
    }

    const sendData = async (data) =>{
        try {       
            await fetch('http://localhost:5000/notes',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) 
            })
        } catch (error) {
            console.log(error)
        }
    } 


    return ( 
            <form onSubmit={handleSubmit} className="flex flex-col h-full w-1/2 m-auto justify-evenly text-2xl ">
                <div className={inputContainerClass}>
                    <label htmlFor="name">Title</label>
                    <input 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="name">Autor</label>
                    <input 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="name">Note</label> 
                    <textarea 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={note}
                        onChange={(e) => setNote(e.target.value)} 
                    />
                </div>
                <button className="bg-gray-900 rounded-md py-2" type="submit">Add New Note</button>
                {message && <p className="bg-red-500 text-center text-base text-white uppercase p-1 rounded">All fields are required</p>}
            </form>
     );
}
 
export default NewNote;