function formFieldHasInput(fieldElement)
{
	if(fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		return false;
	}
	return true;
}

function validate(e)
{
	hideErrors();

	if(formHasErrors()){
		e.preventDefault();

		return false;
	}
	return true;
}


function load(){
	hideErrors();
}

function hideErrors()
{
	let errorFields = document.getElementsByClassName("error");

	for(let i=0; i<errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);