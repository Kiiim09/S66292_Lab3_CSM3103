document.getElementById("addContact").addEventListener("click",addContact);
document.getElementById("findContact").addEventListener("click",findContact);
document.getElementById("deleteContact").addEventListener("click",deleteContact);


function addContact() {
    var myContact = navigator.contacts.create(
        {
            "displayName":"Ahmad Faisal"
        }
    );
    myContact.save(addSuccess,addFailed);
}
        function addSuccess(){
            alert("Contact successfully Add!");
        }
        function addFailed(message){
            alert("Add contact failed,reasons"+message);
        }

function findContact(){
    var options = new ContactFindOptions();
    options.filter="Ahmad Faisal";
    options.multiple=true;
    fields=['displayName'];
    navigator.contacts.find(fields,findSuccess,findFailed,options);
}
        function findSuccess(contacts){
            for( var i=0; i< contacts.length; i++){
                alert("Display Name ="+contacts[i].displayName);

            }
        }
        function findFailed(message){
            alert("Find Contact Failed,reasons"+message);
        }
function deleteContact(){
    var options = new ContactFindOptions();
    options.filter="Ahmad Faisal";
    options.multiple=true;
    fields=['displayName'];
    navigator.contacts.find(fields,findDeleteSuccess,findFailed,options);
}
function findDeleteSuccess(contacts){
    var contact = contacts[0];
    contact.remove(contactRemoveSuccess,contactRemoveFailed);
}
        function contactRemoveSuccess(){
            alert("Contact Deleted!")
        }
        function contactRemoveFailed(message){
            alert("Remove failed:reason"+message);
        }


        