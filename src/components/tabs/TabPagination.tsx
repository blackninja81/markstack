import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TabPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const TabPagination: React.FC<TabPaginationProps> = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(currentPage - 1, event);
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={(event) => handlePageChange(index + 1, event)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(event: any) => {
              event.preventDefault();
              handlePageChange(currentPage + 1, event);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TabPagination;
