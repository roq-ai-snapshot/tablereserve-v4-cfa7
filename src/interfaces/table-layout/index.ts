import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface TableLayoutInterface {
  id?: string;
  restaurant_id?: string;
  table_number: number;
  seating_capacity: number;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    reservation?: number;
  };
}
