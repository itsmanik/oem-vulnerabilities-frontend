import React, { useState } from 'react';

const discussionThreads = [
  {
    id: 1,
    title: 'Mitigation strategies for CVE-2023-5678',
    comments: [
      { user: 'Alice', text: 'Updating to version 1.2.4 solved the issue for me!' },
      { user: 'Bob', text: 'What about users on older hardware? Any alternatives?' }
    ]
  },
  {
    id: 2,
    title: 'Critical vulnerability in Firewall X module Y',
    comments: [
      { user: 'Charlie', text: 'Has anyone tried patching this on Linux systems?' },
      { user: 'Dave', text: 'The official OEM patch worked fine for me.' }
    ]
  }
];

const DiscussionForumPage = () => {
  const [threads, setThreads] = useState(discussionThreads);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [selectedThread, setSelectedThread] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleAddThread = () => {
    if (newThreadTitle.trim()) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        comments: []
      };
      setThreads([...threads, newThread]);
      setNewThreadTitle('');
    }
  };

  const handleAddComment = (threadId) => {
    if (newComment.trim()) {
      const updatedThreads = threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              comments: [...thread.comments, { user: 'You', text: newComment }]
            }
          : thread
      );
      setThreads(updatedThreads);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Discussion Forums</h1>
      {selectedThread ? (
        <div>
          <button
            className="text-blue-500 underline mb-4"
            onClick={() => setSelectedThread(null)}
          >
            Back to Threads
          </button>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {selectedThread.title}
          </h2>
          <div className="space-y-4">
            {selectedThread.comments.map((comment, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <p>
                  <span className="font-semibold">{comment.user}: </span>
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
          <textarea
            className="w-full p-3 border rounded mt-4"
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
            onClick={() => handleAddComment(selectedThread.id)}
          >
            Add Comment
          </button>
        </div>
      ) : (
        <div>
          <div className="space-y-4 mb-6">
            {threads.map((thread) => (
              <div
                key={thread.id}
                className="bg-white shadow p-6 rounded cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedThread(thread)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{thread.title}</h2>
                <p className="text-gray-600">{thread.comments.length} comments</p>
              </div>
            ))}
          </div>
          <textarea
            className="w-full p-3 border rounded"
            placeholder="Start a new thread..."
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
          />
          <button
            className="bg-green-600 text-white py-2 px-4 rounded mt-2"
            onClick={handleAddThread}
          >
            Add Thread
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscussionForumPage;
