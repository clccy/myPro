/**
 * Created by apple on 2017/4/25.
 */
import superAgent from 'superagent'
import config from 'config/index'

/**
 * https://gate-dev.cachemoment.com/api/swagger#!/product_trials/postApiV1ProductTrials
 */
export function getTopologyTrials(req, res) {
    const payload = req.body;
    const url = `${config.GATE_API_BASE_URL}/api/v1/topology/world-topo`;
    superAgent.get(url)
        .set('Accept', 'application/json')
        .send(payload)
        .end((err, response) => {
            if (err) {
                res.send({
                    code: 1,
                    data: ["接口错误"]
                })
            } else {
                res.send(response.body)
            }
        })
}

