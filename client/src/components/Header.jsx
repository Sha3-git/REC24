
function Header() {
    //const user_role = JSON.parse(localStorage.getItem(user));
    //if user_role is employee show employee navbar else show employer navbar
    return (
        <>
        {/**IF EMPLOYER SHOW THIS*/}
            <nav class={`navbar navbar-expand-lg bg-body-tertiary`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Company Name</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Register</a>
                            <a class="nav-link" href="#">Employees</a>
                            <a class="nav-link" href="#">Scheduling</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header