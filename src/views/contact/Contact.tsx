import contactImage from '../../resources/images/undraw-contact.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import emailjs from '@emailjs/browser';

type ContactDetails = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactPage() {
    const DEFAULT_CONTACT_DETAILS = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    const [contactDetails, setContactDetails] = React.useState(DEFAULT_CONTACT_DETAILS);

    // @ts-ignore
    function handleSubmit(e) {
        if (Object.keys(contactDetails).length === 0) {
            return;
        }

        console.log(contactDetails, process.env.REACT_APP_USER_ID);

        e.preventDefault(); // Prevents default refresh by the browser
        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_ID as string,
                contactDetails,
                process.env.REACT_APP_USER_ID
            )
            .then(
                result => {
                    alert('Message Sent, I will get back to you shortly! :)');
                },
                error => {
                    alert('An error occurred, Please try again.');
                }
            )
        setContactDetails(DEFAULT_CONTACT_DETAILS);
    }

    return (
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h3 className="heading mb-4">Let's talk about your project!</h3>
                                <div style={{color: 'gray'}}>
                                    Hello! Write a one- or two-paragraph explanation of what the project aims to accomplish.
                                </div>
                                <img src={contactImage} alt="img" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <form className="mb-5" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Your name"
                                                value={contactDetails.name}
                                                onChange={e =>
                                                    setContactDetails({
                                                        ...contactDetails,
                                                        name: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                value={contactDetails.email}
                                                onChange={e =>
                                                    setContactDetails({
                                                        ...contactDetails,
                                                        email: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                                value={contactDetails.subject}
                                                onChange={e =>
                                                    setContactDetails({
                                                        ...contactDetails,
                                                        subject: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={7}
                                                placeholder="Write your message"
                                                value={contactDetails.message}
                                                onChange={e =>
                                                    setContactDetails({
                                                        ...contactDetails,
                                                        message: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Send Message"
                                                className="btn btn-primary rounded-0 py-2 px-4"
                                                onClick={handleSubmit}
                                            />
                                            <span className="submitting" />
                                        </div>
                                    </div>
                                </form>

                                <div id="form-message-warning mt-4" />
                                <div id="form-message-success">
                                    Your message was sent, thank you!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
