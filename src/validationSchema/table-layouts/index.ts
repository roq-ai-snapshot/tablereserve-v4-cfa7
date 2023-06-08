import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const tableLayoutValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  seating_capacity: yup.number().integer().required(),
  restaurant_id: yup.string().nullable(),
  reservation: yup.array().of(reservationValidationSchema),
});
