import React, { useEffect, useState } from "react";

function Contact() {
    // Create form object with useState
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // To ensure email sent ribbon does not appear on load
    useEffect(() => {
        setSuccess(false);
    }, [])

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, name, and message

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <div>
                <form>
                    <label>Name</label><br />
                    <input placeholder="Name" /><br />
                    <label>Email</label><br />
                    <input placeholder="your.email@here.com" /><br />
                    <label>Message</label><br />
                    <textarea placeholder="Your message here" /><br />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
