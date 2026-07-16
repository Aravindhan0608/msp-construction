import { useState } from 'react';
import { sendMessage } from '../services/messageService';

const EMPTY_FORM = { firstName: '', lastName: '', email: '', details: '' };

export function useContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await sendMessage(formData);
      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong connecting to the server. Please try again.');
    }
  };

  return { formData, status, errorMessage, handleChange, handleSubmit };
}
