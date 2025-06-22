async function fetchGreeting() {
    const response = await fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: 'query { greetings }',
        }),
    });

    const { data } = await response.json();
    
    return data.greetings;
}

fetchGreeting().then((greetings) => {
    document.getElementById('greetings').textContent = greetings;
})