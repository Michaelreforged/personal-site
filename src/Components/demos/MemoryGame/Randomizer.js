
const items = ["a","b","c","d","e","f","g","h","a","b","c","d","e","f","g","h"]

const createStart = () =>{
  let piece = class{
    constructor(flip, value){
      this.flipped = flip
      this.value = value
    }
  }

  const itemCopy = [...items]

  let randomized = []

  do {
    let rand = Math.floor(itemCopy.length*Math.random())
    randomized.push(itemCopy.splice(rand,1)[0])
  } while (itemCopy.length>0);

  let start = randomized.map((rand)=>{
    return new piece(false,rand)
  })

  return start
}
export default createStart