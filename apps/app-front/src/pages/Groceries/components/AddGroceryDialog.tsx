import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Button } from "../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Frequency } from "../../../types/grocery"

interface AddGroceryFormData {
  name: string
  category: string
  purchaseFrequency: Frequency
  householdId: string
  link?: string
  price?: number
  store?: string
}

export function AddGroceryDialog() {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const { mutate: addGrocery } = useMutation({
    mutationFn: async (data: AddGroceryFormData) => {
      const response = await axios.post("http://192.168.0.170:8080/groceries", data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groceries"] })
      setOpen(false)
    },
  })

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<string[]>(
        "http://192.168.0.170:8080/groceries/categories/8c698634-d2f9-4d04-b439-c370a93bf48c",
      )
      return response.data
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    addGrocery({
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      purchaseFrequency: formData.get("purchaseFrequency") as "MONTHLY" | "QUARTERLY" | "ANNUALLY",
      householdId: "8c698634-d2f9-4d04-b439-c370a93bf48c",
      link: (formData.get("link") as string) || undefined,
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : undefined,
      store: (formData.get("store") as string) || undefined,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Grocery</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Grocery</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="purchaseFrequency" className="text-sm font-medium">
              Purchase Frequency
            </label>
            <select
              id="purchaseFrequency"
              name="purchaseFrequency"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="MONTHLY">Monthly</option>
              <option value="QUARTERLY">Quarterly</option>
              <option value="ANNUALLY">Annually</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="store" className="text-sm font-medium">
              Store
            </label>
            <input
              id="store"
              name="store"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="link" className="text-sm font-medium">
              Link (Optional)
            </label>
            <input
              id="link"
              name="link"
              type="url"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Grocery</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
