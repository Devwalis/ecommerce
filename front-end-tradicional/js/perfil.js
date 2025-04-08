



document.addEventListener('DOMContentLoaded', function(){
    const dropdown = document.querySelector('.dropdown-perfil')
    const toggleBtn = document.querySelector('.perfil-toggle')


    toggleBtn.addEventListener('click', function(e){
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e){
        if(!dropdown.contains(e.target)){
            dropdown.classList.remove('active');
        }
    });

    window.addEventListener('scroll', function(){
        dropdown.classList.remove('active');
    });

});


function  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userType');
    window.location.href = 'login.html';
    

}