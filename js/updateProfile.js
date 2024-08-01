async function getUserData() {
    const response = await fetch("./json/user.json");
    
    try {
        if(!response.ok) {
            alert("Erro ao carregar o card.");
            throw new Error(`Response status: ${response.status}`)
        }
            
            const json = await response.json();
            console.log(json)
    } catch (error) {
        alert("Erro ao carregar o card.");
    }

}

getUserData();