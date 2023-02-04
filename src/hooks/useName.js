import { useContext } from 'react';

import SignUpContext from '../contexts/SignUpContext';

export default function useName() {
  const { signUpData: user } = useContext(SignUpContext);

  return user.name;
}