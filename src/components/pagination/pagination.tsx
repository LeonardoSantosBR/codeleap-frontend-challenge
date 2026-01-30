import type { PaginationProps } from "../../types/pagination-props";

export function Pagination({
  page,
  totalPages,
  hasNext,
  hasPrev,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getPages(page, totalPages);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={!hasPrev}
        onClick={() => onChange(page - 1)}
        className="h-[32px] px-3 rounded-[8px] border border-[#CCCCCC] bg-white disabled:opacity-50"
      >
        Previous
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-600">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`h-[32px] w-[36px] rounded-[8px] border border-[#CCCCCC]
              ${p === page ? "bg-[#7695EC] text-white" : "bg-white"}`}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={!hasNext}
        onClick={() => onChange(page + 1)}
        className="h-[32px] px-3 rounded-[8px] border border-[#CCCCCC] bg-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

function getPages(current: number, total: number): Array<number | "..."> {
  const delta = 1;
  const range: number[] = [];
  const rangeWithDots: Array<number | "..."> = [];
  let last = 0;

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (last) {
      if (i - last === 2) rangeWithDots.push(last + 1);
      else if (i - last > 2) rangeWithDots.push("...");
    }
    rangeWithDots.push(i);
    last = i;
  }

  return rangeWithDots;
}
