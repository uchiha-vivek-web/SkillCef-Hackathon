import StepperState from "../components/form-component";

function Form() {
    return (
        <>
            <div className="relative flex items-center justify-center h-screen text-white">
                <img 
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" 
                    alt="" 
                    className="absolute -z-10 inline-block h-screen w-full object-cover" 
                />
                <div className="p-6 border-2 border-white rounded-lg">
                    <StepperState />
                </div>
            </div>
        </>
    );
}

export default Form;
