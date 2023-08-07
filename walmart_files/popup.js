// Function to update the popup HTML with segregated URLs
function updatePopupUI(goodUrls, badUrls) {
    const goodUrlsElement = document.getElementById('goodUrls');
    const badUrlsElement = document.getElementById('badUrls');
  
    for (const url of goodUrls) {
      const li = document.createElement('li');
      li.textContent = url;
      li.style.color = 'green'; // Set the text color for good URLs
      goodUrlsElement.appendChild(li);
    }
  
    for (const url of badUrls) {
      const li = document.createElement('li');
      li.textContent = url;
      li.style.color = 'red'; // Set the text color for bad URLs
      badUrlsElement.appendChild(li);
    }
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'urls') {
      // Get the segregated URLs from the message
      const { goodUrls, badUrls } = message;
  
      // Update the popup HTML with the segregated URLs
      updatePopupUI(goodUrls, badUrls);
    }
  });
  