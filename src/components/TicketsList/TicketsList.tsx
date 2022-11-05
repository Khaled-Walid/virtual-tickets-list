import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { TicketCard } from '../TicketCard';
import { TicketCardProps } from '../TicketCard/TicketCard';
import { VirtualList } from '../VirtualList';
import styles from './styles.module.css';

export interface TicketsListProps {
  data?: TicketCardProps[] | null;
}

export const TicketsList = ({ data }: TicketsListProps): JSX.Element => {
  // this effect is just to fake loading state
  const [loadedTickets, setLoadedTickets] = useState<
    TicketCardProps[] | null | undefined
  >(null);
  useEffect(() => {
    setTimeout(() => setLoadedTickets(data), 2000);
  }, []);

  return (
    <div className={styles.ticketsList}>
      <h1>All Tickets</h1>
      <div className={styles.header}>
        <TicketCard
          ticket={{
            _id: '#Ticket',
            subject: 'Subject',
            status: 'status',
            priority: 'priority',
            description: 'Description',
          }}
        />
      </div>
      <div className={styles.listContainer}>
        <VirtualList
          data={loadedTickets}
          ItemComponent={TicketCard}
          SpinnerComponent={LoadingSpinner}
          idExtractor={(item: TicketCardProps) => item.ticket._id}
          listConfig={{
            itemHeight: 80,
            numItems: data?.length ?? 0,
            windowHeight: 600,
          }}
        />
      </div>
    </div>
  );
};
