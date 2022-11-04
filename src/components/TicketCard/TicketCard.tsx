export interface TicketCardData {
  _id: string;
  subject: string;
  status: 'open' | 'closed' | 'in progress';
  priority: 'low' | 'medium' | 'urgent';
  description: string;
}

export interface TicketCardProps {
  ticket: TicketCardData;
}

export const TicketCard = ({ ticket }: TicketCardProps): JSX.Element => {
  const { _id, description, priority, status, subject } = ticket;
  return (
    <li>
      <h3>{`${subject} + ${_id}`}</h3>
      <p>{description}</p>
      <p>{status}</p>
      <p>{priority}</p>
    </li>
  );
};
