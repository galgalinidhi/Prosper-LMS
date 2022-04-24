import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../components/ChatFeed';
import LoginForm from '../components/LoginForm';
import '../CSS/chat.css';

const projectID = '8ac79f9f-58e9-4a2e-a3cb-327794a2ad6f';

const Chat_try = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chat_try;