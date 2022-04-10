module.exports =
class UnAuthorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized')
    this.name = 'Unauthorized'
  }
}
