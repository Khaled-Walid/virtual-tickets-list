import { TicketCard } from '../TicketCard';
import { TicketCardData } from '../TicketCard/TicketCard';

export interface TicketsListProps {
  data?: TicketCardData[] | null;
}

export const TicketsList = ({ data }: TicketsListProps): JSX.Element => {
  return (
    <ul>
      {data?.map((ticket) => (
        <TicketCard key={ticket._id} ticket={ticket} />
      ))}
    </ul>
  );
};
