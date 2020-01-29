import {useState} from 'react';

const useRegisterForm = () => {
  const [regInputs, setInputs] = useState({});
  const handleUsernameReg = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordReg = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handleEmailReg = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  return {
    handleUsernameReg,
    handlePasswordReg,
    handleEmailReg,
    regInputs,
  };
};

export default useRegisterForm;
