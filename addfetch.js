// Wait for MetaMask to be enabled
window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Request access to the user's accounts
      await window.ethereum.enable();
      // Get the user's accounts
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      // Get the first account
      const address = accounts[0];
      // Display the address in the HTML element
      document.getElementById('address').textContent = address;
    } else {
      // If MetaMask is not installed, display an error message
      document.getElementById('address').textContent = 'MetaMask not installed';
    }
  });