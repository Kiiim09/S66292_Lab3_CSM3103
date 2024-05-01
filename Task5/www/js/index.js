document.addEventListener('deviceready', function() 
{
    var deviceInfo = document.getElementById('deviceInfo');
    var platform = document.getElementById('platform');
    var model = document.getElementById('model');
    var uuid = document.getElementById('uuid');
    var version = document.getElementById('version');
    var manufacturer = document.getElementById('manufacturer');
    var serial = document.getElementById('serial');

    platform.textContent = device.platform;
    model.textContent = device.model;
    uuid.textContent = device.uuid;
    version.textContent = device.version;
    manufacturer.textContent = device.manufacturer;
    serial.textContent = device.serial;
});
