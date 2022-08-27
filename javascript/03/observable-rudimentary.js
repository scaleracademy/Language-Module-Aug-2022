const inpInit = document.getElementById('init')
const inpDelta = document.getElementById('delta')

const btnCounter = document.getElementById('btnCounter')

const divCounters = document.getElementById('counters')

window.counters = []

btnCounter.onclick = function () {
  const counter = new Counter(inpInit.value, inpDelta.value)
  divCounters.appendChild(counter.el)
  counter.el.onclick = function () {
    counter.count()
  }

  window.counters.push(counter)
  
}

class Counter {
  constructor(init, delta) {
    this.init = Number(init) 
    this.delta = Number(delta)
    this.el = document.createElement('div')
    this.el.innerText = `Count = ${init}`
    
  }
  get value() {
    return this.init
  }
  set value(x) {
    this.el.innerText = `Count = ${x}`
    this.init = x
    console.log(this)
  }

  count() {
    this.value = this.value + this.delta
  }
}