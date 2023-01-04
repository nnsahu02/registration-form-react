import { useState } from "react"

function UserRegistrationForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')
    const [marketingEmails, setMarketingEmails] = useState(false)
    const [profilePicture, setProfilePicture] = useState(null)
    const [error, setError] = useState('')


    function handlesubmit() {
        if (!firstName || !lastName || !gender || !country || !profilePicture) {
            setError('All Fields are required.')
            console.log(error)
        } else {
            console.log({
                firstName,
                lastName,
                gender,
                country,
                marketingEmails,
                profilePicture
            })
        }
    }


    return (

        <form >
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
                    <option value="">select</option>
                    <option value="">male</option>
                    <option value="">female</option>
                    <option value="">other</option>
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
                <button onSubmit={handlesubmit}>Submit</button>
            </label>
        </form>

    )
}

export default UserRegistrationForm