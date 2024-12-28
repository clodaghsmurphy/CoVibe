import { ReactNode } from "react"
import { UseQueryResult } from "@tanstack/react-query"

interface QueryHandlerProps<TData> {
  query: UseQueryResult<TData>
  loadingComponent?: ReactNode
  errorComponent?: ReactNode
  children: (data: TData) => ReactNode
}

export const QueryHandler = <TData,>({
  query,
  loadingComponent = <p>Loading...</p>,
  errorComponent = <p>Something went wrong!</p>,
  children,
}: QueryHandlerProps<TData>) => {
  const { isLoading, isError, data } = query
  if (isLoading) {
    return <>{loadingComponent}</>
  }

  if (isError) {
    return <>{errorComponent}</>
  }
  if (data) {
    return <>{children(data)}</>
  }

  return null
}
