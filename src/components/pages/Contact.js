import React from "react";

function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <div>
                <form>
                    <label>Name</label><br />
                    <input placeholder="Your Name" /><br />
                    <label>Email</label><br />
                    <input placeholder="Your.email@here.com" /><br />
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
