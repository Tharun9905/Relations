const relationships = {
    "padmavathi": {
        "parameswarappa": "Spouse",
        "tharun": "Mother",
        "swarna": "Mother",
        "sravani": "Mother",
        "raja": "Mother-in-law",
        "krishna": "Mother-in-law",
        "jashvik": "Grandmother",
        "jaanu": "Grandmother",
        "hima": "Grandmother"
    },
    "parameswarappa": {
        "padmavathi": "Spouse",
        "tharun": "Father",
        "swarna": "Father",
        "sravani": "Father",
        "raja": "Father-in-law",
        "krishna": "Father-in-law",
        "jashvik": "Grandfather",
        "jaanu": "Grandfather",
        "hima": "Grandfather"
    },
    "tharun": {
        "padmavathi": "Son",
        "parameswarappa": "Son",
        "swarna": "Sister",
        "sravani": "Sister",
        "raja": "Brother-in-law",
        "krishna": "Brother-in-law",
        "jashvik": "Uncle",
        "jaanu": "Uncle",
        "hima": "Uncle"
    },
    "swarna": {
        "padmavathi": "Daughter",
        "parameswarappa": "Daughter",
        "tharun": "Brother",
        "sravani": "Sister",
        "raja": "Spouse",
        "krishna": "Sister-in-law",
        "jashvik": "Mother",
        "jaanu": "Big mother",
        "hima": "Big mother"
    },
    "sravani": {
        "padmavathi": "Daughter",
        "parameswarappa": "Daughter",
        "tharun": "Brother",
        "swarna": "Sister",
        "raja": "Brother-in-law",
        "krishna": "Spouse",
        "jashvik": "Small mother",
        "jaanu": "Mother",
        "hima": "Mother"
    },
    "raja": {
        "padmavathi": "Son-in-law",
        "parameswarappa": "Son-in-law",
        "tharun": "Brother-in-law",
        "swarna": "Spouse",
        "sravani": "Sister-in-law",
        "krishna": "Brother",
        "jashvik": "Father",
        "jaanu": "Big father",
        "hima": "Big father"
    },
    "krishna": {
        "padmavathi": "Son-in-law",
        "parameswarappa": "Son-in-law",
        "tharun": "Brother-in-law",
        "swarna": "Sister-in-law",
        "sravani": "Spouse",
        "raja": "Brother-in-law",
        "jashvik": "Small father",
        "jaanu": "Father",
        "hima": "Father"
    },
    "jashvik": {
        "padmavathi": "Grandson",
        "parameswarappa": "Grandson",
        "tharun": "Nephew",
        "swarna": "Son",
        "sravani": "Small Mother",
        "raja": "Son",
        "krishna": "Small Father",
        "jaanu": "Cousin",
        "hima": "Cousin"
    },
    "jaanu": {
        "padmavathi": "Granddaughter",
        "parameswarappa": "Granddaughter",
        "tharun": "Niece",
        "swarna": "Daughter",
        "sravani": "Daughter",
        "raja": "Daughter",
        "krishna": "Daughter",
        "jashvik": "Cousin",
        "hima": "Sister"
    },
    "hima": {
        "padmavathi": "Granddaughter",
        "parameswarappa": "Granddaughter",
        "tharun": "Niece",
        "swarna": "Daughter",
        "sravani": "Daughter",
        "raja": "Daughter",
        "krishna": "Daughter",
        "jashvik": "Cousin",
        "jaanu": "Sister"
    }
};

function findRelationship() {
    const member1 = document.getElementById('member1').value;
    const member2 = document.getElementById('member2').value;
    const resultDiv = document.getElementById('result');

    if (member1 === member2) {
        resultDiv.textContent = "They are the same person.";
        return;
    }

    const relationship = relationships[member1][member2] || "No direct relationship found.";
    resultDiv.textContent = `${capitalizeFirstLetter(member1)} is ${relationship} of ${capitalizeFirstLetter(member2)}.`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
