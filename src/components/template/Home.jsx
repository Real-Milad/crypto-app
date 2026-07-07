import { useEffect, useState } from "react"
import { Searchbar } from "../module/Searchbar"
import { Pagination } from "../module/Pagination"
import { TableCoins } from "../module/TableCoins"
import { coinsApi } from "../../service/cryptoApi"

export const Home = () => {

  const totalPage = 10
  const [page, setPage] = useState(1)
  const [coins, setCoint] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currency, setCurrency] = useState("usd")

  
  useEffect(() => {
    setIsLoading(true)

    const fetchCoins = async () => {
      try {
        const res = await fetch(coinsApi(page, currency))
        if (res.ok) {
          const data = await res.json()
          setCoint(data)
        }
        setIsLoading(false)
      }
      catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchCoins()
    window.scrollTo({ top: 0, behavior: "smooth" })

  }, [page, currency])


  return (
    <div>
      <Searchbar currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  )
}