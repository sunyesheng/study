// 理解 Promise 承诺
const PENDDING = 'pendding'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  #state = PENDDING
  #value = undefined
  #handlers = []
  constructor(executor) {
    try {
      executor(this._resolev.bind(this), this._reject.bind(this))
    } catch (e) {
      this._reject.bind(this)(e)
    }
  }

  _resolev(data) {
    this.#changeState(FULFILLED, data)
  }

  _reject(reason) {
    this.#changeState(REJECTED, reason)
  }

  #changeState(state, data) {
    if (this.#state !== PENDDING) return
    this.#state = state
    this.#value = data
    this.#run()
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((res, rej) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        res,
        rej,
      })
      this.#run()
    })
  }
  #run() {
    if (this.#state === PENDDING) return
    while (this.#handlers.length > 0) {
      const { onFulfilled, onRejected, res, rej } = this.#handlers.shift()
      if (this.#state === FULFILLED) {
        onFulfilled(this.#value)
      }
      if (this.#state === REJECTED) {
        onRejected(this.#value)
      }
    }
  }
}

const p = new MyPromise((res, rej) => {
  setTimeout(() => {
    res('node')
  }, 1000)
})

p.then(
  (res) => {
    console.log('res1', res)
  },
  (rej) => {
    console.log('rej1', rej)
  }
)

p.then(
  (res) => {
    console.log('res2', res)
  },
  (rej) => {
    console.log('rej2', rej)
  }
)

console.log('first', p)
