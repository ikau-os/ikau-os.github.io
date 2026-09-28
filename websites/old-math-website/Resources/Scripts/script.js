// Below is the code which will be used later
// document.querySelectorAll('.link').forEach(button => {
//     button.addEventListener('click', function(event) {
//         event.preventDefault();
//         const url = this.getAttribute('data-url');
//         const rememberChoice = localStorage.getItem('rememberChoice');
//         if (rememberChoice === 'leave') {
//             window.location.href = url;
//         } else if (rememberChoice === 'stay') {
//             return;
//         } else {
//             document.getElementById('overlay').style.display = 'block';
//             document.getElementById('popup').style.display = 'block';

//             document.getElementById('stayButton').onclick = function() {
//                 document.getElementById('overlay').style.display = 'none';
//                 document.getElementById('popup').style.display = 'none';
//             };

//             document.getElementById('leaveButton').onclick = function() {
//                 if (document.getElementById('rememberChoice').checked) {
//                     localStorage.setItem('rememberChoice', 'leave');
//                 }
//                 window.location.href = url;
//             };
//         }
//     });
// });

// document.querySelectorAll('.link').forEach(button => {
//     button.addEventListener('click', function(event) {
//         if (this.classList.contains('CS')) {
//             event.preventDefault();
//             const popup = document.createElement('div');
//             popup.id = 'csPopup';
//             popup.style.position = 'fixed';
//             popup.style.top = '50%';
//             popup.style.left = '50%';
//             popup.style.transform = 'translate(-50%, -50%)';
//             popup.style.backgroundColor = 'white';
//             popup.style.padding = '20px';
//             popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
//             popup.style.zIndex = '1000';

//             const closeButton = document.createElement('span');
//             closeButton.innerHTML = '&times;';
//             closeButton.style.position = 'absolute';
//             closeButton.style.top = '10px';
//             closeButton.style.right = '10px';
//             closeButton.style.cursor = 'pointer';
//             closeButton.onclick = function() {
//                 document.body.removeChild(popup);
//             };

//             const message = document.createElement('p');
//             message.textContent = 'The notes are coming soon!! Please wait until it\'s published to the site.';

//             popup.appendChild(closeButton);
//             popup.appendChild(message);
//             document.body.appendChild(popup);
//         }
//     });
// });
