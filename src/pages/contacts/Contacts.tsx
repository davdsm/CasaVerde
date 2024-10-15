import React, { useReducer, useState } from "react";
import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import ContactsFormReducer, { ContactsFormUpdateType } from "./ContactsFormReducer";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { submitContactForm } from "../../services/services";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import Name from "../../assets/contacts/name.svg?react";
import Email from "../../assets/contacts/email-field.svg?react";
import Subject from "../../assets/contacts/subject.svg?react";
import Message from "../../assets/contacts/message.svg?react";
import ContactIcon from "../../assets/contacts/telefone.svg?react";
import Location from "../../assets/contacts/location.svg?react";

import contactsInfo from "./contactsInfo";

const ADDRESS: string = import.meta.env.VITE_ADDRESS;

import "../../styles/pages/Contacts.scss";

const Contacts: React.FunctionComponent = () => {

  const [ContactsFormState, dispatchContactsFormUpdate] = useReducer(ContactsFormReducer, {
    name: "",
    invalidName: false,
    email: "",
    invalidEmail: false,
    contact: "",
    invalidContact: false,
    subject: "",
    invalidSubject: false,
    message: "",
    invalidMessage: false,
    enableSumbit: false,
  });

  const [submitButtonText, setSubmitButtonText] = useState<string>("contacts.form.send");

  const intl = useIntl();

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | {intl.formatMessage({ id: "header.contacts" })}</title>
      </Helmet>
      <div className="contacts-page container">
        <div className="contact-form">
          <div className="image">
            <div className="adress" >
              <div className="icon" ><Location /></div>
              <span className="name">
                {intl.formatMessage({ id: "homepage.intro.label" })}
              </span>
              <span>
                {ADDRESS}
              </span>
              <a className="google-maps" href="https://maps.app.goo.gl/WMVK4Dek57yxhW6X8" target="_blank">
                <div className="link-arrow">
                  <FontAwesomeIcon icon={faChevronRight} fontSize={"13px"} />
                  <FontAwesomeIcon icon={faChevronRight} fontSize={"13px"} />
                </div>
                <span>{intl.formatMessage({ id: "contacts.maps" })}</span>
              </a>
            </div>
          </div>
          <div className="form" data-aos="fade-up" data-aos-duration="1500" >
            <Label text={intl.formatMessage({ id: "contacts.form.label" })} />
            <Title text={intl.formatMessage({ id: "contacts.form.title" })} />
            <div className="form-field" >
              <input
                className={`form-field-input ${ContactsFormState.invalidName ? "invalid" : ""}`}
                type="text"
                placeholder={intl.formatMessage({ id: "contacts.form.fields.name" })}
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
                placeholder={intl.formatMessage({ id: "contacts.form.fields.email" })}
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
                className={`form-field-input ${ContactsFormState.invalidContact ? "invalid" : ""}`}
                type="text"
                placeholder={intl.formatMessage({ id: "contacts.form.fields.contact" })}
                value={ContactsFormState.contact}
                onChange={(event) => dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.UPDATE_CONTACT,
                  payload: {
                    contact: event.target.value
                  }
                })}
              />
              <ContactIcon className="subject" style={{width: "17px"}} />
            </div>
            <div className="form-field" >
              <input
                className={`form-field-input ${ContactsFormState.invalidSubject ? "invalid" : ""}`}
                type="text"
                placeholder={intl.formatMessage({ id: "contacts.form.fields.subject" })}
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
              className={`send-form ${submitButtonText.includes("Enviado") ? "sent" : ""}`}
              disabled={!ContactsFormState.enableSumbit}
              onClick={() => {
                submitContactForm({
                  name: ContactsFormState.name,
                  email: ContactsFormState.email,
                  contact: ContactsFormState.contact,
                  subject: ContactsFormState.subject,
                  message: ContactsFormState.message
                });

                setSubmitButtonText(() => intl.formatMessage({ id: "contacts.form.sent" }));

                setTimeout(() => {
                  setSubmitButtonText(() => intl.formatMessage({ id: "contacts.form.send" }))
                }, 5000);

                dispatchContactsFormUpdate({
                  type: ContactsFormUpdateType.RESET,
                  payload: {}
                })
              }}
            >
              {intl.formatMessage({ id: submitButtonText })}
            </button>
          </div>
        </div>
        <div className="contacts-row">
          {contactsInfo.map((contactInfo, index) =>
            <React.Fragment key={contactInfo.name} >
              <Contact {...contactInfo} />
              {index !== contactsInfo.length - 1 && <hr />}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contacts;
