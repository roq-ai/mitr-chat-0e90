import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  type: yup.string().required(),
  file_path: yup.string().required(),
  company_id: yup.string().nullable(),
});
