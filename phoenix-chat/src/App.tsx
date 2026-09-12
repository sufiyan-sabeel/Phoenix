import { usePhoenix } from './hooks/usePhoenix';
import { ConnectionScreen } from './components/ConnectionScreen';
import { ChatApp } from './components/ChatApp';

export default function App() {
  const phoenix = usePhoenix();
  
  if (phoenix.connectionState !== 'connected') {
    return <ConnectionScreen phoenix={phoenix} />;
  }
  
  return <ChatApp phoenix={phoenix} />;
}
