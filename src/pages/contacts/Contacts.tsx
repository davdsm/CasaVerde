import React, { useReducer } from "react";
import Label from "../../components/label/Label";
import TranslationsHelper from "../../utils/TranslationsHelper";
import Title from "../../components/title/Title";
import ContactsFormReducer, { ContactsFormUpdateType } from "./ContactsFormReducer";
import Contact, { ContactType } from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { submitContactForm } from "../../services/services";

import Name from "../../assets/contacts/name.svg?react";
import Email from "../../assets/contacts/email-field.svg?react";
import Subject from "../../assets/contacts/subject.svg?react";
import Message from "../../assets/contacts/message.svg?react";
import Location from "../../assets/contacts/location.svg?react";

import contactsInfo from "./contactsInfo";

import "../../styles/pages/Contacts.scss";

const Contacts: React.FunctionComponent = () => {

  const [ContactsFormState, dispatchContactsFormUpdate] = useReducer(ContactsFormReducer, {
    name: "",
    invalidName: false,
    email: "",
    invalidEmail: false,
    subject: "",
    invalidSubject: false,
    message: "",
    invalidMessage: false,
    enableSumbit: false,
  });

  return (
    <div className="contacts-page container">
      <div className="contact-form">
        <div className="image">
          <div className="adress" >
            <div className="icon" ><Location /></div>
            <span className="name">
              { TranslationsHelper.all.homepage.intro.label }
            </span>
            <span>
              { contactsInfo.find(({ type }) => ContactType.MORADA === type )?.value }
            </span>
            <a className="google-maps" href="https://maps.app.goo.gl/WMVK4Dek57yxhW6X8" target="_blank">
              <div className="link-arrow">
                <FontAwesomeIcon icon={faChevronRight} fontSize={"13px"} />
                <FontAwesomeIcon icon={faChevronRight} fontSize={"13px"} />
              </div>
              <span>{ TranslationsHelper.all.contacts.maps }</span>
            </a>
          </div>
        </div>
        <div className="form" data-aos="fade-up" data-aos-duration="1500" >
          <Label text={TranslationsHelper.all.contacts.form.label} />
          <Title text={TranslationsHelper.all.contacts.form.title} />
          <div className="form-field" >
            <input 
              className={`form-field-input ${ContactsFormState.invalidName ? "invalid" : ""}`} 
              type="text" 
              placeholder={TranslationsHelper.all.contacts.form.fields.name}
              value={ContactsFormState.name}
              onChange={(event) => dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.UPDATE_NAME,
                  payload: {
                    name: event.target.value
                  }
              })}
            />
            <Name className="name" />
          </div>
          <div className="form-field" >
            <input 
              className={`form-field-input ${ContactsFormState.invalidEmail ? "invalid" : ""}`} 
              type="email" 
              placeholder={TranslationsHelper.all.contacts.form.fields.email}
              value={ContactsFormState.email}
              onChange={(event) => dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.UPDATE_EMAIL,
                  payload: {
                  email: event.target.value
                  }
              })}
            />
            <Email className="email" />
          </div>
          <div className="form-field" >
            <input 
              className={`form-field-input ${ContactsFormState.invalidSubject ? "invalid" : ""}`} 
              type="text" 
              placeholder={TranslationsHelper.all.contacts.form.fields.subject}
              value={ContactsFormState.subject}
              onChange={(event) => dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.UPDATE_SUBJECT,
                  payload: {
                    subject: event.target.value
                  }
              })}
            />
            <Subject className="subject" />
          </div>
          <div className="form-field" >
            <textarea 
              className={`form-field-input ${ContactsFormState.invalidMessage ? "invalid" : ""}`} 
              placeholder={""}
              rows={3}
              value={ContactsFormState.message}
              onChange={(event) => dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.UPDATE_MESSAGE,
                  payload: {
                  message: event.target.value
                  }
              })}
            />
            <Message className="message" />
          </div>
          <button 
            className="send-form"
            disabled={!ContactsFormState.enableSumbit} 
            onClick={() => submitContactForm({
              name: ContactsFormState.name,
              email: ContactsFormState.email,
              subject: ContactsFormState.subject,
              message: ContactsFormState.message
            })}
          >
            { TranslationsHelper.all.contacts.form.send }
          </button>
        </div>
      </div>
      <div className="contacts-row">
        {contactsInfo.map((contactInfo, index) => 
          <React.Fragment>
            <Contact key={contactInfo.name} {...contactInfo} />
            { index !== contactsInfo.length - 1 && <hr />}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Contacts;
