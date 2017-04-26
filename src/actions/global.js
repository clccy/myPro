/**
 * Created by apple on 2017/4/25.
 */
import { CALL_API, CHAIN_API } from 'middleware/api'

export function apply(payload, afterSuccess, afterError) {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/api/v1/topology/world-topo',
            body: payload,
            afterSuccess,
            afterError
        }
    }
}