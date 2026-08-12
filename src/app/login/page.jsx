"use client"

import { useState } from "react"

export default function login() {
    const [log, setLog] = useState("")
    const [reg, setReg] = useState("")
    const [change, setChange] = useState(true)

    function valueSetter() {
            
    }


    return (
        <div>
            {change ? (
                <div>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <p className="cursor-pointer" onClick={() => setChange(!change)}>Register Here</p>
                    <button>Login</button>
                </div>
            ) : (
                <div>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <p className="cursor-pointer" onClick={() => setChange(!change)}>Login Here</p>
                    <button>Login</button>
                </div>
            )}
        </div>
    )
}