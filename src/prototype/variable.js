const GlobalVariables = []

class Variable {
  constructor({ name, type, value, defaultValue, validate } = {}) {
    this.name = name
    this.defaultValue = defaultValue
    this.value = value === undefined ? defaultValue : value
    this.type = type
    this.validate = validate
    GlobalVariables[this.name] = this
  }
  valid() {
    return this.validate(this.value)
  }
  shell() {
    return `export ${this.name}=${this.value}`
  }
}

export default Variable
