import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'merchandiser/garment-pre-sales-contracts';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("nmerchandiser");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter), size: 10 })
        .then(results => {
            return results.data;
        });
}
