// boolean (true/false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//number (int, float, hex, binary)
let Values: number
Values = 0xff0

// array (type[]) / Array<type>
let items: string[]
items = ["foo", "bar"]

let total: Array<number>
total = [1, 2, 3]

//tuple - two or more
let title: [number, string, string]
title = [1, 'foo', 'fii']

//enum
enum Colors {
  white = '#fff',
  black = '#000'
}

enum Cor {
  Branco, // 0  por padrao ele segue a sequecia
  Amarelo, // 1
  Verde, // 2
  Azul = 100, // posso atribuir um valor
  Roxo, // o proximo segue o valor de cima 101
  Vermelho =100 // posso atribuir valores repetidos 
}

// any
let coisa: any
coisa = [1]

// void 
function logger(): void {
  console.log('foo')
}

//null / undefined
type Wut = string | undefined

//never
function error(): never{
  throw new Error('error')
}

//object
let cart: object
cart = {
  key: '001'
}