import * as axios from "axios";

export const recordTypes = {currency: 'currency', add: 'add', remove: 'remove', navigate: 'navigate', sort: 'sort' }
export const recordConstructor = (type, message) => ({type, message})

const eCommerceAPIv1 = axios.create({
    baseURL: '/api/v1/'
});

const api = {
    postLog(record) {
        return eCommerceAPIv1.post(`log/`, record).then(data => data.data)
    },
    getLog() {
        return eCommerceAPIv1.get(`log/`).then(data => data.data)
    },
    clearLog() {
        return eCommerceAPIv1.delete(`log/`).then(data => data.data)
    }
}

export default api