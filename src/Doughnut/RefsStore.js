/* @flow */
export default class RefsStore {
  store(name: string, element: any) {
    // $FlowFixMe: like forwardRef
    this[name] = element;
  }
}
