export default function Dropdown({ data, className }) {
  return (
    <div className={`bg-red-500 ${className}`}>
      {data.map(({ title }, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
}
