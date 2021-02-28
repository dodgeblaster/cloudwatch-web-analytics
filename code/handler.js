module.exports.log = async (event, context) => {
    const data = JSON.parse(event.body)
    console.log(
        JSON.stringify({
            requestId: context.awsRequestId,
            type: 'analytics',
            userId: 'public_' + data.id,
            userAction: data.name,
            duration: data.value
        })
    )

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
            message: 'ok'
        })
    }
}
