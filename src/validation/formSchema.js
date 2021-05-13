import * as yup from 'yup';

export default yup.object().shape({
   name: yup.string()
      .required('* Name is required.'),
   company: yup.string(),
   email: yup.string()
      .email('* Must be a valid email.')
      .required('* Email is required.'),
   subject: yup.string()
      .required('* Please indicate what your message is pertaining to :)'),
   text: yup.string()
})