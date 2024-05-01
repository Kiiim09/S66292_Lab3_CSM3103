document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Add event listener for battery status
    window.addEventListener("batterystatus", onBatteryStatus, false);
}

function onBatteryStatus(info) {
    // Alert message when battery status changes
    alert("BATTERY STATUS: " + info.level);
}

