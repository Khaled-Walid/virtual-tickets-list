import styles from './styles.module.css';

export interface TicketCardData {
  _id: string;
  subject: string;
  status: 'open' | 'closed' | 'in progress' | 'status';
  priority: 'low' | 'medium' | 'urgent' | 'priority';
  description: string;
}

export interface TicketCardProps {
  ticket: TicketCardData;
}

export const TicketCard = ({ ticket }: TicketCardProps): JSX.Element => {
  const { _id, description, priority, status, subject } = ticket;
  const statusColors = {
    open: '#74c174',
    'in progress': '#debd89',
    closed: '#e66a6a',
    status: '#000',
  };
  const priorityColors = {
    low: '#008000',
    medium: '#ce9337',
    urgent: '#ff0000',
    priority: '#000',
  };
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: _id === '#Ticket' ? '#cdd9f1' : 'inherit',
      }}
    >
      <span className={styles.id}>{`${_id}`}</span>
      <span className={styles.subject}>{`${subject}`}</span>
      <span className={styles.description}>{description}</span>
      <span
        className={styles.status}
        style={{ color: `${statusColors[status]}` }}
      >
        {status}
      </span>
      <span
        className={styles.priority}
        style={{ color: `${priorityColors[priority]}` }}
      >
        {priority}
      </span>
    </div>
  );
};
