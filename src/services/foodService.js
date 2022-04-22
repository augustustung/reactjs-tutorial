import Request from './request'

export default class FoodService {
  static async getList(data = {}) {
    return new Promise(resolve => {
      Request.send({
        method: 'GET',
        path: '/data',
        data
      }).then((result = {}) => {
        resolve(result);
      })
    })
  }

  static async Delete(path = '/data/') {
    return new Promise(resolve => {
      Request.send({
        method: 'delete',
        path: path,

      }).then((result = {}) => {
        resolve(result);
      })
    })
  }

  static async Update(path = '/data/') {
    return new Promise(resolve => {
      Request.send({
        method: 'update',
        path: path,

      }).then((result = {}) => {
        resolve(result);
      })
    })
  }




}

