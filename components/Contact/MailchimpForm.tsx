"use client"

import { useState } from 'react';
import { decode } from 'html-entities';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpForm = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    setError(null);

    if (!name || !email) {
      setError('Please enter both your name and a valid email address');
      return null;
    }

    subscribe({ NAME: name, EMAIL: email });
  };

  const handleInputKeyEvent = (event) => {
    setError(null);
    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message.split('-') ?? null;
    if (result?.[0]?.trim() !== '0') {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  const subscribe = async (formData) => {
    try {
      const response = await fetch(MAILCHIMP_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.result === 'success') {
        setStatus('success');
        setMessage(data.msg);
      } else {
        setStatus('error');
        setMessage(data.msg);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            onChange={(event) => setName(event?.target?.value ?? '')}
            type="text"
            placeholder="Your name"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
            onKeyUp={handleInputKeyEvent}
          />
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
            onKeyUp={handleInputKeyEvent}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="wp-block-button__link duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none" onClick={handleFormSubmit}>
            Subscribe
          </button>
        </div>
        <p className="text-center text-base font-medium leading-relaxed text-body-color">
          We dont spam, So you dont have to worry.
        </p>
      </div>
      <div className="newsletter-form-info">
        {status === 'sending' && <div>Sending...</div>}
        {status === 'error' || error ? (
          <div className="newsletter-form-error" dangerouslySetInnerHTML={{ __html: error || getMessage(message) }} />
        ) : null}
        {status === 'success' && status !== 'error' && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};

export default MailchimpForm;
