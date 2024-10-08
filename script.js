const toggleButton = document.querySelector(".toggle-button");
const mainMenu = document.querySelector(".main-menu");

toggleButton.addEventListener('click', function () {
    // Toggles the active class
    mainMenu.classList.toggle('active');
        if (mainMenu.classList.contains("active")) {              
            // Adds the close (x) icon 
            toggleButton.innerHTML = "&#215;";
        } else {          
            // Adds the hamburger icon 
            toggleButton.innerHTML = "&#9776;";
        }
});
        function opentab(tabName) {
            var i, tabContents, tabLinks;
            tabContents = document.getElementsByClassName("tab-contents");
            for (i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active-tab");
            }
            tabLinks = document.getElementsByClassName("tab-links");
            for (i = 0; i < tabLinks.length; i++) {
                tabLinks[i].classList.remove("active-link");
            }
            document.getElementById(tabName).classList.add("active-tab");
            event.currentTarget.classList.add("active-link");
        }
        window.onscroll = function() {
            scrollFunction();
        };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
        }
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            
            var firstName = document.getElementById('fname').value;
            var lastName = document.getElementById('lname').value;
            var inquiry = document.getElementById('Inquiry').value;
            var message = document.getElementById('subject').value;
    
            
            var body = 'First Name: ' + firstName + '\n' +
                       'Last Name: ' + lastName + '\n' +
                       'Inquiry: ' + inquiry + '\n' +
                       'Message: ' + message;
    
            
            var emailTo = 'Simbulele.tauzeni@gmail.com';
            var subject = 'New Inquiry';
            var mailtoLink = 'mailto:' + emailTo + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            
    
            window.open(mailtoLink);
        });