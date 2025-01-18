let firstName = document.getElementById("dashboard_firstname");
let lastName = document.getElementById("dashboard_lastname");
let company = document.getElementById("dashboard_company");
let address = document.getElementById("dashboard_address");
let email = document.getElementById("dashboard_email");
let addUserBtn = document.getElementById("dashboard_adduser_button");
let userTableBody = document.getElementById("user_table_body");

// Add User Function
async function addUser() {
  try {
    const { error } = await supabase
      .from("users")
      .insert({
        first_name: firstName.value,
        last_name: lastName.value,
        company: company.value,
        address: address.value,
        email: email.value,
      });

    if (error) throw error;

    // Clear input fields
    firstName.value = "";
    lastName.value = "";
    company.value = "";
    address.value = "";
    email.value = "";

    // Notify the user
    Swal.fire({
      title: "User Added",
      text: "User successfully added to the system",
      icon: "success",
    });

    // Refresh the user table
    getUsers();
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Get Users Function
async function getUsers() {
  try {
    const { data, error } = await supabase.from("users").select();
    if (error) throw error;

    userTableBody.innerHTML = ""; // Clear the table body before rendering

    data.forEach((val) => {
      userTableBody.innerHTML += `
        <tr>
          <td>${val.first_name}</td>
          <td>${val.last_name}</td>
          <td>${val.company}</td>
          <td>${val.email}</td>
          <td>${val.address}</td>
          <td>
            <span>
              <i class="fa-solid fa-trash" onclick="deleteUser(${val.id})"></i>
            </span>
          </td>
        </tr>`;
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Delete User Function
async function deleteUser(userId) {
  try {
    const { error } = await supabase.from("users").delete().eq("id", userId);
    if (error) throw error;

    // Notify the user
    Swal.fire({
      title: "User Deleted",
      text: "User successfully removed from the system",
      icon: "success",
    });

    // Refresh the user table
    getUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Attach Event Listeners
if (addUserBtn) {
  addUserBtn.addEventListener("click", addUser);
}

// Load Users on Page Load
window.onload = getUsers;
