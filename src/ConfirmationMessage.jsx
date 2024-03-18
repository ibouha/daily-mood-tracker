// eslint-disable-next-line react/prop-types
const ConfirmationMessage = ({ message }) => {
  return (
    <div className="mt-16">
      <h2 className="text-9xl font-bold text-blue-500">{message}</h2>
    </div>
  );
};

export default ConfirmationMessage;
