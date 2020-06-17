import Helper from '@ember/component/helper';
import { isNone } from '@ember/utils';
import circular from 'circular';

export default class Json extends Helper {
  compute(params, hash) {
    let [json] = params;
    let { pretty } = hash;

    if (json === undefined) {
      json = 'undefined';
    }

    pretty = isNone(pretty);

    return JSON.stringify(json, circular('#reference', true), pretty ? 2 : null);
  }
}
