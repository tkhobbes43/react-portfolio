import React from "react";

function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <p>You can always email me at <strong>t.k.hobbes43@gmail.com</strong> or fill out the below form and I will get back to you as soon as possible</p> 
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
