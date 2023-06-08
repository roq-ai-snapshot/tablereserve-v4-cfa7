import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { tableLayoutValidationSchema } from 'validationSchema/table-layouts';
import { waiterValidationSchema } from 'validationSchema/waiters';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string(),
  contact_information: yup.string(),
  user_id: yup.string().nullable(),
  reservation: yup.array().of(reservationValidationSchema),
  table_layout: yup.array().of(tableLayoutValidationSchema),
  waiter: yup.array().of(waiterValidationSchema),
});
