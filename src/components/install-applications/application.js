export default class Application {
  constructor({ name, version, selected, geektr, beforeUpdate, aptInstall, afterInstall }) {
    this.name = name
    this.version = version
    this.selected = selected
    this.geektr = geektr
    this.beforeUpdate = beforeUpdate
    this.aptInstall = aptInstall
    this.afterInstall = afterInstall
  }
}
