// Wdait for MetaMask to be enable
window.addEventListener('load', async () => {
  
    if (window.ethereum) {

      await window.ethereum.enable();
    
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
 
      const address = accounts[0];
   
      document.getElementById('address').textContent = address;
    } else {

      document.getElementById('address').textContent = 'MetaMask not installed';
    }
  });