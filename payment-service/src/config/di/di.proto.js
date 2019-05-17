const createContainer = () => {
  // DI store
  const registrations = {}
  // returns the DI
  const container = {
    get registrations () {
      return Object.assign({}, registrations)
    }
  }

  // DI cache systems
  container.cache = {}

  const getDI = new Proxy({}, {
    get: (taget, name) => resolve(name),
    set: (target, name, value) => {
      throw new Error('cannot set a value to the container')
    }
  })

  container.getDI = getDI

  const register = (name, registration, opts) => {
    const key = Symbol(name)
    registrations[key] = Object.assign({}, { fn: registration }, { lifetime: opts })
    return container
  }

  container.register = register

  const resolve = (name) => {
    const di = registrations[name]
    switch (di.lifetime) {
      case 'TRANSIENT':
        return container.registrations[name].fn
      case 'SINGLETON':
        if (!container.cache[name]) {
          container.cache[name] = container.registrations[name]
        }
        return container.cache[name].fn
    }
  }

  return Object.create(container)
}

module.exports.createContainer = createContainer
