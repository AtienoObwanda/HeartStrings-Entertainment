// Live and draft submit:
const handleSubmit = async (e) => {
  e.preventDefault();
  const apiUrl = "http://127.0.0.1:8000/api/plays/";

  const formData = new FormData(e.target); // e.target refers to the form element
  const action = formData.get("action"); // Get the value of the clicked button

  // ... append other form data ...

  if (action === "post") {
    // Additional logic for "Post Live Show" action
    formData.append('status', 'published'); // Set the status to "published"
  } else if (action === "draft") {
    // Additional logic for "Save as Draft" action
    formData.append('status', 'draft'); // Set the status to "draft"
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    body: formData,
  });

  const responseBody = await response.json();
  console.log(responseBody);
};
