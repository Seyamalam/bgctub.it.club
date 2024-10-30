"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SearchFilterProps {
  onSearch: (query: string) => void
  onFilter: (filters: string[]) => void
  filterOptions: string[]
}

export function SearchFilter({ onSearch, onFilter, filterOptions }: SearchFilterProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(f => f !== filter)
      : [...selectedFilters, filter]
    
    setSelectedFilters(newFilters)
    onFilter(newFilters)
  }

  return (
    <div className="flex gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search posts..."
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {filterOptions.map((filter) => (
            <DropdownMenuCheckboxItem
              key={filter}
              checked={selectedFilters.includes(filter)}
              onCheckedChange={() => handleFilterChange(filter)}
            >
              {filter}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 