import { httpClient } from "@/api/httpClient/axios"
import { useQuery } from "@tanstack/react-query"

export interface PriceRecord {
  id: string
  price: number
  date: string
  store?: string
}
export interface Grocery {
  id: string
  name: string
  category: string
  purchaseFrequency: string
  householdId: string
  link?: string | null
  priceRecords?: PriceRecord[]
}
export const useGetGroceries = () => {
  return useQuery<Grocery[], Error>({
    queryKey: ["groceries"],
    queryFn: async () => {
      console.log(httpClient.getUri())
      const response = await httpClient.get("/groceries/8c698634-d2f9-4d04-b439-c370a93bf48c")
      return response.data
    },
  })
}
