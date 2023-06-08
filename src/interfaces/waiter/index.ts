import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface WaiterInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
