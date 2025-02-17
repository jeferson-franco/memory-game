export default function RegularButton({ children, handleClick }) {
  return (
    <button type="submit" className="btn btn--text" onClick={handleClick}>
      {children}
    </button>
  );
}
