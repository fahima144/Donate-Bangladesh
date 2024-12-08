function getInputValueById(id) {
    const value = Number(document.getElementById(id).value);
    return value;
}

function getInnerNumberId(id) {
    const value = Number(document.getElementById(id).innerText);
    return value;
}

function calculateDonation(donationButtonId, donationInputId, account-balanceId, donationAmountId, cardId) {
    document.getElementById(donationButtonId).addEventListener('click', function () {
        const inputValue = getInputValueById(donationInputId);

        if (inputValue <= 0 || isNaN(inputValue)) {
            document.getElementById(donationInputId).value = "";
            alert('Please enter a valid amount.');
            return;
        }

        const account-balanceValue = getInnerNumberId(account-balanceId);

        if (inputValue >= account-balanceValue) {
            document.getElementById(donationInputId).value = "";
            alert('Your account-balance is insufficient');
            return;
        }

        let donationAmount = getInnerNumberId(donationAmountId);
        donationAmount += inputValue;
        const newBalance = account-balanceValue - inputValue;
        document.getElementById(donationAmountId).innerText = donationAmount.toFixed(2);
        document.getElementById(account-balanceId).innerText = newBalance.toFixed(2);
        const causeText = document.getElementById(cardId).innerText;

        const historyItem = document.createElement('div');
        historyItem.className = "space-y-3 border rounded-lg p-4";
        historyItem.innerHTML = `
        <p class="font-bold text-xl">${inputValue} Taka is Donated for ${causeText}</p>
        <p>${new Date()}</p>
        `;

        const historyContainer = document.getElementById('history-section');
        document.getElementById('history-section').insertBefore(historyItem, historyContainer.firstChild);
        document.getElementById(donationInputId).value = "";

        document.getElementById('congrats').shoModal();
    })
}

function addHidden(id) {
    document.getElementById(id).classList.add('hidden');
}

function removeHidden(id) {
    document.getElementById(id).classList.remove('hidden');
}

calculateDonation('donation-btn-1', 'donation-input-1', 'donation-amount-1', 'donation-amount-1', 'card-1');

calculateDonation('donate-btn-2', 'donate-input-2', 'donation-amount-2', 'donation-amount-2', 'cause-2');

calculateDonation('donate-btn-3', 'donate-input-3', 'donation-amount-2', 'donation-amount-3', 'cause-3');

document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.add("font-semibold", "bg-green_yellow");
    addHidden("donation-card");
    removeHidden("history-section");
    document.getElementById('donation-btn').classList.remove("font-semibold", "bg-green_yellow");
    document.getElementById('donation-btn').classList.add("border", "border-slate-300");
})


document.getElementById('donation-btn').addEventListener('click', function () {
    removeHidden("donation-card");
    addHidden("history-section");
    document.getElementById('donation-btn').classList.add("font-semibold", "bg-green_yellow");
    document.getElementById('history-btn').classList.remove("font-semibold", "bg-green_yellow");
})


document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html"
})