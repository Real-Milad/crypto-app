import { TableRow } from "./TableRow";

export const TableCoins = ({ coins }) => {

  return (
    <div className="min-h-screen ">
      <div className="mx-auto max-w-6xl">
        
        {/* Table */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y bg-[#2f2834]">
              <thead className="bg-[#7d708a]">
                <tr className="">
                  <th className="pr-6 py-3.5 text-left px-20  text-xs font-semibold uppercase tracking-wider text-slate-100">
                    Coin
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-100">
                    Name
                  </th>
                  <th className="px-6 py-3.5  text-xs font-semibold uppercase tracking-wider text-slate-100">
                    Price
                  </th>
                  <th className="px-6 py-3.5  text-xs font-semibold uppercase tracking-wider text-slate-100">
                    24H
                  </th>
                  <th className="px-6 py-3.5  text-xs font-semibold uppercase tracking-wider text-slate-100">
                    Total Volume
                  </th>
                  <th className="px-6 py-3.5  text-xs font-semibold uppercase tracking-wider text-slate-100">
                    Chart
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {coins.map(coin => <TableRow coin={coin} key={coin.id} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
