import {useNavigate} from 'react-router-dom'

function HeroPage() {
    const navigate = useNavigate()
    const handleClick=  () => {
        navigate('/know')
    }
    return (
        <>
            <header className="relative">

                <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" className="absolute -z-10 inline-block h-full w-full object-cover" />

                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">AI Soft Skills Coach</h1>
                        <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Your AI Job Coach: Empowering You to Ace Every Interview, Every Time!</p>
                        <button onClick={handleClick} href="#" className="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white">Get Started</button>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 mx-auto">
                        <h1 className="text-white text-center font-serif">
                            Get Placed at Your Dream Company!
                        </h1>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
                        <div className="mx-auto">
                            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg" alt="" className="inline-block" />
                        </div>
                        <div className="mx-auto">
                            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg" alt="" className="inline-block" />
                        </div>
                        <div className="mx-auto">
                            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg" alt="" className="inline-block" />
                        </div>
                        <div className="mx-auto">
                            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg" alt="" className="inline-block" />
                        </div>
                        <div className="mx-auto">
                            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg" alt="" className="inline-block" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default HeroPage