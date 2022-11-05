import { LoadingSpinner } from '../LoadingSpinner';
import { TicketCard } from '../TicketCard';
import { TicketCardProps } from '../TicketCard/TicketCard';
import { VirtualList } from '../VirtualList';
import styles from './styles.module.css';

export interface TicketsListProps {
  data?: TicketCardProps[] | null;
}

export const TicketsList = ({ data }: TicketsListProps): JSX.Element => {
  return (
    <div className={styles.ticketsList}>
      <VirtualList
        data={data}
        ItemComponent={TicketCard}
        SpinnerComponent={LoadingSpinner}
        idExtractor={(item: TicketCardProps) => item.ticket._id}
      />
    </div>
  );
};
