export default function Loading() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        minHeight: "100vh",
        background: "#17072b",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.1)",
          borderTopColor: "#fa8ae5",
          animation: "spin 0.7s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
