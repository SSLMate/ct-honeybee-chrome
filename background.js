/*
 * Copyright (c) 2017 Opsmate, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Except as contained in this notice, the name(s) of the above copyright
 * holders shall not be used in advertising or otherwise to promote the
 * sale, use or other dealings in this Software without prior written
 * authorization.
 */

var logs = [
	// [ "Log Address", "Log ID (base64-encoded sha256 of log public key)" ]
	[ "ct.googleapis.com/aviator", "aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=" ],
	[ "ct.googleapis.com/pilot", "pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=" ],
	[ "ct.googleapis.com/icarus", "KTxRllTIOWW6qlD8WAfUt2+/WHopctykwwz05UVH9Hg=" ],
	[ "ct.googleapis.com/rocketeer", "7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=" ],
	[ "ct.googleapis.com/skydiver", "u9nfvB+KcbWTlCOXqpJ7RzhXlQqrUugakJZkNo4e0YU=" ],
	[ "ct1.digicert-ct.com/log", "VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=" ],
	[ "ct.ws.symantec.com", "3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=" ],
	[ "vega.ws.symantec.com", "vHjh38X2PGhGSTNNoQ+hXwl5aSAJwIG08/aRfz7ZuKU=" ],
	[ "ctlog.api.venafi.com", "rDua7X+pZ0dXFZ5tfVdWcvnZgQCUHpve/+yhMTt1eC0=" ],
	[ "ctlog.wosign.com", "QbLcLonmPOSvG6e7Kb9oxt7m+fHMBH4w3/rjs7olkmM=" ],
	[ "ctserver.cnnic.cn", "pXesnO11SN2PAltnokEInfhuD0duwgPC7L7bGF8oJjg=" ],
	[ "ct.startssl.com", "NLtq1sPfnAPuqKSZ/3iRSGydXlysktAfe/0bzhnbSO8=" ],
	[ "www.certificatetransparency.cn/ct", "4BJ2KekEllZOPQFHmESYqkj4rbFmAOt5AqHvmQmQYnM=" ],
	[ "ctlog-gen2.api.venafi.com", "AwGd8/2FppqOvR+sxtqbpz5Gl3T+d/V5/FoIuDKMHWs=" ],
	[ "sirius.ws.symantec.com", "FZcEiNe5l6Bb61JRKt7o0ui0oxZSZBIan6v71fha2T8=" ],
	[ "ct2.digicert-ct.com/log", "h3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8=" ],
	[ "mammoth.ct.comodo.com", "b1N2rDHwMRnYmQCkURX/dxUcEdkCwQApBo2yCJo32RM=" ],
	[ "sabre.ct.comodo.com", "VYHUwhaQNgFK6gubVzxT8MDkOHhwJQgXL6OqHQcT0ww=" ]
];
var auditors = [
	"certspotter.com",
	"ct.grahamedgecombe.com"
];

var timeout = 15000;
var base64_re = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/;

function is_base64(obj) {
	return typeof(obj) == "string" && base64_re.test(obj);
}
function is_object(obj) {
	return typeof(obj) == "object" && !Array.isArray(obj) && obj != null;
}
function is_array(obj) {
	return typeof(obj) == "object" && Array.isArray(obj);
}
function is_number(obj) {
	return typeof(obj) == "number";
}
function is_sth(obj) {
	return is_object(obj) &&
		"sth_version" in obj && is_number(obj["sth_version"]) &&
		"tree_size" in obj && is_number(obj["tree_size"]) &&
		"timestamp" in obj && is_number(obj["timestamp"]) &&
		"sha256_root_hash" in obj && is_base64(obj["sha256_root_hash"]) &&
		"tree_head_signature" in obj && is_base64(obj["tree_head_signature"]) &&
		"log_id" in obj && is_base64(obj["log_id"]);
}
function is_pollen(obj) {
	return is_object(obj) && "sths" in obj && is_array(obj["sths"]);
}

function swap(array, i, j) {
	var tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}
function shuffle(array) {
	array = array.slice();
	for (var len = array.length; len > 0; --len) {
		var other = Math.floor(Math.random() * len);
		swap(array, len - 1, other);
	}
	return array;
}

function parse_sth_for_log(raw_json, log_id) {
	try {
		var sth = JSON.parse(raw_json);
		if (is_object(sth)) {
			sth["sth_version"] = 0;
			sth["log_id"] = log_id;
			return sth;
		} else {
			return null;
		}
	} catch (e) {
		return null;
	}
}

function serialize_pollen(sths) {
	return JSON.stringify({ "sths": sths });
}

function parse_pollen(raw_json) {
	try {
		var pollen = JSON.parse(raw_json);
		if (is_pollen(pollen)) {
			return pollen["sths"];
		} else {
			return [];
		}
	} catch (e) {
		return [];
	}
}

function filter_sths(sths) {
	return sths.filter(is_sth);
}

function get_sth(log_address, log_id) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://' + log_address + '/ct/v1/get-sth');
		xhr.timeout = timeout;
		xhr.onload = function() {
			if (xhr.status == 200) {
				resolve(parse_sth_for_log(xhr.responseText, log_id));
			} else {
				resolve(null);
			}
		};
		xhr.onerror = function() {
			resolve(null);
		};
		xhr.ontimeout = function() {
			resolve(null);
		};
		xhr.send();
	});
}

function get_all_sths() {
	var promises = [];
	logs.forEach(function(log_info) {
		promises.push(get_sth(log_info[0], log_info[1]));
	});
	return Promise.all(promises).then(filter_sths);
}

function pollinate_with_auditor(auditor_domain, sths) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://' + auditor_domain + '/.well-known/ct/v1/sth-pollination');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.timeout = timeout;
		xhr.onload = function() {
			if (xhr.status == 200) {
				parse_pollen(xhr.responseText).forEach(function(sth) {
					if (is_sth(sth)) {
						sths.push(sth);
					}
				});
			}
			resolve(sths);
		};
		xhr.onerror = function() {
			resolve(sths);
		};
		xhr.ontimeout = function() {
			resolve(sths);
		};
		xhr.send(serialize_pollen(sths));
	});
}

function pollinate_with_all_auditors(sths) {
	var sths_promise = Promise.resolve(sths);
	shuffle(auditors).forEach(function(auditor_domain) {
		sths_promise = sths_promise.then(function(sths) {
			return pollinate_with_auditor(auditor_domain, sths);
		});
	});
	return sths_promise;
}

function get_random_delay() {
	var values = new Uint32Array(1);
	window.crypto.getRandomValues(values);
	return (2048 + values[0] % 2048) / 60.0; // use power of 2 as modulus to avoid bias
}

function schedule_pollination() {
	chrome.alarms.create('pollinate', {delayInMinutes: get_random_delay()});
}

function pollinate() {
	get_all_sths().then(pollinate_with_all_auditors).then(schedule_pollination);
}

chrome.alarms.onAlarm.addListener(function(alarm) {
	pollinate();
});

chrome.runtime.onInstalled.addListener(function() {
	pollinate();
});
