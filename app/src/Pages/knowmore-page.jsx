import {useNavigate} from 'react-router-dom'


function KnowPage() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }
    return (
        <>
            <section>
                <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
                    alt=""
                    className="absolute -z-10 inline-block h-screen w-full object-cover"
                />
                <div className="relative  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                    <div className="flex w-full mx-auto text-left mt-44 ">
                        <div className="relative inline-flex items-center mx-auto align-middle">
                            <div className="text-center">
                                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                                    Help us to know <br className="hidden lg:block" />
                                    you Better !
                                </h1>
                                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500"> Enhance Your Profile ! </p>
                                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">

                                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                        <button onClick={handleClick} className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default KnowPage