import React from "react"

export default function App() {
    
const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordconf :"",
        joinNews:false
    }
    )

    function handleChange(event){
        const {name, value, type,checked} = event.target
        setFormData(prevFormData =>{
        return{
            ...prevFormData,
        [name]: type==="checkbox" ? checked : value
        }
    })

}
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if(formData.password === formData.passwordconf) {
        console.log("Successfully signed up")
        } else {
        console.log("Passwords do not match")
        return
        }
        
        if(formData.joinNews) {
        console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordconf"
                    value={formData.passwordconf}   
                    required                 
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.joinNews}
                        onChange={handleChange}
                        name="joinNews"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
