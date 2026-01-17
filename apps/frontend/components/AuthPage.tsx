"use client";
export function AuthPage({isSignin}:{
    isSignin: boolean
}){
    return <div className="w-screen h-screen flex justify-center bg-black items-center">
        <div className="p-2 m-2 bg-white roundec">
            <div className="pt-2">
            <input type="text" placeholder="email"></input>

            </div>

            <div className="pt-2">
                <input type="password" placeholder="password"></input>
            </div>

            <div className="pt-2 bg-red-500 rounded p-2">
                <button onClick={()=>{

                }}>{isSignin? "Sign in": "Sign up"}</button>
            </div>

            

        </div>
    </div>
}