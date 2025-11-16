export default function Pagination({ total, perPage, current, setCurrent }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrent(page)}
          style={{
            marginRight: "5px",
            padding: "5px 10px",
            backgroundColor: current === page ? "#333" : "#ddd",
            color: current === page ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}