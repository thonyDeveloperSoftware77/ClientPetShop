import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre"
      },
      {
        Header: "Descripcion",
        accessor: "descripcion"
      },
      {
        Header: "Precio",
        accessor: "precio"
      },
    ],
    []
  );

  return columns;
}
