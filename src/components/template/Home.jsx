import { useEffect, useState } from "react"
import { TableCoins } from "../module/TableCoins"
import { coinsApi } from "../../service/cryptoApi"
import { Triangle } from "react-loader-spinner"
import { Pagination } from "../module/Pagination"

export const Home = () => {
  const [coins, setCoint] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  const totalPage = 10

  
  useEffect(() => {
    let timer
    const fetchCoins = async () => {
      try {
        const res = await fetch(coinsApi())
        const data = await res.json()
        
        timer = setInterval(() => {
          setCoint(data)
          setIsLoading(false)
        }, 2000);
      }
      catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchCoins()

    return () => clearInterval(timer)
  }, [])


  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Triangle height="200" width="200" color="#982598"/>
      </div>
    )
  }

  return (
    <div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <TableCoins coins={coins} />
    </div>
  )
}
