import { useEffect, useState } from "react"
import { TableCoins } from "../module/TableCoins"
import { coinsApi } from "../../service/cryptoApi"
import { Triangle } from "react-loader-spinner"

export const Home = () => {
  const [coins, setCoint] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCoins = async () => {
    try {
      const res = await fetch(coinsApi())
      const data = await res.json()
      setCoint(data)
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCoins()
  }, [])


  if (isLoading) {
    return (
      <div>
        <Triangle height="200" width="200" color="#982598"/>
      </div>
    )
  }

  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  )
}
