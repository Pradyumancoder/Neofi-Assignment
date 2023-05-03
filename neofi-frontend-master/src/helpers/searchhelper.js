const searchCoin = (coins, searchText) => {
    return coins.filter((c) => c.name.toLowerCase().includes(searchText.toLowerCase()))
}

export { searchCoin }