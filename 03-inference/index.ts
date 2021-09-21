// type inference - autotype
let message = "mensagem definida"
message = 'nova string'

window.addEventListener("click", (e) => {
  console.log(e.target)
})

//typescript consegue autotipar muita coisa, 
// entao nao precisa ser redundante,
// typar apenas aquilo que ele nao entende