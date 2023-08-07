// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'checkUrl') {
      // Get the URL from the message
      const url = message.url;
  
      // Send the URL to the Streamlit app's API for classification
      fetch('https://your-streamlit-app-url.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
        .then(response => response.json())
        .then(result => {
          // Handle the classification result
          if (result.isPhishing) {
            // Block the user from accessing the phishing site and show a warning message
            chrome.tabs.update(sender.tab.id, { url: 'https://your-warning-page-url.com' });
          } else {
            // Allow the user to proceed to the safe site
          }
        })
        .catch(error => {
          console.error('Error during URL classification:', error);
        });
    }
  });

  

  // Background script to communicate with content script and ML model
  
// Function to send links to ML model for evaluation
function detectMaliciousLinks(links) {
    // Implement the code to send links to your ML model's server
    // and receive the results asynchronously
    // Example: Use fetch or XMLHttpRequest to send a POST request
    for(const link of links) {
        const badurls=[];
        const goodurls=[];

    fetch('http://localhost:8502/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
        .then(response => response.json())
        .then(result => {
          // Handle the classification result
          if (result.isPhishing==="Caution! Suspicious website detected") {

            // Block the user from accessing the phishing site and show a warning message
            badUxrls.push(link);
          } else {
            // Allow the user to proceed to the safe site
            goodUrls.push(link);
          }
        })
        .catch(error => {
          console.error('Error during URL classification:', error);
        });
        return {goodUrls: goodUrls, badUrls: badUrls}
    }
}
  
  
  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "sendLinks") {
      const links = request.links;

      detectMaliciousLinks(links).then((results) => {
        // Send the results back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { type: "urls", goodUrls,badUrls });
      });
    }
  });
  
  