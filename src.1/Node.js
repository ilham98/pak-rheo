import dom, { JSDOM } from 'jsdom'
import conditions from './conditions'
const { document } = (new JSDOM(`...`)).window;

class Node {
  
    constructor(val, range = 0, arr_before = []) {
      this.val = val
      this.range = range
      this.nodes = []
      this.nodes = this.getResult(val, range, arr_before)
      arr_before.pop()
    }

    getResult = (val, range, arr_before = [])  => { 
      arr_before.push({val, range})  
      let new_arr = conditions.map(condition => {
        let arr_new = null
         
        if(val !== condition.val) {
          arr_new = null
        } else {
          arr_new = condition.canGoTo.map(go => {
            if(!this.isExist(go.val, arr_before))
              return new Node(go.val, go.range, arr_before)
            else 
              return null
          }).filter(arr => arr !== null)
        }
          return arr_new  
        }).filter(arr => arr !== null)
        return new_arr[0]
      
      }
    
      
    

    isExist = (val, arr_before) => {
      arr_before = arr_before.filter(arr_bf => {
        return val === arr_bf.val
      })

      if(arr_before.length > 0) {
        return true
      } else {
        return false
      }
      
    }




}

export default Node