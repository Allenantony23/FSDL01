// Navbar
document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
`;

// Jumbotron
document.getElementById("jumbotron").innerHTML = `
<div class="jumbotron">
    <h1>Welcome to My Website</h1>
    <p>This is an example of a Bootstrap jumbotron!</p>
</div>
`;

// Breadcrumb
document.getElementById("breadcrumb").innerHTML = `
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">About</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contact</li>
    </ol>
</nav>
`;

// Grid System
document.getElementById("grid").innerHTML = `
<div class="row">
    <div class="col-md-6">
        <h2>Column 1</h2>
        <p>This is the first column of a two-column layout.</p>
    </div>
    <div class="col-md-6">
        <h2>Column 2</h2>
        <p>This is the second column of a two-column layout.</p>
    </div>
</div>
`;

// Form
document.getElementById("form").innerHTML = `
<h2>Contact Form</h2>
<form>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email">
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;
