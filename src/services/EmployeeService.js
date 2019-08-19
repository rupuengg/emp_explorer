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