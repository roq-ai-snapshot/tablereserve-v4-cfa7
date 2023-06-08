import { ReservationInterface } from 'interfaces/reservation';
import { TableLayoutInterface } from 'interfaces/table-layout';
import { WaiterInterface } from 'interfaces/waiter';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  user_id?: string;
  name: string;
  location?: string;
  contact_information?: string;
  reservation?: ReservationInterface[];
  table_layout?: TableLayoutInterface[];
  waiter?: WaiterInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
    table_layout?: number;
    waiter?: number;
  };
}
