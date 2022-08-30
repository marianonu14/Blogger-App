import { useState } from "react"

const NewNote = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [note, setNote] = useState('');
    const [messageError, setMessageError] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);

    const inputContainerClass = 'flex flex-col gap-2'
    const inputClass = 'bg-gray-200 rounded border border-black p-2 text-base md:text-lg'

    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validationForm();
        
        if(validate){
            const newNote = { title, author, note }   
            sendData(newNote);
            setMessageSuccess(true);
            setTimeout(() => {setMessageSuccess(false)}, 2500);
            resetForm();
        } else {
            setMessageError(true);
            setTimeout(() => {setMessageError(false)}, 2500);
            return;
        }
    }

    const validationForm = () => {
        if(!title.trim()) return false;
        
        if(!author.trim()) return false;
         
        if(!note.trim()) return false;
         
        return true;  
    }

    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setNote('');
    }

    const sendData = async (data) =>{
        try {       
            await fetch('https://blogger-backend-kappa.vercel.app/api/notes',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) 
            })
        } catch (error) {
            console.log(error)
        }
    } 

    const messageClass = "text-center text-base text-white uppercase p-2 rounded"

    return ( 
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-3/4 md:w-1/2 m-auto text-2xl ">
                <div className={inputContainerClass}>
                    <label htmlFor="name" className="text-lg md:text-2xl">Title</label>
                    <input 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="name" className="text-lg md:text-2xl">Autor</label>
                    <input 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="name" className="text-lg md:text-2xl">Note</label> 
                    <textarea 
                        type="text" 
                        id="name" 
                        className={inputClass} 
                        value={note}
                        onChange={(e) => setNote(e.target.value)} 
                    />
                </div>
                <button 
                className="bg-gray-900 rounded-md py-2 text-lg md:text-xl hover:text-gray-900 hover:bg-orange-600 duration-500 " 
                type="submit">
                    Add New Note
                </button>
                {messageError && <p className={`bg-red-500 ${messageClass}`}>All fields are required</p>}
                {messageSuccess && <p className={`bg-green-500 ${messageClass}`}>Thanks you for sharing a note with us</p>}
            </form>
     );
}
 
export default NewNote;