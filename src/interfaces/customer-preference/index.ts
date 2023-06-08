import { ReservationInterface } from 'interfaces/reservation';

export interface CustomerPreferenceInterface {
  id?: string;
  reservation_id?: string;
  dietary_restriction?: string;
  special_request?: string;

  reservation?: ReservationInterface;
  _count?: {};
}
