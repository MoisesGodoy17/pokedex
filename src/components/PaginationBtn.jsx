export default function PaginationBtn({
  page,                 
  onChange,             
  canPrev = true,       
  canNext = true        
}) {
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={!canPrev}
        aria-label="Previous page"
      >
        Prev
      </button>

      <span aria-live="polite" style={{ margin: "0 8px" }}>
        Page {page + 1}
      </span>

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={!canNext}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}