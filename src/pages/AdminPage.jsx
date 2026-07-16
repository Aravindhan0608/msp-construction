import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, LogOut } from 'lucide-react';
import { useMessages } from '../hooks/useMessages';
import { useAuth } from '../context/AuthContext';
import { formatDate } from '../utils/formatDate';

const AdminPage = () => {
  const { messages, loading, error, removeMessage } = useMessages();
  const { clearSession } = useAuth();

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this message?');
    if (!isConfirmed) return;

    const result = await removeMessage(id);
    if (!result.success) {
      alert(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-4xl relative z-10">

        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
          <h1 className="text-4xl font-bold text-white">
            Admin <span className="text-amber-500">Dashboard</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm font-medium border border-amber-500/20">
              {messages.length} Messages
            </span>
            <button
              onClick={clearSession}
              className="flex items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors text-sm"
              title="Log out"
            >
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>

        {loading && <p className="text-zinc-400 animate-pulse">Loading messages...</p>}
        {error && <p className="text-red-400 bg-red-500/10 p-4 rounded-xl">{error}</p>}
        {!loading && !error && messages.length === 0 && (
          <p className="text-zinc-400 bg-zinc-900/50 p-6 rounded-xl text-center border border-white/5">
            No messages yet.
          </p>
        )}

        <div className="grid gap-6">
          {messages.map((msg, index) => (
            <motion.div
              key={msg._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />

              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4 pl-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{msg.firstName} {msg.lastName}</h3>
                  <a href={`mailto:${msg.email}`} className="text-amber-500 hover:text-amber-400 text-sm transition-colors">
                    {msg.email}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 text-sm whitespace-nowrap">
                    {formatDate(msg.createdAt)}
                  </span>

                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                    title="Delete Message"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-4 p-4 bg-zinc-950/50 rounded-xl border border-white/5 ml-4">
                <p className="text-zinc-300 whitespace-pre-wrap">{msg.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminPage;
