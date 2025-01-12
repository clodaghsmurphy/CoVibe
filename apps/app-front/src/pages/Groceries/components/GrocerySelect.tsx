import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Combobox } from "@/components/ui/combobox"
import { useToast } from "@/components/hooks/use-toast"
import { Frequency } from "@/types/grocery"
import { httpClient } from "@/api/httpClient/axios"

interface Grocery {
  id: string
  name: string
  category: string
  purchaseFrequency: Frequency
  householdId: string
  link?: string
}

const HOUSEHOLD_ID = "8c698634-d2f9-4d04-b439-c370a93bf48c"

interface GrocerySelectProps {
  onSelect: (groceryId: string) => void
}

export const GrocerySelect: React.FC<GrocerySelectProps> = ({ onSelect }) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { data: groceries, isLoading: isLoadingGroceries } = useQuery({
    queryKey: ["groceries"],
    queryFn: async () => {
      const response = await httpClient.get<Grocery[]>(`/groceries/${HOUSEHOLD_ID}`)
      return response.data
    },
  })

  const { data: currentList } = useQuery({
    queryKey: ["currentShoppingList"],
    queryFn: async () => {
      const response = await httpClient.get(`/groceries/shopping-list/${HOUSEHOLD_ID}/current`)
      return response.data
    },
  })

  const addToShoppingList = useMutation({
    mutationFn: async (groceryId: string) => {
      console.log("Adding to shopping list", groceryId)
      const response = await httpClient.post("/groceries/add-to-shopping-list", {
        groceryId,
        householdId: HOUSEHOLD_ID,
        quantity: 1,
      })
      return response.data
    },
    onSuccess: async (_, groceryId) => {
      const grocery = groceries?.find((g) => g.id === groceryId)
      await queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      await queryClient.invalidateQueries({ queryKey: ["shopping-list-total", currentList?.id] })
      await queryClient.invalidateQueries({ queryKey: ["currentShoppingList"] })
      toast({
        title: "Added to Shopping List",
        description: `${grocery?.name || "Item"} has been added to your shopping list`,
      })
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add item to shopping list",
      })
    },
  })

  const handleSelect = (groceryId: string) => {
    addToShoppingList.mutate(groceryId)
  }

  if (isLoadingGroceries) {
    return <div>Loading groceries...</div>
  }

  const comboboxOptions =
    groceries?.map((grocery) => ({
      value: grocery.id,
      label: grocery.name,
    })) || []

  return <Combobox options={comboboxOptions} />
}
