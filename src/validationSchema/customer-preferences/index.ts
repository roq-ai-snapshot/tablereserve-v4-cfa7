import * as yup from 'yup';

export const customerPreferenceValidationSchema = yup.object().shape({
  dietary_restriction: yup.string(),
  special_request: yup.string(),
  reservation_id: yup.string().nullable(),
});
