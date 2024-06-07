/* eslint-disable react/prop-types */

const ErrorMessage = ({list}) => {
  

  return <>{list.length === 0 && <h3> I am still hungry.</h3>}</>;
};
export default ErrorMessage;
