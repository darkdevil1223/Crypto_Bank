var contract;
        $(document).ready(function(){
            web3 = new Web3(web3.currentProvider);

            var addres = "0x9F55d3fc0563D3A27e44FC1aF5C1C2799b24B940";
            var abi = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "depositamt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "witdrawamt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkbal",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


            contract = new web3.eth.Contract(abi,addres);
            contract.methods.checkbal().call().then(function(bal){
                $('#balance').html(bal)
            })
        })
        $('#deposit').click(function(){
            var amt = 0;
            amt = parseInt($('#amount').val());

            web3.eth.getAccounts().then(function(accounts){
                var acc = accounts[0];
                return contract.methods.depositamt(amt).send({from:acc});
            }).then(function(tx)
            {
                console.log(tx)
            }).catch(function(tx)
            {
                console.log(tx);
            })
        })
        $('#withdrawl').click(function(){
            var amt = 0;
            amt = parseInt($('#amount').val());

            web3.eth.getAccounts().then(function(accounts){
                var acc = accounts[0];
                return contract.methods.witdrawamt(amt).send({from:acc});
            }).then(function(tx)
            {
                console.log(tx)
            }).catch(function(tx)
            {
                console.log(tx);
            })
        })