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
	[ "ct.cloudflare.com/logs/nimbus2017", "H7w24ALt6X9AGZ6Gs1c7ikIX2AGHdGrQ2gOgYFTSDfQ=" ],
	[ "ct.cloudflare.com/logs/nimbus2018", "23Sv7ssp7LH+yj5xbSzluaq7NveEcYPHXZ1PN7Yfv2Q=" ],
	[ "ct.cloudflare.com/logs/nimbus2019", "dH7agzGtMxCRIZzOJU9CcMK//V5CIAjGNzV55hB7zFY=" ],
	[ "ct.cloudflare.com/logs/nimbus2020", "Xqdz+d9WwOe1Nkh90EngMnqRmgyEoRIShBh1loFxRVg=" ],
	[ "ct.cloudflare.com/logs/nimbus2021", "RJRlLrDuzq/EQAfYqP4owNrmgr7YyzG1P9MzlrW2gag=" ],
	[ "ct.filippo.io/behindthesofa", "sLeEvIHA3cR1ROiD8FmFu5B30TTYq4iysuUzmAuOUIs=" ],
	[ "ct.gdca.com.cn", "yc+JCiEQnGZswXo+0GXJMNDgE1qf66ha8UIQuAckIao=" ],
	[ "ct.googleapis.com/aviator", "aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=" ],
	[ "ct.googleapis.com/daedalus", "HQJLjrFJizRN/YfqPvwJlvdQbyNdHUlwYaR3PEOcJfs=" ],
	[ "ct.googleapis.com/icarus", "KTxRllTIOWW6qlD8WAfUt2+/WHopctykwwz05UVH9Hg=" ],
	[ "ct.googleapis.com/logs/argon2017", "+tTJfMSe4vishcXqXOoJ0CINu/TknGtQZi/4aPhrjCg=" ],
	[ "ct.googleapis.com/logs/argon2018", "pFASaQVaFVReYhGrN7wQP2KuVXakXksXFEU+GyIQaiU=" ],
	[ "ct.googleapis.com/logs/argon2019", "Y/Lbzeg7zCzPC3KEJ1drM6SNYXePvXWmOLHHaFRL2I0=" ],
	[ "ct.googleapis.com/logs/argon2020", "sh4FzIuizYogTodm+Su5iiUgZ2va+nDnsklTLe+LkF4=" ],
	[ "ct.googleapis.com/logs/argon2021", "9lyUL9F3MCIUVBgIMJRWjuNNExkzv98MLyALzE7xZOM=" ],
	[ "ct.googleapis.com/logs/xenon2018", "sQzVWabWeEaBH335pRUyc5rEjXA76gMj2l04dVvArU4=" ],
	[ "ct.googleapis.com/logs/xenon2019", "CEEUmABxUywWGQRgvPxH/cJlOvopLHKzf/hjrinMyfA=" ],
	[ "ct.googleapis.com/logs/xenon2020", "B7dcG+V9aP/xsMYdIxXHuuZXfFeUt2ruvGE6GmnTohw=" ],
	[ "ct.googleapis.com/logs/xenon2021", "fT7y+I//iFVoJMLAyp5SiXkrxQ54CX8uapdomX4i8Nc=" ],
	[ "ct.googleapis.com/logs/xenon2022", "RqVV63X6kSAwtaKJafTzfREsQXS+/Um4havy/HD+bUc=" ],
	[ "ct.googleapis.com/pilot", "pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=" ],
	[ "ct.googleapis.com/rocketeer", "7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=" ],
	[ "ct.googleapis.com/skydiver", "u9nfvB+KcbWTlCOXqpJ7RzhXlQqrUugakJZkNo4e0YU=" ],
	[ "ct.googleapis.com/submariner", "qJnYeAySkKr0YvMYgMz71SRR6XDQ+/WR73Ww2ZtkVoE=" ],
	[ "ct.googleapis.com/testtube", "sMyD5aX5fWuvfAnMKEkEhyrH6IsTLGNQt8b9JuFsbHc=" ],
	[ "ct.startssl.com", "NLtq1sPfnAPuqKSZ/3iRSGydXlysktAfe/0bzhnbSO8=" ],
	[ "ct.ws.symantec.com", "3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=" ],
	[ "ct1.digicert-ct.com/log", "VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=" ],
	[ "ct2.digicert-ct.com/log", "h3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8=" ],
	[ "ctlog-gen2.api.venafi.com", "AwGd8/2FppqOvR+sxtqbpz5Gl3T+d/V5/FoIuDKMHWs=" ],
	[ "ctlog.gdca.com.cn", "kkow+Qkzb/Q11pk6EKx1osZBco5/wtZZrmGI/61AzgE=" ],
	[ "ctlog.wosign.com", "QbLcLonmPOSvG6e7Kb9oxt7m+fHMBH4w3/rjs7olkmM=" ],
	[ "ctlog.wotrus.com", "oXEni6iuir1G4jqDj74jdM4lWBrNpUBslrhxAEfpvsI=" ],
	[ "ctlog3.wotrus.com", "mueOgrUnqTLVe4NZadQv4/Ah4TKZis8cN3oV+x5FLFo=" ],
	[ "ctserver.cnnic.cn", "pXesnO11SN2PAltnokEInfhuD0duwgPC7L7bGF8oJjg=" ],
	[ "deneb.ws.symantec.com", "p85KTmIH4K3e5f2qSx+GdodntdACpV1HMQ5+ZwqV6rI=" ],
	[ "dodo.ct.comodo.com", "23b9raxl59CVCIhuIVm9i5A1L1/q0+PcXiLrNQrMe5g=" ],
	[ "log.gdca.com.cn", "cX6nQgl1voSicjVT8Xd8Jt1Rr04QIUQJTZAZtGL7Zmg=" ],
	[ "log2.gdca.com.cn", "FDCNkMzQMBNQBcAcpSbYHoTodiTjm2JI4I9ySuo7tCo=" ],
	[ "mammoth.ct.comodo.com", "b1N2rDHwMRnYmQCkURX/dxUcEdkCwQApBo2yCJo32RM=" ],
	[ "nessie2018.ct.digicert.com/log", "b/FBtWR+QiL37wUs7658If1gjifSr1pun0uKN9ZjPuU=" ],
	[ "nessie2019.ct.digicert.com/log", "/kRhCLHQGreKYsz+q2qysrq/86va2ApNizDfLQAIgww=" ],
	[ "nessie2020.ct.digicert.com/log", "xlKg7EjOs/yrFwmSxDqHQTMJ6ABlomJSQBujNioXxWU=" ],
	[ "nessie2021.ct.digicert.com/log", "7sCV7o1yZA+S48O5G8cSo2lqCXtLahoUOOZHssvtxfk=" ],
	[ "nessie2022.ct.digicert.com/log", "UaOw9f0BeZxWbbg3eI8MpHrMGyfL956IQpoN/tSLBeU=" ],
	[ "plausible.ct.nordu.net", "qucLfzy41WbIbC8Wl5yfRF9pqw60U1WJsvd6AwEE880=" ],
	[ "sabre.ct.comodo.com", "VYHUwhaQNgFK6gubVzxT8MDkOHhwJQgXL6OqHQcT0ww=" ],
	[ "sirius.ws.symantec.com", "FZcEiNe5l6Bb61JRKt7o0ui0oxZSZBIan6v71fha2T8=" ],
	[ "vega.ws.symantec.com", "vHjh38X2PGhGSTNNoQ+hXwl5aSAJwIG08/aRfz7ZuKU=" ],
	[ "yeti2018.ct.digicert.com/log", "wRZK4Kdy0tQ5LcgKwQdw1PDEm96ZGkhAwfoHUWT2M2A=" ],
	[ "yeti2019.ct.digicert.com/log", "4mlLribo6UAJ6IYbtjuD1D7n/nSI+6SPKJMBnd3x2/4=" ],
	[ "yeti2020.ct.digicert.com/log", "8JWkWfIA0YJAEC0vk4iOrUv+HUfjmeHQNKawqKqOsnM=" ],
	[ "yeti2021.ct.digicert.com/log", "XNxDkv7mq0VEsV6a1FbmEDf71fpH3KFzlLJe5vbHDso=" ],
	[ "yeti2022.ct.digicert.com/log", "IkVFB1lVJFaWP6Ev8fdthuAjJmOtwEt/XcaDXG7iDwI=" ]
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
		"sth_version" in obj && obj["sth_version"] === 0 &&
		"tree_size" in obj && is_number(obj["tree_size"]) &&
		"timestamp" in obj && is_number(obj["timestamp"]) &&
		"sha256_root_hash" in obj && is_base64(obj["sha256_root_hash"]) &&
		"tree_head_signature" in obj && is_base64(obj["tree_head_signature"]) &&
		"log_id" in obj && is_base64(obj["log_id"]);
}
function is_pollen(obj) {
	return is_object(obj) && "sths" in obj && is_array(obj["sths"]);
}

