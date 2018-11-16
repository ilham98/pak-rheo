const condition_1 = {
    val: 'A',
    canGoTo: [{ val: 1, range: 9 }, {val: 5, range: 11}]
}

const condition_2 = {
    val: 1,
    canGoTo: [{ val: 'A', range: 9 }, {val: 3, range: 17}, {val: 2, range: 12}]
}

const condition_3 = {
    val: 2,
    canGoTo: [{ val: 1, range: 12 }, { val: 8, range: 25 }, { val: 6, range: 15 }]
}

const condition_4 = {
    val: 3,
    canGoTo: [{ val: 1, range: 17 }, { val: 'B', range: 26 }, { val: 6, range: 17 }]
}

const condition_5 = {
    val: 4,
    canGoTo: [{ val: 1, range: 18 }, { val: 5, range: 24 }, { val: 6, range: 7 }]
}

const condition_6 = {
    val: 5,
    canGoTo: [{ val: 'A', range:11 }, { val: 7, range: 9 }, { val: 4, range: 24 }, { val: 1, range: 14 }]
}

const condition_7 = {
    val: 6,
    canGoTo: [{ val: 7, range: 11 }, { val: 4, range: 7 }, { val: 2, range: 15 }, { val:3, range: 11 }]
}

const condition_8 = {
    val: 7,
    canGoTo: [{ val: 6, range: 11 }, { val: 5, range: 9 }, { val: 'B', range: 16 }]
}

const condition_9 = {
    val: 'B',
    canGoTo: [{ val:2, range: 25 }, { val: 7, range: 16 }, { val: 3, range: 26 }]
}

const conditions =  [ 
                        condition_1, 
                        condition_2,
                        condition_3,
                        condition_4,
                        condition_5,
                        condition_6,
                        condition_7,
                        condition_8,
                        condition_9
                    ]

export default conditions