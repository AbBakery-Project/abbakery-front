import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const SignUpContext = createContext();
export default SignUpContext;

export function SignUpProvider({ children }) {
  const [signUpData, setSignUpData] = useLocalStorage('signUpData', {});
  
  return (
    <SignUpContext.Provider value={{ signUpData, setSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
}