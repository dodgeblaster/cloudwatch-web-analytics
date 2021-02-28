let ANALYTICS_USER_ID
let isFirstWebVitalsMetric = true

function sendToAnalytics(metric) {
    /**
     * We assume the first metric emitted is a web vitals metric.
     * We will take the id that web vitals generates, and store it
     * as a global variable, so our custom metrics can use it as well
     */
    if (isFirstWebVitalsMetric) {
        ANALYTICS_USER_ID = metric.id
        isFirstWebVitalsMetric = false
    }

    /**
     * Any metric originating from web vitals will have an id,
     * including the first metric we get. If we want to send our
     * own custom metrics, we can use the id web-vitals generated
     * by referencing ANALYTICS_USER_ID
     */
    if (!metric.id) {
        metric.id = ANALYTICS_USER_ID
    }

    const url = process.env.REACT_APP_ANALYTICS_ENDPOINT
    const data = { name: metric.name, value: metric.value, id: metric.id }

    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, JSON.stringify(data))
    } else {
        fetch(url, {
            body: JSON.stringify(data),
            method: 'POST',
            keepalive: true
        })
    }
}

export default sendToAnalytics
