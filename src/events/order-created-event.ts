import { Subjects } from './subjects';
import { OrderStatus } from './types';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    expiresAt: string;
    userId: string;
    status: OrderStatus;
    version: number;
    ticket: {
      id: string;
      price: number;
    };
  };
}
