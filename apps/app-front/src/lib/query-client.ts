import { QueryClient } from "@tanstack/react-query"

let queryClient: QueryClient | undefined = undefined

export const getQueryClient = () => {
  if (queryClient) return queryClient

  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        refetchOnWindowFocus: false,
      },
    },
  })

  return queryClient
}
