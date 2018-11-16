import Node from './Node'

class Tree {

    constructor(val = 0) {
        this.node = new Node('A')

        
    }

    getJson() {
        return JSON.stringify(this.node)
    }

    

}

export default Tree