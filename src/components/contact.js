import React from 'react'
import {asSection} from './section';
import {css} from 'emotion';

const style = css`
  background-color: #FF4D4D;
  color: white;
`
const Contact = () => (
    <div id="Contact">
        <div className="row">
            <div className="s12">
                <h2 className="header">Contact</h2>
            </div>
        </div>
        <div className="row"><span><i className="fa fa-phone" aria-hidden="true"> </i></span>
        <p>&nbsp; Darrel Crawford: (404) 797-2111</p>
        </div>
        <div className="row">
        <p>Thank you for your interest in JSM Construction. Please fill out the form below to get more information about our services.</p>
        </div>
        <form id="contactForm" netlify="true">
            <div className="form-group row">
                <div className="col-10">
                    <label htmlFor="formName">Name</label>
                    <input className="form-control" type="text" id="formName" placeholder="Name" name="name" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-10">
                    <label htmlFor="formEmailAddress">Email Address</label>
                    <input className="form-control" type="email" id="formEmailAddress" placeholder="Email Address" name="emailAddress" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-10">
                    <label htmlFor="formMessage">Message</label>
                    <textarea className="form-control" id="formMessage" placeholder="Message" rows="3" name="message"></textarea>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>         
  </div>
)


export const ContactSection = asSection(Contact, style);