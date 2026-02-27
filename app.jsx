// Reusable functional component
// Accepts two props: label and value

function Badge({ label, value }) {
  return (
    <div className="badge">
      <span className="badge-label">{label}</span>
      <span className="badge-value">{value}</span>
    </div>
  );
}

export default Badge;
