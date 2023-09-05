const Alert = ({ info, color }) => {
  return (
    <>
      <div className={info.color}>
        <p>{info.msg}</p>
      </div>
    </>
  );
};

export default Alert;
