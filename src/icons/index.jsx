export const Icon = ({ children, height, width, viewBox, color }) => {
  return (
    <>
      <svg height={height} width={width} viewBox={viewBox} color={color}>
        {children}
      </svg>
    </>
  );
};
