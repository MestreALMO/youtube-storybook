export const MyButton = ({ color, text }) => {
  return (
    <>
      <button
        style={{
          color,
          fontWeight: 800,
        }}
      >
        {text}
      </button>
    </>
  );
};
