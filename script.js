async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const wallet = accounts[0];
            document.getElementById('walletAddress').textContent = wallet;
            fetchTokenBalances(wallet);
        } catch (error) {
            console.error('Wallet connection error:', error);
        }
    } else {
        alert('MetaMask not detected');
    }
}

async function fetchTokenBalances(wallet) {
    const tokens = [
        { name: 'REVCN', address: '0x72b5346e0738060f03289d5a04a67bee82b955ec' },
        { name: 'KBB', address: '0x386c66a0a3d452b7296c0763296fc7d9124e62f8' },
        { name: 'KBC', address: '0x553a0d5074b5f57b90594c9c5db3289a17ee8b9c' }
    ];
    const ul = document.getElementById('tokenList');
    ul.innerHTML = '';
    tokens.forEach(token => {
        const li = document.createElement('li');
        li.textContent = `${token.name} Balance: (fetching...)`;
        ul.appendChild(li);
    });
}

window.onload = connectWallet;