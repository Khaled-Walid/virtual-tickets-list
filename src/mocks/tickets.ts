import { TicketCardProps } from '../components/TicketCard/TicketCard';

export const ticketsMock: TicketCardProps[] = Array.from(Array(20)).map(
  (x) => ({
    ticket: {
      _id: `${Math.random()}`,
      subject: 'crack above wall socket',
      status: 'open',
      priority: 'low',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est eleifend metus faucibus placerat. Nam non orci elit. Vestibulum nec risus sed justo dictum consectetur eu ac mauris. Suspendisse pretium tempus sapien vitae cursus. Phasellus ornare lacus eu purus tempor viverra. Cras imperdiet ex id dui bibendum auctor. Donec ornare justo lacus, ut feugiat justo hendrerit id. Vestibulum convallis elit luctus enim vestibulum, quis dignissim orci tincidunt.',
    },
  }),
);
