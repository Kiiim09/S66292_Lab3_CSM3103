document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var contactName = document.getElementById('contactName').value;
    var contactPhone = document.getElementById('contactPhone').value;
    
    var contact = navigator.contacts.create();
    contact.displayName = contactName;
    contact.phoneNumbers = [{
        type: 'mobile',
        value: contactPhone
    }];
    
    contact.save(function onSuccess(contact) {
        alert('Contact saved successfully!');
        // Clear form fields after saving
        document.getElementById('contactName').value = '';
        document.getElementById('contactPhone').value = '';
    }, function onError(contactError) {
        alert('Error saving contact: ' + contactError);
    });
});

