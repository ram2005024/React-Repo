import { redirect } from 'react-router-dom';
import { Remove } from '../helper';
import { toast } from 'react-toastify';

export const LoadAction = () => {
 Remove('userName'); // Remove userName from localStorage
toast.success('Deleted Account successfully')
  // Trigger a custom event to notify Main.jsx about the change
  return redirect('/'); // Redirect to home page
};

export default LoadAction;
