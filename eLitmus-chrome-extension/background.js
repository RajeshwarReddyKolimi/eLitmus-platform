chrome.action.onClicked.addListener(function (tab) {

  // for the current tab, inject the "inject.js" file &amp; execute it	
  chrome.scripting.executeScript({

    files: ['inject.js']
  });
});