export const numberFormat = (price) => {
    const formatted = price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
    return formatted
}

export const abbreviateNumber = (price) => {
    const SI_SYMBOL = ['', 'K', 'M', 'B', 'T']
    const tier = (Math.log10(Math.abs(price)) / 3) | 0
    const suffix = SI_SYMBOL[tier]
    const scale = Math.pow(10, tier * 3)
    const scaled = price / scale
    return scaled.toFixed(1) + suffix
}
