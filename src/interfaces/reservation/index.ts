import { CustomerPreferenceInterface } from 'interfaces/customer-preference';
import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { TableLayoutInterface } from 'interfaces/table-layout';

export interface ReservationInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  table_layout_id?: string;
  reservation_date: Date;
  number_of_guests: number;
  status: string;
  customer_preference?: CustomerPreferenceInterface[];
  user?: UserInterface;
  restaurant?: RestaurantInterface;
  table_layout?: TableLayoutInterface;
  _count?: {
    customer_preference?: number;
  };
}
