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

  result = []
  async getSub(arr) {
    for (let i = 0; i < arr.length; i++) {
      await fetch(API_URL + "/" + arr[i])
        .then(res => res.json())
        .then(res => {
          if (res[1] && res[1]["direct-subordinates"]) {
            this.result = this.result.concat(res[1]["direct-subordinates"]);
            return this.getSub(res[1]["direct-subordinates"]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    return this.result;
  }

  async getEmployeeDetail(queryString) {
    return this.fetchEmpData(queryString)
      .then(res => {
        if (res[1] && res[1]["direct-subordinates"]) {

          this.result = [...res[1]["direct-subordinates"]];
          return this.getSub(res[1]["direct-subordinates"])
            .then(respone => {
              let output = respone.flat();
              output = output.filter((value, index, output) => output.indexOf(value) === index);
              res[1]["direct-subordinates"] = output;
              return res;
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