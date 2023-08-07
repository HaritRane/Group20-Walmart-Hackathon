// Content script to extract links and communicate with background script

// Function to extract active links from the page
function getActiveLinks() {
    const links = [];
    const anchorElements = document.getElementsByTagName("a");
    for (const anchor of anchorElements) {
      if (anchor.href && !anchor.hasAttribute("disabled")) {
        links.push(anchor.href);
      }
    }
    return links;
  }
  
  // Send the active links to the background script
  const activeLinks = getActiveLinks();
  chrome.runtime.sendMessage({ action: "sendLinks", links: activeLinks });
  