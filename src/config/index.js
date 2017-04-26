/**
 * Created by apple on 2017/4/25.
 */
const env = process.env.SITE_ENV
let config = {

    API_BASE_URL: 'http://localhost:4000',
    GATE_API_BASE_URL: 'http://localhost:3000/api/v1',
    GATE_BASE_URL:'http://localhost:3000'

}

// if (env == 'staging') {
//     config = {
//         GATE_API_BASE_URL: 'http://localhost:3000/api/v1',
//
//     }
// } else if(env == 'production') {
//     config = {
//         GATE_API_BASE_URL: 'http://localhost:3000',
//
//     }
// }
// typeof window != 'undefined' && (window.CONFIG = config)

export default config;
