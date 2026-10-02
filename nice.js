let obj = JSON.parse($response.body);

obj.limitsAndFeatures.limits.vCPU = 4;
obj.limitsAndFeatures.limits.memory = 8;
obj.limitsAndFeatures.limits.storage = 100;
obj.limitsAndFeatures.limits.bandwidth = 1000;

$done({
    body: JSON.stringify(obj)
});
