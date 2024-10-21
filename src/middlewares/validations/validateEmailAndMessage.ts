import { ServiceResponse } from '../../Interfaces/ServiceResponse';
import schema from '../schema/schema';

// Middleware de validação
const validateEmailAndMessage = (
  keysObjectValidate: { email: string, message: string },
): ServiceResponse<null> | void => {
  const { error } = schema.sendEmail.validate(keysObjectValidate);

  if (error) return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
};

export default validateEmailAndMessage;
