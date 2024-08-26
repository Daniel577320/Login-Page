//declaring the values for country, state and city
const State = {
    "India": ["Uttar Pradesh", "Maharashtra", "Bihar"],
    "USA": ["California", "Texas", "New-York"],
    "South Africa": ["Gauteng", "KwaZulu-Natal", "Western Cape"]
};

const Cities = {
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "Maharashtra": ["Mumbai", "Nagpur", "Nashik"],
    "Bihar": ["Patna", "Bihar Sharif", "Gaya"],
    "California": ["San Francisco", "Los Angeles", "San Diego"],
    "Texas": ["Austin", "Dallas", "Houston"],
    "New-York": ["New York", "Buffalo", "Albany"],
    "Gauteng": ["Pretoria", "Johannesburg", "Krugersdorp"],
    "KwaZulu-Natal": ["Durban", "Pietermaritzburg", "Richmond"],
    "Western Cape": ["Cape Town", "Paarl", "Worcester"]
};

const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const cityDropdown = document.getElementById("city");

function ChooseState() {
    const ChosenCountry = countryDropdown.value;
    const StatesOptions = State[ChosenCountry];
    
    //Clearing previous values
    stateDropdown.innerHTML = '<option value="">Select Country First</option>';
    cityDropdown.innerHTML = '<option value="">Select State First</option>';

    //Populating state options
    if (StatesOptions) 
    {
        StatesOptions.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.textContent = "Select Country First";
        stateDropdown.appendChild(option);
    }
}

function ChooseCity() 
{
    const ChosenState = stateDropdown.value;
    const CityOptions = Cities[ChosenState];

    //Clear previous values
    cityDropdown.innerHTML = "";

    //Populate city options
    if (CityOptions)
    {
        CityOptions.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    } else 
    {
        const option = document.createElement("option");
        option.textContent = "Select State First";
        cityDropdown.appendChild(option);
    }
}

//Initialise state and city options based on default country selection
ChooseState();

function otherstyles(inputElement)
{
 inputElement.classList.add("valid-input");
}

//checking whether or not first and last name are in the correct format
let firstLettersValidation = true;
let lastLettersValidation = true;
let cstringValidation = true;

function letters(inputElement, fieldName)
{
    var value = inputElement.value;
    var check = /^[A-Za-z]+$/;
    var legend = inputElement.previousElementSibling

    if (check.test(value))
    {
        inputElement.classList.remove("invalid-input");
        inputElement.classList.add("valid-input");
        legend.classList.remove("blue");
        if (fieldName === "fname")
        {
            firstLettersValidation = true;
        } else if (fieldName === "lname")
        {
            lastLettersValidation = true;
        }
    }else
    {
        inputElement.classList.remove("valid-input");
        inputElement.classList.add("invalid-input");
        legend.classList.add("blue");
        if (fieldName === "fname")
        {
            firstLettersValidation = false;
            fnameError.innerHTML = "Must only contain letters";
        } else if (fieldName === "lname")
        {
            lastLettersValidation = false; 
            lnameError.innerHTML = "Must only contain letters";
        }
    }

    console.log("flettersValidation: " + firstLettersValidation);
    console.log("llettersValidation: " + lastLettersValidation);
}

//checking if user id and email are both strings
function cstring(inputElement)
{
    var value = inputElement.value;
    if (typeof value === "string")
    {
        inputElement.classList.remove("invalid-input");
        inputElement.classList.add("valid-input");
        cstringValidation = true;
    }else
    {
        inputElement.classList.remove("valid-input");
        inputElement.classList.add("invalid-input");
        cstringValidation = false;
    }

    if (typeof value === "string")
    {
        inputElement.classList.remove("invalid-input");
        inputElement.classList.add("valid-input");
        cstringValidation = true;
    } else
    {
        inputElement.classList.remove("valid-input");
        inputElement.classList.add("invalid-input");
        cstringValidation = false;
    }
    console.log("cssValidation: " + cstringValidation);
}

//function for the reset link
function resetdata()
{
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const IdInput = document.getElementById("userid");
    const countryInput = document.getElementById("country");
    const stateInput = document.getElementById("state");
    const cityInput = document.getElementById("city");
    const phoneInput = document.getElementById("phone");
    const referenceInput = document.getElementById("reference");

    fnameInput.value = "";
    lnameInput.value = "";
    emailInput.value = "";
    IdInput.value = "";
    countryInput.selectedIndex = 0;
    stateInput.selectedIndex = 0;
    cityInput.selectedIndex = 0;
    phoneInput.value = "";
    referenceInput.value = "";

    fnameInput.classList.remove("invalid-input");
    fnameInput.classList.remove("valid-input");
    lnameInput.classList.remove("invalid-input");
    lnameInput.classList.remove("valid-input");
    emailInput.classList.remove("invalid-input");
    emailInput.classList.remove("valid-input");
    IdInput.classList.remove("invalid-input");
    IdInput.classList.remove("valid-input");
    countryInput.classList.remove("invalid-input");
    countryInput.classList.remove("valid-input");
    stateInput.classList.remove("invalid-input");
    stateInput.classList.remove("valid-input");
    cityInput.classList.remove("invalid-input");
    cityInput.classList.remove("valid-input");
    phoneInput.classList.remove("invalid-input");
    phoneInput.classList.remove("valid-input");
    referenceInput.classList.remove("invalid-input");
    referenceInput.classList.remove("valid-input");
}

