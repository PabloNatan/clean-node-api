module.exports =
class UnAuthorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'Unauthorized'
  }
}
