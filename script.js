document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filtered = data.records.filter(item =>
                item.name.toLowerCase().includes(query) ||
                item.plate.toLowerCase().includes(query)
            );
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = filtered.map(item =>
                `<div><strong>${item.name}</strong> - Plate: ${item.plate} - Warrant: ${item.warrant}</div>`
            ).join('');
        });
});
