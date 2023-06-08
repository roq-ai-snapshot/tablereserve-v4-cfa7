import * as yup from 'yup';
import { customerPreferenceValidationSchema } from 'validationSchema/customer-preferences';

export const reservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
  table_layout_id: yup.string().nullable(),
  customer_preference: yup.array().of(customerPreferenceValidationSchema),
});
