import { API_URL } from '../config/constants';

class EmployeeService {
  async getEmployees(searchText) {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then(res => res.json())
        .then(res => {
          resolve(res.filter(emp => emp.toLowerCase().indexOf(searchText.toLowerCase()) >= 0));
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async getEmployeeDetail(queryString) {
    return new Promise((resolve, reject) => {
      fetch(API_URL + "/" + queryString)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default EmployeeService;