// Function to request a unique Webhook URL on page load
function requestWebhookUrl() {
    fetch('https://webhook.site/token')  // Get unique Webhook URL from Webhook.site
        .then(response => response.json())
        .then(data => {
            const webhookUrl = `https://webhook.site/${data.token}`;
            console.log('Webhook URL:', webhookUrl);  // Log the Webhook URL for debugging

            // Send a test request to the Webhook URL
            forwardRequestToWebhook(webhookUrl);
        })
        .catch(error => {
            console.error('Error requesting Webhook URL:', error);
        });
}

// Function to forward the request to Webhook
function forwardRequestToWebhook(webhookUrl) {
    // Send a request to the Webhook URL
    fetch(webhookUrl, {
        method: 'GET', // Simple GET request, can be changed to POST if needed
    })
    .then(response => response.json())
    .then(json => {
        document.getElementById('response').innerHTML = JSON.stringify(json, null, 2);
    })
    .catch(error => {
        console.error('Error forwarding request:', error);
        document.getElementById('response').innerHTML = 'Error occurred while requesting the Webhook URL.';
    });
}

// Automatically request a unique Webhook URL when the page is loaded
window.onload = () => {
    requestWebhookUrl();
};
