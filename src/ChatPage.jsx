import React, { useState, useRef, useEffect } from 'react';
import { initialChatHistory, mockSmartAnswer } from './sampleData';
import SmartStudyResponse from './SmartStudyResponse';
import SubscriptionBanner from './SubscriptionBanner';
import { LuSend } from 'react-icons/lu';

// Chat Message Component
function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  const isSmart = message.mode === 'smart';

  if (isSmart) {
    return (
      <div className="w-full max-w-2xl">
        <SmartStudyResponse response={message.text} />
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
          max-w-md rounded-lg px-4 py-3 shadow-sm
          ${isUser ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}
        `}
      >
        <p className="text-sm">{typeof message.text === 'string' ? message.text : JSON.stringify(message.text)}</p>
      </div>
    </div>
  );
}

// Main Chat Page
export default function ChatPage({ mode }) { // <-- Receives mode as prop
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [text, setText] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const send = () => {
    if (!text.trim()) return;
    const user = { id: `u-${Date.now()}`, role: 'user', text, mode };
    setChatHistory(h => [...h, user]);
    setText('');

    setTimeout(() => {
      if (mode === 'smart' && subscribed) {
        setChatHistory(h => [...h, { id: `ai-${Date.now()}`, role: 'ai', mode: 'smart', text: mockSmartAnswer }]);
      } else if (mode === 'smart' && !subscribed) {
        setChatHistory(h => [...h, { id: `ai-${Date.now()}`, role: 'ai', mode: 'promo', text: 'Smart Study Mode is a subscription feature. Unlock to get structured visual answers.' }]);
      } else {
        setChatHistory(h => [...h, { id: `ai-${Date.now()}`, role: 'ai', mode: 'normal', text: `Understood: "${user.text}". Would you like a quick summary or an example?` }]);
      }
    }, 700);
  };

  return (
    // Main container for chat + viz panel
    <div className="flex h-full gap-6">
      
      {/* Main Chat Column */}
      <div className="flex h-full flex-1 flex-col">
        {/* Welcome Message (Simplified) */}
        {chatHistory.length <= 1 && (
           <div className="text-center p-8">
             <h2 className="text-2xl font-semibold mb-2">Welcome to Bridge AI</h2>
             <p className="text-muted-foreground">Select a mode above or ask a question to begin.</p>
           </div>
        )}

        {/* Chat History */}
        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          {chatHistory.map(m => <ChatMessage key={m.id} message={m} />)}
          <div ref={endRef} />
        </div>

        {/* Subscription Banner (if needed) */}
        {!subscribed && mode === 'smart' && <SubscriptionBanner onSubscribe={() => setSubscribed(true)} />}

        {/* Input Bar */}
        <div className="mt-4 flex-shrink-0">
          <div className="flex items-center gap-2 rounded-lg border bg-background p-2">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask your AI Tutor..."
              className="flex-1 bg-transparent px-2 py-1 text-sm focus:outline-none"
            />
            <button onClick={send} className="btn btn-primary btn-icon flex-shrink-0">
              <LuSend size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Visualization Panel */}
      <aside className={`
        w-80 flex-shrink-0 flex-col gap-4
        ${mode === 'smart' ? 'flex' : 'hidden'} 
      `}>
        <div className="card p-4">
          <div className="font-semibold">Visualization Canvas</div>
          <div className="mt-2 flex h-32 items-center justify-center rounded-md border-2 border-dashed border-border text-sm text-muted-foreground">
            Animated diagram & clips
          </div>
        </div>
        <div className="card p-4">
          <div className="font-semibold">Short Clips</div>
          <div className="mt-2 flex h-24 items-center justify-center rounded-md border-2 border-dashed border-border text-sm text-muted-foreground">
            3 × 30s clips
          </div>
        </div>
      </aside>
    </div>
  );
}