//function to check if all the input fields are populated
function validate()
{
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const IdInput = document.getElementById("userid");
    const countryInput = document.getElementById("country");
    const stateInput = document.getElementById("state");
    const cityInput = document.getElementById("city");
    const phoneInput = document.getElementById("phone");
    const referenceInput = document.getElementById("reference");

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const IdError = document.getElementById("IdError");
    const countryError = document.getElementById("countryError");
    const stateError = document.getElementById("stateError");
    const cityError = document.getElementById("cityError");
    const phoneError = document.getElementById("phoneError");
    const referenceError = document.getElementById("referenceError");

    fnameError.innerHTML = "";
    lnameError.innerHTML = "";
    emailError.innerHTML = "";
    IdError.innerHTML = "";
    countryError.innerHTML = "";
    stateError.innerHTML = "";
    cityError.innerHTML = "";
    phoneError.innerHTML = "";
    referenceError.innerHTML = "";

    fnameInput.classList.remove("invalid-input");
    lnameInput.classList.remove("invalid-input");
    emailError.classList.remove("invalid-input");
    IdError.classList.remove("invalid-input");
    countryError.classList.remove("invalid-dropdowninput");
    stateError.classList.remove("invalid-dropdowninput");
    cityError.classList.remove("invalid-dropdowninput");
    phoneError.classList.remove("invalid-input");
    referenceError.classList.remove("invalid-input");

    let valid = true;

    if (fnameInput.value === "")
    {
        fnameError.innerHTML = "First name is required";
        fnameInput.classList.add("invalid-input");
        valid = false;
    }
    if (lnameInput.value === "")
    {
        lnameError.innerHTML = "Last name is required";
        lnameInput.classList.add("invalid-input");
        valid = false;
    }
    if (emailInput.value === "")
    {
        emailError.innerHTML = "Please enter your email address";
        emailInput.classList.add("invalid-input");
        valid = false;
    }
    if (IdInput.value === "")
    {
        IdError.innerHTML = "Please enter your user Id";
        IdInput.classList.add("invalid-input");
        valid = false;
    }
    if (countryInput.selectedIndex === 0)
    {
        countryError.innerHTML = "Please select your country";
        countryInput.classList.add("invalid-dropdowninput");
        valid = false;
    } else
    {
        countryInput.classList.remove("invalid-dropdowninput");
        countryError.innerHTML = "";
    }
    if (stateInput.selectedIndex === 0)
    {
        stateError.innerHTML = "Please select your state";
        stateInput.classList.add("invalid-dropdowninput");
        valid = false;
    } else
    {
        stateInput.classList.remove("invalid-dropdowninput");
        stateError.innerHTML = "";
    }
    if (phoneInput.value === "")
    {
        phoneError.innerHTML = "Please enter your phone number";
        phoneInput.classList.add("invalid-input");
        valid = false;
    }else
    {
        phoneInput.classList.remove("invalid-input");
        phoneError.innerHTML = "";
    }
    if (referenceInput.value === "")
    {
        referenceError.innerHTML = "Please enter your reference code";
        referenceError.classList.add("invalid-input");
        valid = false;
    }
    
    //if input fields meet all the requirements then the form summary is displayed
    if (valid && firstLettersValidation && lastLettersValidation && cstringValidation)
    {
        display();
    }
}

//function to display form summary
function display()
{
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const IdInput = document.getElementById("userid");
    const countryInput = document.getElementById("country");
    const stateInput = document.getElementById("state");
    const cityInput = document.getElementById("city");
    const phoneInput = document.getElementById("phone");
    const referenceInput = document.getElementById("reference");

    const DisplayInfo = [
    "User first name: " + fnameInput.value,
    "User last name: " + lnameInput.value,
    "User email: " + emailInput.value,
    "User ID: " + IdInput.value,
    "User country: " + countryInput.value,
    "User state: " + stateInput.value,
    "User city: " + cityInput.value,
    "User phone: " + phoneInput.value,
    "User reference code: " + referenceInput.value
    ];

    //displaying information in a new window
    const displaySpace = window.open("", "_blank");
    displaySpace.document.write("<html><head><title>User Information</title></head><body");

    DisplayInfo.forEach(info => {
        displaySpace.document.write("<p>" + info + "</p>");
    });

    displaySpace.document.write("</body></html>");

}
