```js

let fives = []
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
})
console.log(fives);


var customer = { name: 'Foo' }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount}`
console.log(message);

obj = {
    foo(a, b) {
        console.log("foo")
    },
    bar(x, y) {
        console.log("bar")
    },
    *quux (x, y) {
        console.log("quux")
    }
}
obj.foo()

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }

    static defaultRectangle() {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}

var defRectangle = Rectangle.defaultRectangle()
console.log(defRectangle)

function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}
for (let i of range(0, 10, 2)) {
    console.log("Generator " + i)
}

let s = new Set()
s.add("hello").add("goodbye").add("hello")
console.log(s.size)
console.log(s.has("hello"))
for (let key of s.values())
    console.log(key)

let map = new Map()
let sym = Symbol()
map.set("hello", 42)
map.set(sym, 34)
map.get(sym) === 34
map.size === 2
for (let [key, val] of map.entries())
    console.log(key, " = ", val)

function msgAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}

msgAfterTimeout("", "Mike", 100).then((msg) => {
    msgAfterTimeout(msg, "Phil", 200)
}).then((msg) =>
    console.log(`done after 300ms: ${msg}`)
)
```

