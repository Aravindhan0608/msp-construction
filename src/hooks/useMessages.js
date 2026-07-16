import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getMessages, deleteMessage } from '../services/messageService';

export function useMessages() {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMessages(token);
      setMessages(data);
    } catch (err) {
      setError(err.message || 'Could not load messages. Make sure your server is running.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const removeMessage = async (id) => {
    try {
      await deleteMessage(id, token);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Failed to delete the message.' };
    }
  };

  return { messages, loading, error, removeMessage, refetch: fetchMessages };
}
