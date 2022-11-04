import './App.css';
import { TicketsList } from './components/TicketsList';
import { ticketsMock } from './mocks/tickets';

function App(): JSX.Element {
  return <TicketsList data={ticketsMock} />;
}

export default App;
