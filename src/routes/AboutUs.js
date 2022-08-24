import imgSection from '../assets/aboutsection.png'

const AboutUs = () => {
    return ( 
        <div className="w-4/5 h-full m-auto">
            <h1 className="text-center p-10 text-3xl font-bold">About Us</h1>
            <div className="flex flex-col md:flex-row m-10 gap-5">
                <img src={imgSection} alt="About Section" className='w-2/3 md:w-1/2 m-auto md:m-0' />
                <p className='md:text-lg p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium sunt veritatis quod cupiditate accusamus rem ex, quasi maiores deserunt temporibus enim doloremque omnis. Iste veritatis quas asperiores repellat provident quasi maiores deserunt temporibus enim doloremque omnis. Iste veritatis quas asperiores repellat provident. enim doloremque omnis. Iste veritatis quas asperiores repellat provident quasi maiores deserunt temporibus enim doloremque omnis. Iste veritatis quas asperiores repellat provident.</p>
            </div>
        </div>
     );
}
 
export default AboutUs;