/* Show / hide password toggle.
   Works for any .toggle-password button that controls an input via aria-controls. */
document.querySelectorAll(".toggle-password").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var input = document.getElementById(btn.getAttribute("aria-controls"));
    if (!input) return;

    var show = input.type === "password";
    input.type = show ? "text" : "password";

    btn.textContent = show ? "🙈" : "👁️";
    btn.setAttribute("aria-pressed", String(show));
    btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });
});
