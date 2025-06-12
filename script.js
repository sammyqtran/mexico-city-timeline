document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetDay = button.getAttribute("data-day")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      document.getElementById(targetDay).classList.add("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add loading animation for external links
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener("click", function () {
      // Optional: Add a small loading indicator
      const icon = this.querySelector("i")
      if (icon) {
        const originalClass = icon.className
        icon.className = "fas fa-spinner fa-spin"
        setTimeout(() => {
          icon.className = originalClass
        }, 1000)
      }
    })
  })
})
