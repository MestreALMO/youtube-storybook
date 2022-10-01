export const IconsStoryBookContainer = ({ children, iconName }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
        }}
      >
        {children}
        <p style={{ margin: 0 }}>{iconName}</p>
      </div>
    </>
  );
};
