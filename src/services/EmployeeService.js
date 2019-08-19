/* eslint-disable no-loop-func */
import { API_URL } from '../config/constants';

class EmployeeService {
  async getEmployees(searchText) {
    return fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        return res.filter(emp => emp.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getEmployeeDetail(queryString) {
    return this.fetchEmpData(queryString)
      .then(res => {
        if (res[1] && res[1]["direct-subordinates"]) {

          let promises = [], func = this.fetchEmpData;
          for (let s of res[1]["direct-subordinates"]) {
            promises.push(function () {
              return new Promise((resolve, reject) => {
                func(s)
                  .then(r => {
                    if (r[1] && r[1]["direct-subordinates"]) {
                      resolve(r[1]["direct-subordinates"]);
                    } else {
                      resolve([]);
                    }
                  })
                  .catch(err => {
                    reject(err);
                  });
              });
            }());
          }

          return Promise.all(promises)
            .then(r => {
              let subOrds = [...res[1]["direct-subordinates"]];
              for (let i = 0; i < r.length; i++) {
                subOrds = [...subOrds, ...r[i]];
              }
              subOrds = subOrds.filter((value, index, subOrds) => subOrds.indexOf(value) === index);
              res[1]["direct-subordinates"] = subOrds;
              return res;
            })
            .catch(err => {
              console.log(err);
            });


        } else {
          return res;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  async fetchEmpData(queryString) {
    return fetch(API_URL + "/" + queryString)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default EmployeeService;