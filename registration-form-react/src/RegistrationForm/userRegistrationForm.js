import { useState } from "react"
import './style.css'

function UserRegistrationForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')
    const [marketingEmails, setMarketingEmails] = useState(false)
    const [profilePicture, setProfilePicture] = useState(null)
    const [error, setError] = useState('')


    function check() {
        if (firstName && lastName && country) {
            console.log({ firstName }, { lastName }, { country }, { marketingEmails }, { profilePicture })
        } else {
            setError("All fields are required.")
            console.log(error)
        }
    }


    return (

        <form className="Form" onSubmit={(e) =>
            e.preventDefault()}>
            <h1>USER REGISTRATION FORM</h1>
            <label>
                First Name :
                <input type="text" value={firstName} onChange={(e) =>
                    setFirstName(e.target.value)} />
            </label>
            <br />
            <label>
                Last Name :
                <input type="text" value={lastName} onChange={(e) =>
                    setLastName(e.target.value)} />
            </label>
            <br />
            <label>
                Gender :
                <select value={gender} onChange={(e) =>
                    setGender(e.target.value)}>
                    <option >select</option>
                    <option >male</option>
                    <option >female</option>
                    <option >other</option>
                </select>
            </label>
            <br />
            <label>
                Country :
                <input type="text" value={country} onChange={(e) =>
                    setCountry(e.target.value)} />
            </label>
            <br />
            <label >
                Receive Marketing Emails:
                <input type="checkbox" checked={marketingEmails} onChange={(e) =>
                    setMarketingEmails(e.target.checked)} />
            </label>
            <br />
            <label>
                Profile Picture :
                <input type="file" onChange={(e) =>
                    setProfilePicture(e.target.files[0])} />
            </label>
            <br />
            <label>
                <button type="submit" onClick={check}>Submit</button>
            </label>
        </form>

    )
}

export default UserRegistrationForm