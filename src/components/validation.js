import { object, ref, string} from 'yup';

const validations = object({
 
  email: string().email("Enter a valid email!").required("Must enter!"),
  password: string().min(6, "Password must be at least 6 characters").required("Must enter!"),
  passwordConfirm: string().oneOf([ref("password")], "Passwords must be same!").required("Must enter!"),
  
});

export default validations;