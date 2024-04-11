import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ handlePageClick, totalPages }) {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Sau>"
            onPageChange={handlePageClick}
            pageCount={totalPages}
            previousLabel="<Trước"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    );
}

export default Pagination;