import { httpClient } from "@/api/httpClient/axios"
import { Frequency } from "@/types/grocery"
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
  purchaseFrequency: Frequency
  householdId: string
  link?: string | null
  priceRecords?: PriceRecord[]
}
export const useGetGroceries = (householdId: string) => {
  return useQuery<Grocery[], Error>({
    queryKey: ["groceries"],
    queryFn: async () => {
      const response = await httpClient.get(`/groceries/${householdId}`)
      return response.data
    },
  })
}
