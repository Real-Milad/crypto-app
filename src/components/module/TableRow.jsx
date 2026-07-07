import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

export const TableRow = ({ coin, currency }) => {
  const { image, name, symbol, current_price, total_volume, price_change_percentage_24h: price_change } = coin

  function handleCurrency(currency) {
    if (currency === "usd") {
      return "$"
    }
    else if (currency === "eur") {
      return "€"
    } 
    else if (currency === "jpy") {
      return "¥"
    }
  }

  return (
    <tr className="transition-colors hover:bg-[#51445f]">
      <td className="whitespace-nowrap px-6 py-4 flex items-center justify-start ml-5 gap-6">
        <img src={image} alt={name} className="w-15 " />
        <p className="font-bold font-sans text-neutral-500">{symbol.toUpperCase()}</p>
      </td>

      <td className="whitespace-nowrap px-6 py-4 text-left text-[14px] text-neutral-300 font-semibold uppercase tracking-wider">{name.split(" ").slice(0, 3).join(" ")}</td>
      <td className="whitespace-nowrap px-6 py-4 text-center text[14px] text-neutral-300 font-semibold uppercase tracking-wider">{handleCurrency(currency)}{current_price.toLocaleString()}</td>
      <td className={`whitespace-nowrap px-6 py-4 text-center text[14px] ${price_change > 0 ? "text-green-400" : 'text-red-400'} font-semibold uppercase tracking-wider`}>{price_change?.toFixed(2)}%</td>
      <td className="whitespace-nowrap px-6 py-4 text-center text[14px] text-neutral-300 font-semibold uppercase tracking-wider ">${total_volume?.toLocaleString()}</td>
      <td className="whitespace-nowrap px-6 py-4 text-center text[14px] text-neutral-300 font-semibold uppercase tracking-wider flex justify-center mt-6"><img src={price_change > 0 ? chartUp : chartDown} alt="Chart" /></td>
    </tr>
  )
}