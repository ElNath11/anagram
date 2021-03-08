function sortString(str) {
    return Array.from(str)
        .sort()
        .join('');
}

function anagramsArr() {
    let arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

    const hasil = arr.reduce((accumulator, str) => {
        const modifiedStr = sortString(str);
        if(!accumulator[modifiedStr]) {
            accumulator[modifiedStr] = [];
        }
        accumulator[modifiedStr].push(str);
        return accumulator;
    }, {});
console.log('result', hasil);
   
    return Object.keys(hasil).map(key => hasil[key]);
}