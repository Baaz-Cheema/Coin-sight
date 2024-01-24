export function getTime(dateInMs, type) {
    if (type === 'hourly') {
        const date = new Date(dateInMs)
        let hours = date.getHours()
        let period = 'AM'
        if (hours >= 12) {
            period = 'PM'
            hours -= 12
        }
        if (hours === 0) {
            hours = 12
        }

        return `${hours}:00 ${period}`
    }
    else {
        const date = new Date(dateInMs)
        let day = date.getDate()

        let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let month = monthNames[date.getMonth()];
        return `${day} ${month}`
    }
}

export function colorisePriceChange(val) {
    if (val === 0) {
        return <i className='bx bxs-down-arrow' ></i>
    }
    if (val > 0) {
        return <i className='bx bxs-up-arrow text-xs text-green-500' ></i>
    } else {
        return <i className='bx bxs-down-arrow text-xs text-red-500' ></i>
    }
}

export const formatPriceToShortForm = (price) => {
    const config = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 });
    return config.format(price)
}

export function formatPriceToLocale(price) {
    return parseFloat(price.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 })
}
