import { TicketCard } from '../TicketCard';
import { TicketCardProps } from '../TicketCard/TicketCard';
import { VirtualList } from '../VirtualList';
import './styles.module.css';

export interface TicketsListProps {
  data?: TicketCardProps[] | null;
}

export const TicketsList = ({ data }: TicketsListProps): JSX.Element => {
  return (
    <VirtualList
      data={data}
      ItemComponent={TicketCard}
      idExtractor={(item: TicketCardProps) => item.ticket._id}
    />
  );
};
