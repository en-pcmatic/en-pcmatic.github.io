
(function () {
  const modal = document.getElementById("errorModal");
  const status = document.getElementById("statusMessage");
  const fill = document.getElementById("progressFill");
  const number = document.getElementById("progressNumber");

  let progress = 1;
  let scanTimer = null;

  function startScan() {
    clearInterval(scanTimer);

    progress = 1;
    fill.style.width = "1%";
    number.textContent = "1%";

    modal.style.display = "block";

    status.textContent =
      "Demonstration scan running. No actual device scan performed.";

    scanTimer = setInterval(function () {
      progress++;

      fill.style.width = progress + "%";
      number.textContent = progress + "%";

      if (progress >= 100) {
        clearInterval(scanTimer);

        status.textContent =
          "Demo scan reached 100%. Example scan error displayed. No actual scan performed.";
      }

    }, 120);
  }

  document.getElementById("retryScan").onclick = function () {
    startScan();
  };

  document.getElementById("closeModal").onclick = function () {
    modal.style.display = "none";
  };

  document.getElementById("headerClose").onclick = function () {
    modal.style.display = "none";
  };

  document.getElementById("troubleshoot").onclick = function () {
    status.textContent =
      "Demo guidance: Check your internet connection, restart the application, and review available software updates.";
  };

  // Start the demonstration automatically
  startScan();

})();
