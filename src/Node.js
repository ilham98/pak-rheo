import conditions from './conditions'

class Node {
  
    constructor(arr, arr_before = []) {
      this.first = arr[0]
      this.second = arr[1]
  
      this.nodes = []
      this.nodes = this.getResult([this.first,this.second], arr_before)
      arr_before.pop()
    }

    getResult = (arr, arr_before = [])  => {

      arr_before.push(arr)

      let arr_new = conditions.map(condition => {
        const { first, second } = condition

        if(arr[0] >= first.min && arr[0] <= first.max && arr[1] >= second.min && arr[1] <= second.max) {

          let array = [arr]

          array[0] = arr[0] + first.val
          array[1] = arr[1] + second.val

          if (typeof(first.mt) === 'number') {
            array[0] = first.mt
          } else if (first.mt === 'half') {
            array[0] = array[0]/2
          } 
          else if (first.mt === 'trans') {
            if (array[0] + array[1] >= 3) {
              array[0] = array[0] - (3 - array[1])
              array[1] = 3
            }
          } else if (first.mt === 'trans_all') {
            if (array[0] + array[1] <= 3) {
              array[0] = 0
              array[1] = array[0] + array[1]
            }
          }
 
          if (typeof(second.mt) === 'number') {
            array[1] = second.mt
          } else if (second.mt === 'half') {
            array[1] = array[1]/2
          } 
          else if (second.mt === 'trans') {
            if (array[0] + array[1] >= 4) {
              array[0] = 4
              array[1] = array[1] - (4 - array[0])
            }
          } else if (second.mt === 'trans_all') {
            if (array[0] + array[1] <= 4) {
              array[0] = array[0] + array[1]
              array[1] = 0
            }
          }

          if (!this.isExist(array, arr_before)) {
            return new Node(array, arr_before)
          } else {
            return undefined
          }
        } else {
          return undefined
        } 

      }).filter(result => {
        return result !== undefined
      })

      

      return arr_new
    }

    isExist = (arr, arr_before) => {
      arr_before = arr_before.filter(arr_bf => {
        return arr_bf[0] === arr[0] && arr_bf[1] === arr[1]
      })

      if(arr_before.length > 0) {
        return true
      } else {
        return false
      }
      
    }




}

export default Node