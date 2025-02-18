import React, { useState } from 'react';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'bot' }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage: { text: string, sender: 'user' | 'bot' } = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');
        setLoading(true);

        // Simulate bot response
        setTimeout(() => {
            const botMessage: { text: string, sender: 'user' | 'bot' } = { text: 'This is a bot response.', sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setLoading(false);
        }, 1000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxSizing: 'border-box' }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ padding: '8px', borderRadius: '4px', marginBottom: '8px', backgroundColor: message.sender === 'user' ? '#e1ffc7' : '#f1f1f1', alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start', color: 'black' }}>
                        {message.text}
                    </div>
                ))}
                {loading && <div style={{ padding: '8px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#f1f1f1', alignSelf: 'flex-start', color: 'black' }}>...</div>}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '8px' }}
                />
                <button onClick={sendMessage} style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff' }}>Send</button>
            </div>
        </div>
    );
};

export default Chat;