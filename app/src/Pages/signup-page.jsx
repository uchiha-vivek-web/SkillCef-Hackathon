import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../config/firebase"
function SignUpPage() {
    const[email,setEmail] = useState('')
    const[password,setPassword]= useState('')
    const navigate = useNavigate()
    const handleClick = async() => {
        try {
          await createUserWithEmailAndPassword(auth,email,password)
          console.log('signup done')
          navigate('/login')
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" className="absolute -z-10 inline-block h-screen w-full object-cover" />
            <div className="py-16">
                <div class="flex bg-transparent border-white text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                        }}
                    ></div>

                    <div class="w-full p-8 lg:w-1/2">
                        <h2 class="text-2xl font-semibold text-white text-center">Brand</h2>
                        <p class="text-xl  text-center text-white">Welcome back!</p>
                     
                        <div class="mt-4 flex items-center justify-between">
                          
                         
                             
                        </div>
                        <div class="mt-4">
                            <label class="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
                            <input class="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email}  onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block text-gray-400 text-sm font-bold mb-2">Password</label>
                                <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input class="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"  value={password}   onChange={(e) => setPassword(e.target.value) }       />
                        </div>
                        <div class="mt-8">
                            <button onClick={handleClick} class="bg-gray-700  text-white font-mono py-2 px-4 w-full rounded hover:bg-gray-600">SignUp</button>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 md:w-1/4"></span>
                            <Link to='/login' class="text-xs text-gray-400 uppercase">or login </Link>
                            <span class="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUpPage