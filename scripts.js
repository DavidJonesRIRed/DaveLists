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
        const chkBx = document.createElement("span");
        const listItem = document.createElement("span");
        const deleteBtn = document.createElement("span");

        //add content
        deleteBtn.textContent = "delete";
        listItem.textContent = value;
        chkBx.innerHTML="<input type='checkbox'>done"
        //chkBx.textContent="done";

        //add classes
        chkBx.classList.add("listDone");
        listItem.classList.add("name");
        deleteBtn.classList.add("delete");
        
        //append to DOC
        li.appendChild(chkBx);
        li.appendChild(listItem);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    //delete list item
    list.addEventListener("click", function(e)
    {
        if(e.target.className == "delete")
        {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });
})