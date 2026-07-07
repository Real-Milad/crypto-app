import { useEffect, useState } from "react"
import { searchCoins } from "../../service/cryptoApi"
import { useDebounce } from "../../hooks/useDebounce"



export const Searchbar = ({ currency, setCurrency }) => {
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState([])

  const debouncedSearch = useDebounce(search, 1000)
  
  const searchFetch = async (debouncedSearch) => {
    if (!search) return;
    try {
      const res = await fetch(searchCoins(debouncedSearch))
      const data = await res.json()
      console.log(data.coins)
      if (data.coins) setSearchData(data.coins)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!debouncedSearch) return

    searchFetch(debouncedSearch)
  }, [debouncedSearch])


  return (
    <div className="px-95 py-5">

      <input 
        type="text" 
        value={search}
        placeholder="Search...." 
        onChange={(e) => setSearch(() => e.target.value)}
        className="bg-purple-200 font-bold py-2 px-5 rounded-lg text-neutral-600 outline-none"
      />

      <select 
        value={currency}
        onChange={(e) => setCurrency(e.target.value)} 
        className="bg-purple-200 py-2 px-4 rounded-lg ml-5 font-bold text-neutral-600 outline-none"
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

    </div>
  )
}