function is_known_log(log_id) {
	for (var i = 0; i < logs.length; ++i) {
		if (logs[i][1] == log_id) {
			return true;
		}
	}
	return false;
}
function is_same_sth(a, b) {
	return a["log_id"] == b["log_id"] &&
		a["tree_size"] == b["tree_size"] &&
		a["timestamp"] == b["timestamp"] &&
		a["sha256_root_hash"] == b["sha256_root_hash"];
}
function sth_finder(target_sth) {
	return function(sth) { return is_same_sth(sth, target_sth); };
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

function pollinate_auditor(auditor_domain, sths) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://' + auditor_domain + '/.well-known/ct/v1/sth-pollination');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.timeout = timeout;
		xhr.onload = function() {
			if (xhr.status == 200) {
				parse_pollen(xhr.responseText).forEach(function(sth) {
					if (is_sth(sth) && is_known_log(sth["log_id"])
							&& sths.findIndex(sth_finder(sth)) == -1) {
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

function pollinate_all_auditors(sths) {
	var sths_promise = Promise.resolve(sths);
	shuffle(auditors).forEach(function(auditor_domain) {
		sths_promise = sths_promise.then(function(sths) {
			return pollinate_auditor(auditor_domain, sths);
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
	get_all_sths().then(pollinate_all_auditors).then(schedule_pollination);
}

chrome.alarms.onAlarm.addListener(function(alarm) {
	pollinate();
});

chrome.runtime.onInstalled.addListener(function() {
	pollinate();
});
