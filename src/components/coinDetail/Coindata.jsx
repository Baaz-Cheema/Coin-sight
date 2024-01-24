import { formatPriceToShortForm,formatPriceToLocale } from "../../util/utilFunctions"

export default function CoinData({marketCap, volume, supply, low24h, high24h }) {
    return (
        <section className="grid grid-cols-5 gap-2 mb-14 lg:grid-cols-3 sm:grid-cols-2">
            <div className="font-poppins border border-zinc-700 py-2 px-4">
                <h6 className="capitalise text-amber-400 mb-1 text-sm">Market Cap</h6>
                <h4 className="text-xl font-bold">{formatPriceToShortForm(marketCap)}</h4>
            </div>
            <div className="font-poppins border border-zinc-700 py-2 px-4">
                <h6 className="capitalise text-amber-400 mb-1 text-sm">Volume</h6>
                <h4 className="text-xl font-bold">{formatPriceToShortForm(volume)}</h4>
            </div>
            <div className="font-poppins border border-zinc-700 py-2 px-4 ">
                <h6 className="capitalise text-amber-400 mb-1 text-sm">Supply</h6>
                <h4 className="text-xl font-bold">{formatPriceToShortForm(supply)}</h4>
            </div>
            <div className="font-poppins border border-zinc-700 py-2 px-4">
                <h6 className="capitalise text-amber-400 mb-1 text-sm">Low/24h</h6>
                <h4 className="text-xl font-bold">{formatPriceToLocale(low24h)}</h4>
            </div>
            <div className="font-poppins border border-zinc-700 py-2 px-4 ">
                <h6 className="capitalise text-amber-400 mb-1 text-sm">High/24h</h6>
                <h4 className="text-xl font-bold">{formatPriceToLocale(high24h)}</h4>
            </div>
        </section>
    )
}