import React from "react";

function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <div>
                <form>
                    <label>Name</label><br />
                    <input placeholder="Your Name" size="50" /><br />
                    <label>Email</label><br />
                    <input placeholder="Your.email@here.com" size="50" /><br />
                    <label>Message</label><br />
                    <textarea placeholder="Your message here" rows="10" cols="100"/><br />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
