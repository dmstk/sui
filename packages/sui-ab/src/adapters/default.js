export default class DefaultAdapter {
  getEnabledFeatures({attributes}) {
    return Promise.resolve([])
  }
}
