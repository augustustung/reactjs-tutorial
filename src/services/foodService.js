import Request from './request'

export default class FoodService {
    static async getList(data = {}) {
        return new Promise(resolve => {
            Request.send({
                method: 'GET',
                path: '/data',
                data
              }).then((result = {}) => {
                console.log(result)
              })
        })
    }
  }