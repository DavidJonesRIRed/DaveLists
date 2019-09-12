document.addEventListener("DOMContentLoaded", function()
{
    /**
     * @param {Event} e
     */

     listArray = [];

     //get UL document element to work with
    const list =document.querySelector("#dave-list ul")

     //add books
    const addForm = document.forms["add-list-items"];

    addForm.addEventListener("submit",function(e)
    {
        e.preventDefault();

        const value = addForm.querySelector('input[type="text"]').value;

        //create elements
        const li = document.createElement("li");
        const listItem = document.createElement("span");
        const deleteBtn = document.createElement("span");

        //add content
        deleteBtn.textContent = "delete";
        listItem.textContent = value;

        //add classes
        listItem.classList.add("name");
        deleteBtn.classList.add("delete");
        
        //append to DOC
        li.appendChild(listItem);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
})