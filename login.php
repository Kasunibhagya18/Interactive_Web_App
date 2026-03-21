<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    // SIMPLE USER (FOR DEMO)
    $validEmail = "admin@gmail.com";
    $validPassword = "123456";

    if ($email === $validEmail && $password === $validPassword) {

        $_SESSION["user"] = $email;

        echo "success";

    } else {
        echo "error";
    }
}
?>


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeMeter - Contact Us</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <div class="logo-box">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/typing-keyboard-3d-icon-png-download-6805473.png" alt="Logo" class="logo-img">
                </div>
                <span class="ms-2 fw-bold gradient-text">TypeMeter</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="practice.html">Practice</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="test.html">Test</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tips.html">Tips</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-gradient ms-lg-2" href="login.html" id="authBtn">
                            <i class="fas fa-user me-1"></i>Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <!-- Header -->
                <div class="text-center mb-5">
                    <h1 class="gradient-text mb-3">Get in Touch</h1>
                    <p class="lead text-muted">Have questions? We'd love to hear from you!</p>
                </div>

                <!-- Hero Image -->
                <div class="mb-5">
                    <img src="https://unionassurance.com/wp-content/uploads/2026/01/contact-us-banner20260127.jpg" 
                         alt="Customer support" 
                         class="img-fluid rounded-3 shadow-lg contact-hero-img">
                </div>

                <div class="row">
<div class="container py-5">
    <div class="row">

        <!-- Contact Form -->
        <div class="col-lg-7 mb-4">
            <div class="card glass-card">
                <div class="card-body p-4">
                    <h3 class="mb-4">
                        <i class="fas fa-envelope text-purple me-2"></i>Send us a Message
                    </h3>

                    <form id="contactForm" onsubmit="submitContactForm(event)" method="POST">

                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name *</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address *</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>

                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject *</label>
                            <input type="text" class="form-control" id="subject" name="subject" required>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="form-label">Message *</label>
                            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-gradient w-100">
                            <i class="fas fa-paper-plane me-2"></i>Send Message
                        </button>

                    </form>

                    <!-- Success / Error Message -->
                    <div class="alert alert-success mt-3 d-none" id="successMessage">
                        <i class="fas fa-check-circle me-2"></i>
                        Thank you for your message! We'll get back to you soon.
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-5">

            <div class="card glass-card mb-4">
                <div class="card-body p-4">
                    <h3 class="mb-4">
                        <i class="fas fa-info-circle text-blue me-2"></i>Contact Information
                    </h3>

                    <div class="contact-info-item mb-4">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Email</h5>
                            <p class="text-muted mb-0">kbhagya715@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact-info-item mb-4">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Phone</h5>
                            <p class="text-muted mb-0">078-9788914</p>
                        </div>
                    </div>

                    <div class="contact-info-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Address</h5>
                            <p class="text-muted mb-0">
                                Rajarata University Of Sri Lanka<br>
                                Mihintale, Anuradhapura
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Social Media -->
            <div class="card glass-card">
                <div class="card-body p-4 text-center">
                    <h5 class="mb-3">Follow Us</h5>

                    <div class="social-links">
                        <a href="#" class="social-icon bg-blue">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon bg-info">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon bg-pink">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-icon bg-primary">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </div>
            </div>

        </div>

    </div>
</div>

    <!-- Footer -->
<footer class="bg-dark text-white py-5 mt-5">
    <div class="container">
    <div class="row">

      <!-- About -->
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">TypeMeter</h5>
        <p class="text-light small mb-1">
          Improve your typing speed and accuracy with our interactive typing tests and practice exercises.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Quick Links</h5>
        <ul class="list-unstyled small">
          <li><a href="practice.html" class="footer-link">Practice</a></li>
          <li><a href="test.html" class="footer-link">Take Test</a></li>
          <li><a href="tips.html" class="footer-link">Typing Tips</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div class="col-md-4 mb-4 text-md-end text-center">
        <h5 class="fw-bold mb-3">Connect</h5>
        <div class="d-flex justify-content-md-end justify-content-center gap-3">
          <a href="#" class="footer-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="footer-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="footer-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="footer-icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

    </div>

    <!-- Bottom -->
    <div class="text-center mt-4 pt-3 border-top border-secondary small">
      <p class="mb-0">
        © 2026 TypeMeter. All rights reserved.
      </p>
      <p class="mb-0">
         Developed as part of <strong>ICT 2204 - Web Design</strong>
      </p>
    </div>
  </div>
</footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JS -->
    <script src="script.js"></script>
</body>
</html>*/
