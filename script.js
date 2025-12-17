(function () {
  emailjs.init("hGsmpUYiIqisSXy7S");
})();

function sendMessage() {
  const msg = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!msg) {
    status.innerText = "✋ اكتب رسالة الأول";
    return;
  }

  status.innerText = "جارٍ الإرسال...";

  emailjs.send("service_7h5m1tu", "template_xuw7hk5" , {
    message: msg
  })
  .then(() => {
    status.innerText = "✅ وصلت";
    document.getElementById("message").value = "";
  })
  .catch(() => {
    status.innerText = "متبعتتش 😐";
  });
}