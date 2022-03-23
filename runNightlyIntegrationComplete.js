const delay = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

(async () => {
    console.log('[START-runNightlyIntegrationComplete] About to start job')
    await delay(10)
    console.log('[IN_PROCESS-runNightlyIntegrationComplete] After 10 seconds')
    await delay(10)
    console.log('[IN_PROCESS-runNightlyIntegrationComplete] After 20 seconds')
    await delay(20)
    console.log('[IN_PROCESS-runNightlyIntegrationComplete] After 40 seconds')
    console.log('[END-runNightlyIntegrationComplete] At the end')
})()
