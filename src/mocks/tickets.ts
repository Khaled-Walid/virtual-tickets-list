import { TicketCardProps } from '../components/TicketCard/TicketCard';

const subjects: string[] = [
  'crack above wall socket',
  'broken window',
  'broken door',
  'construction is incomplete',
];
const statuses: Array<'open' | 'closed' | 'in progress'> = [
  'open',
  'in progress',
  'closed',
];
const priorities: Array<'low' | 'medium' | 'urgent'> = [
  'low',
  'medium',
  'urgent',
];
const descriptions: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est eleifend metus faucibus placerat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est eleifend metus faucibus placerat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscasdsa sadaing elit.',
  'Lorem consectetur adipiscing elit. ',
];

const pickRandom = <ArrItem>(array: ArrItem[]): ArrItem => {
  return array[Math.floor(Math.random() * array.length)];
};

export const ticketsMock: TicketCardProps[] = Array.from(Array(100)).map(
  (x) => ({
    ticket: {
      _id: `${Math.floor(Math.random() * 100000)}`,
      subject: pickRandom(subjects),
      status: pickRandom(statuses),
      priority: pickRandom(priorities),
      description: pickRandom(descriptions),
    },
  }),
);
