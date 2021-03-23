import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useState,
} from "react";

import { PaginationWrapper } from "./style";
function Pagination(props, ref) {
  const { totalPage, requestPage } = props;
  const [activePage, setActivePage] = useState(1);
  const getPager = (total, cur = 1, around = 2) => {
    let result = [];
    let baseCount = around * 2 + 7;
    let surplus = baseCount - 4;
    let start = 1 + 2 + around + 1;
    let end = total - 2 - around - 1;

    if (total <= baseCount - 2) {
      result = Array.from({ length: total }, (v, i) => i + 1);
    } else {
      if (cur < start) {
        result = [
          ...Array.from({ length: surplus }, (v, i) => i + 1),
          "...",
          total,
        ];
      } else if (cur > end) {
        result = [
          1,
          "...",
          ...Array.from(
            { length: surplus },
            (v, i) => total - surplus + i + 1
          ),
        ];
      } else {
        result = [
          1,
          "...",
          ...Array.from(
            { length: around * 2 + 1 },
            (v, i) => cur - around + i
          ),
          "...",
          total,
        ];
      }
    }
    return result;
  };
  useImperativeHandle(ref, () => ({
    resetPager: () => {
      setActivePage(1);
    },
  }));
  const changeActivePage = (page) => {
    if (page === "...") return;
    requestPage(page);
    window.scrollTo(0, 0);
    setActivePage(page);
  };
  const goPrev = () => {
    if (activePage === 1) {
      return;
    } else {
      requestPage(activePage - 1);
      window.scrollTo(0, 0);
      setActivePage((activePage) => activePage - 1);
    }
  };

  const goNext = () => {
    if (activePage === totalPage) {
      return;
    } else {
      requestPage(activePage + 1);
      window.scrollTo(0, 0);
      setActivePage((activePage) => activePage + 1);
    }
  };
  return (
    <PaginationWrapper>
      <nav aria-label="Page number">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${activePage === 1 ? "disabled" : ""}`}
            onClick={goPrev}
          >
            <div className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </div>
          </li>
          {getPager(totalPage, activePage).map((pager, idx) => {
            return (
              <li
                onClick={(e) => changeActivePage(pager)}
                className={`page-item ${
                  pager === "..."
                    ? "disabled"
                    : pager === activePage
                    ? "active"
                    : ""
                }`}
                key={pager + idx}
              >
                <div className="page-link">{pager}</div>
              </li>
            );
          })}

          <li
            onClick={goNext}
            className={`page-item ${
              activePage === totalPage ? "disabled" : ""
            }`}
          >
            <div className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </div>
          </li>
        </ul>
      </nav>
    </PaginationWrapper>
  );
}
export default memo(forwardRef(Pagination));
