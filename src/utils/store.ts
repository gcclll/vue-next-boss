export interface IStore {
  getItem(key: string, defaultVal?: any): any
  setItem(key: string, val: any): any
}

const localStore: IStore = {
  getItem: (key: string, defaultVal = null) => {
    let res: any = localStorage.getItem(key)
    try {
      res = JSON.parse(res)
    } catch (e) {
      console.warn(`parse `, res, 'error')
    }
    return res || defaultVal
  },

  setItem: (key: string, val: any) =>
    localStorage.setItem(
      key,
      typeof val === 'object' ? JSON.stringify(val) : val
    )
}

export { localStore }
